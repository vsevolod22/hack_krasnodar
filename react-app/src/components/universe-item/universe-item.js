import { Component } from "react";

class UniverseItem extends Component {
    state = {};

    render() {
        const { name, credit, pic, onUniverseProps } = this.props;

        return (
            <div
                className="col-2 universe_card universe_card_text"
                onClick={onUniverseProps}
                name={name}
            >
                <img src={pic} alt="universe" className="universe_icon" />
                {name}
                <span>{credit}</span>
            </div>
        );
    }
}

export default UniverseItem;
