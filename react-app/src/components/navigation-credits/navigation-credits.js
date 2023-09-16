import { Component } from "react";

import CreditItem from "../nav-credit-item/nav-credit-item";

class CreditsList extends Component {
    state = {};

    render() {
        // const credits = data.map((item, index) => {
        //     return <CreditItem key={index} />;
        // });

        return (
            <section class="navigation">
                <div class="container container_flex">
                    <div class="navigation_fixed"></div>
                    <div class="navigation_banks" id="navigation">
                        <div class="navigation_banks_univer ">СпбГУ</div>
                        <div class="navigation_banks_speciality ">
                            09.03.04 - Программная инженерия
                        </div>
                        <div class="navigation_banks_sort navigation_banks_sort_hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <CreditItem />
                    <div class="row row-cols-lg-10 g-5 g-lg-3"></div>
                </div>
                <div class="navigation_choise">
                    <div class="navigation_slid">
                        <span class="navigation_slid_disable"></span>
                        <span class="navigation_slid_active"></span>
                        <span class="navigation_slid_disable"></span>
                        <span class="navigation_slid_disable"></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default CreditsList;
