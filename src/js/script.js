
const menuActive = document.querySelector('.menu');
const hamburgerActive = document.querySelector('.menu_hamburger');
console.log(menuActive);

hamburgerActive.addEventListener('click', el => {
    el.currentTarget.classList.toggle('hamburger_active');
    menuActive.classList.toggle('menu_active');
})
window.addEventListener('DOMContentLoaded', () => {
    function eventModalOpen () {
        const modal = document.querySelector('.my_modal');
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    
    function eventModalClose() {
        const modal = document.querySelector('.my_modal');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    function modal() {
         
        //Modal
    
        const modalOpenForm = document.querySelectorAll('[data-modal]'),
              modal = document.querySelector(['.my_modal']);
        console.log(modal, modalOpenForm);
    
    
    
        function modalOpen(event) {
            event.forEach(elem => {
                elem.addEventListener('click', () => {
                    eventModalOpen('.my_modal');
                });
            })
        }
    
    
       
        function modalClose() {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.getAttribute('data-close') == '') {
                    eventModalClose('.my_modal');
                }
            });
    
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape' && modal.classList.contains('show')) {
                    eventModalClose('.my_modal');
                }
            });
    
        }
        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
                console.log('da');
                eventModalOpen('.my_modal');
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
            console.log(window.scrollY);
        
            window.addEventListener('scroll', showModalByScroll);
    
        modalOpen(modalOpenForm);
        modalClose();
        
    
    }


    function forms() {
    // Forms

        const forms = document.querySelectorAll("form");

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо! Сокро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
        forms.forEach(form => {
            console.log(form);
            bindpostData(form);
        });

        
        // const getResurses = async (url) => {
        //     const res = await fetch(url);

        //     if (!res.ok) {
        //         new Error(`Could not fetch ${url}, status: ${res.status}`);
        //     }


        //     return await res.json();
        // };

        function bindpostData(form) {
            form.addEventListener('submit', (el) => {
                el.preventDefault();

                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;



                // const request = new XMLHttpRequest();
                // request.open('POST', 'server.php');

                // request.setRequestHeader('Content-type', 'application/json'); 
                const formData = new FormData(form);


                // request.send(json);

                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `
                form.insertAdjacentElement('afterend', statusMessage);
                const json = JSON.stringify(Object.fromEntries(formData.entries()));

                postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showTanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                }).catch(() => {
                    showTanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

                // request.addEventListener('load', () => {
                //     if (request.status === 200) {

                //         console.log(request.response);
                //         showTanksModal(message.success);
                //         form.reset();
                //         statusMessage.remove();


                //     }
                //     else {
                //         showTanksModal(message.failure);
                //     }
                // });



            });

            function showTanksModal(message) {
                const previosModalDialog = document.querySelector('.my_modal__dialog');
                previosModalDialog.classList.add('hide');

                eventModalOpen('.my_modal');


                const thanksModal = document.createElement('div');
                thanksModal.classList.add('my_modal__dialog');
                thanksModal.innerHTML = `
                    <div class="my_modal__content">
                        <div class="my_modal__close" data-close>×</div>
                        <div class="my_modal__title">${message}</div>
                    </div>
                `;
                document.querySelector('.my_modal').append(thanksModal);
                setTimeout(() => {
                    thanksModal.remove();
                    previosModalDialog.classList.add('show');
                    previosModalDialog.classList.remove('hide');
                    modalClose();

                }, 4000);
            }

        }

    }
    forms();
    modal();
});