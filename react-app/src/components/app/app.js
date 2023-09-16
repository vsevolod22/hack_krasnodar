import { Component } from "react";
import Header from "../header/header";
import Main from "../main/main";
import "./css/app.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap.min.css";

class App extends Component {
    state = {};

    render() {
        return (
            <div className="app">
                <Header />
                <div class="fixed"></div>
                <Main />
                <footer>
                    <span>Copyrited By PayDay</span>
                </footer>
            </div>
        );
    }
}

export default App;
