import { Component } from "react";

import NavigationItem from "../navigation-item/navigation-item";
import searchLogo from "./img/search.svg";

class NavigationList extends Component {
    state = {};

    render() {
        const { data } = this.props;

        //Тут генерим список направлений, генерируется он на основе data, в которой фильтром выбирает нужный вуз
        //вуз приходит из пропсов

        // const navigations = data.map((item) => {
        //     // const { navigation } = item;
        //     // return <NavigationItem key={id} {...itemProps} />;
        // });

        return (
            <section className="navigation">
                <div className="container container_flex">
                    <div className="row">
                        <div className="navigation_input_block col-md-12">
                            <input
                                type="text"
                                className="navigation_input"
                                placeholder="Введите код или название направления"
                            />
                            <img
                                src={searchLogo}
                                alt="search"
                                className="navigation_search"
                            />
                        </div>
                    </div>
                    <div className="row row-cols-lg-1 g-5 g-lg-3">
                        <NavigationItem />
                        <NavigationItem />
                        <NavigationItem />
                        <NavigationItem />
                        {/* {navigations} */}
                    </div>
                </div>
                <div className="navigation_slid">
                    <span className="navigation_slid_disable"></span>
                    <span className="navigation_slid_active"></span>
                    <span className="navigation_slid_disable"></span>
                    <span className="navigation_slid_disable"></span>
                </div>
            </section>
        );
    }
}

export default NavigationList;
