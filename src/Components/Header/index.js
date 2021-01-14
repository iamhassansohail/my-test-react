// Library
import React from 'react';
import "./style.css";
// Components
import Logo from "../Logo";
import NavButton from "../NavButton";

const Header = (props) => {

    return (
        <>
            <div className={"header"}>
                <div className={"logoContainer"}>
                    <Logo/>
                </div>
                <div className={"navBarContainer"}>
                    <NavButton title={"Home"} action={() => {
                        console.log("Home Page clicked")
                    }}/>
                    <NavButton title={"Portfolio"} action={() => {
                        console.log("Portfolio Page clicked")
                    }}/>
                    <NavButton title={"Contact Us"} action={() => {
                        console.log("Contact Page clicked")
                    }}/>
                    <NavButton title={"About Us"} action={() => {
                        console.log("About Page clicked")
                    }}/>
                    <NavButton title={"Help"} action={() => {
                        console.log("Help Page clicked")
                    }}/>

                </div>
            </div>
        </>
    );
};

export default Header;