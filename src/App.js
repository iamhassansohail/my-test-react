import React, {Component} from 'react';
import Layout from "./Components/Layout";
import Header from './Components/Header/dataIndex';
import Employees from "./Components/Employees";

class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <Header/>
                    <Employees/>
                </Layout>
            </>
        )
    }
}


export default App;
