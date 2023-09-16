import { Component } from "react";

import logo from "./img/logo/logoPayDay.png";

class Header extends Component {
    state = {
        hamburgerActive: false,
    };

    onHambClick = () => {
        this.setState(({ hamburgerActive }) => ({
            hamburgerActive: !hamburgerActive,
        }));
    };

    render() {
        const { hamburgerActive } = this.state;

        const hamburgerMenuClass =
            "menu_hamburger" + (hamburgerActive ? "_active" : "");

        return (
            <header className="header_menu">
                <div className="menu">
                    <div
                        className={hamburgerMenuClass}
                        onClick={this.onHambClick}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img src={logo} alt="logo" className="menu_logo" />
                    <div className="menu_project_name menu_project_name_text">
                        Имя проекта
                    </div>
                </div>
                <div className="header_login">
                    Вход через <span className="header_login_text">ЕСИА</span>
                </div>
            </header>
        );
    }
}

export default Header;
