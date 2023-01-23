import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

function Example() {
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
