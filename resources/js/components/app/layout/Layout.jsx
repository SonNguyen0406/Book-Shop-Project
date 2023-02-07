import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";
import { Layout} from "antd";
import HeaderSection from "../pages/Header";
import "../../../../css/index.css";
import FooterSection from "../pages/Footer";
import Routers from "../routers/Routes";

const { Header, Content, Footer } = Layout;

const Layouts = () => {
    return (
        <Layout id="layout">
            <Header id="header">
                <HeaderSection />
            </Header>
            <Content id="content">
                <Routers />
            </Content>
            <Footer id="footer">
                <FooterSection />
            </Footer>
        </Layout>
    );
};

export default Layouts;
if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <Layouts />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
