import { Component } from "react";

import UniverseItem from "../universe-item/universe-item";
import searchLogo from "./img/search.svg";

class UniverseList extends Component {
    state = {};

    render() {
        const { data, picturesList, onUniverseProps } = this.props;

        //Генерация университетов из списка на основе пропсов
        const universes = data.map((item) => {
            const { id, ...itemProps } = item;

            return (
                <UniverseItem
                    key={id}
                    pic={picturesList[id - 1]}
                    {...itemProps}
                    onUniverseProps={(e) => onUniverseProps(e)}
                />
            );
        });

        return (
            <section className="universe">
                <div className="container container_flex">
                    <div className="row">
                        <div className="universe_input_block col-md-12">
                            <input
                                type="text"
                                className="universe_input"
                                placeholder="Введите название вуза или суза..."
                            />
                            <img
                                src={searchLogo}
                                alt="search"
                                className="universe_search"
                            />
                        </div>
                        {universes}
                    </div>
                </div>
                {/* Переключение активного слайдера в зависимости от секции */}
                <div className="universe_slid">
                    <span className="universe_slid_active"></span>
                    <span className="universe_slid_disable"></span>
                    <span className="universe_slid_disable"></span>
                    <span className="universe_slid_disable"></span>
                </div>
            </section>
        );
    }
}

export default UniverseList;
