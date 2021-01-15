// Library
import React, {Component} from 'react';

class Layout extends Component {


    render() {
        // console.log("LAYOUT RENDER");
        return (
            <>
                {this.props.children}
            </>
        )
    }

}

export default Layout;