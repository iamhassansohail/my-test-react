// Library
import React from 'react';


const NavButton = (props) => {
    // console.log("PROPS" , props);
    return (
        <>
            <div style={{
                height: "150px",
                width: "auto",
                padding: "0 20px",
                float:"left",
                lineHeight:"150px",
                fontSize:"35px",
                color:"#fff",
                fontWeight: props.selected ? "bold" : "normal"
            }} onClick={props.action}>
                {props.title}
            </div>
        </>
    )
}
export default NavButton;