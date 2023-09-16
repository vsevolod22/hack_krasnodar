import { Component } from "react";

import UniverseList from "../universe/universe-list";
import NavigationList from "../navigation/navigation-list";
import CreditsList from "../navigation-credits/navigation-credits";

//генерятся из get запроса (будет ссылка в universeData вместо #)
import KubGu from "./img/kubgu.jpg";
import Ufu from "./img/ufu.jpg";
import Vshe from "./img/vshe.png";

class Main extends Component {
    state = {
        //генерируется из get запроса
        universeData: [
            //вузы
            {
                id: "1",
                name: "ЮФУ",
                credit: "от 135т руб",
                logo: "#",
                navigation: [
                    //направления
                    {
                        name: "09.03.04 - Программная инженерия ",
                        credit: "От 5600 в мес.",
                        bankCount: " 10+ Банков",
                    },
                    {
                        name: "09.03.04 - Программная инженерия ",
                        credit: "От 5600 в мес.",
                        bankCount: " 10+ Банков",
                    },
                    {
                        name: "09.03.04 - Программная инженерия ",
                        credit: "От 5600 в мес.",
                        bankCount: " 10+ Банков",
                    },
                ],
            },
            {
                id: "2",
                name: "КубГУ",
                credit: "от 135т руб",
                logo: "#",
                navigation: [],
            },
            {
                id: "3",
                name: "ВШЭ",
                credit: "от 135т руб",
                logo: "#",
                navigation: [],
            },
        ],
    };

    //Клик на карточку вуза - должны получить его id, чтобы потом предать его в навигацию
    onClickToUniverse = (e) => {
        console.log(e.target.name);
    };

    render() {
        const { universeData } = this.state; //universeData генерируется через map

        const picturesList = [Ufu, KubGu, Vshe]; //заглушка - картинки будут приходить из universeData

        return (
            //Из UniverseList приходит текущий выбранный вуз, он отправляется в NavigationList
            <>
                {/* тут проиходит переключение слайдеров (мб стоит сделать как список) */}
                {/* <UniverseList
                    data={universeData}
                    picturesList={picturesList}
                    onUniverseProps={this.onClickToUniverse}
                /> */}
                <NavigationList />
                {/* <CreditsList /> */}
            </>
        );
    }
}

export default Main;
