import { Component } from "react";

class NavigationItem extends Component {
    state = {};

    render() {
        return (
            <div class="col-md-12">
                <div class="navigation_info navigation_info_text p-3">
                    09.03.04 - Программная инженерия{" "}
                    <span class="navigation_cost">От 5600 в мес.</span> 10+
                    Банков
                </div>
            </div>
        );
    }
}

export default NavigationItem;
