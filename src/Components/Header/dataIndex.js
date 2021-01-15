// Library
import React, {Component} from 'react';
import "./style.css";
// Components
import Logo from "../Logo";
import NavButton from "../NavButton";


class DataHeader extends Component {

    state = {
        selectedMenu: "home",
        menu: [
            {
                title: "Home",
                name: "home",
                action: () => this.changePage("home")
            },
            {
                title: "Portfolio",
                name: "portfolio",
                action: () => this.changePage("portfolio")
            },
            {
                title: "Contact Us",
                name: "contact-us",
                action: () => this.changePage("contact-us")
            },
            {
                title: "About Us",
                name: "about",
                action: () => this.changePage("about")
            },
            {
                title: "Help",
                name: "help",
                action: () => this.changePage("help")
            }
        ]
    }

    changePage = (pageName) => {
        // console.log("PAGE NAME", pageName);
        document.title = pageName;
        this.setState({selectedMenu: pageName});
    }

    render() {

        // console.log("STATE", this.state);
        return (
            <>
                <div className={"header"}>
                    <div className={"logoContainer"}>
                        <Logo/>
                    </div>
                    <div className={"navBarContainer"}>
                        {this.state.menu.map((item, index) => (
                            <NavButton
                                selected={this.state.selectedMenu === item.name}
                                title={item.title}
                                action={item.action}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                {this.state.selectedMenu === "home" ? (
                    <div style={{height: "300px", width: "100%", background: "yellow"}}/>
                ) : null}

                {this.state.selectedMenu === "portfolio" ? (
                    <div style={{height: "300px", width: "100%", background: "pink"}}/>
                ) : null}

                {this.state.selectedMenu === "about" ? (
                    <div style={{height: "300px", width: "100%", background: "green"}}/>
                ) : null}

            </>
        );
    }
}

export default DataHeader;