import { Component } from "react";
import AlphaPng from "./img/alpha.png";

class CreditItem extends Component {
    state = {};

    render() {
        const { name, credit, pic, onUniverseProps } = this.props;

        return (
            <div class="col-12 navigation_card navigation_bank_text">
                <div class="navigation_bank">
                    <img
                        src={AlphaPng}
                        alt="navigation"
                        class="navigation_icon"
                    />
                    Альфа Банк <span>на 15 лет</span>
                </div>
                <div class="navigation_credit">
                    <span class="navigation_credit_cost">10000 рублей/мес</span>
                    <span class="navigation_credit_prosent">6% в год</span>
                </div>
            </div>
        );
    }
}

export default CreditItem;
