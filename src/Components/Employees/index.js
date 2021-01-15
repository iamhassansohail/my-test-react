// Library
import React, {Component} from 'react';
import './style.css';

class Employees extends Component {
    state = {
        username: "iamhassansohail",
        fullName: "Hassan Sohail",
        usernameEdit: false,
        fullNameEdit: false
    }

    inputChanger = (value, target) => {
        const state = {...this.state};
        state[target] = value;
        this.setState(state);

    }

    stateChanger = (value) => {
        const state = {...this.state};
        state[value] = !this.state[value];
        this.setState(state);
    }

    render() {

        console.log("STATE", this.state);
        return (
            <>
                {this.state.usernameEdit ? (
                    <>
                        <input
                            value={this.state.username}
                            className={"input"}
                            name={"username"}
                            onChange={(event) => this.inputChanger(event.target.value, "username")}/>
                        <button onClick={() => this.stateChanger("usernameEdit")}>Save</button>

                    </>
                ) : (
                    <>
                        <h2>Username: {this.state.username}</h2>
                        <button onClick={() => this.stateChanger("usernameEdit")}>Edit</button>
                    </>
                )}
                {this.state.fullNameEdit ? (
                    <>
                        <input
                            value={this.state.fullName}
                            className={"input"}
                            name={"fullName"}
                            onChange={(event) => this.inputChanger(event.target.value, "fullName")}/>
                        <button onClick={() => this.stateChanger("fullNameEdit")}>Save</button>


                    </>
                ) : (
                    <>
                        <h2>Full Name: {this.state.fullName}</h2>
                        <button onClick={() => this.stateChanger("fullNameEdit")}>Edit</button>

                    </>
                )}

            </>
        )
    }
}

export default Employees;