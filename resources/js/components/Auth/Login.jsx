import React from "react";
import ReactDOM from "react-dom";
import "../../../css/login.css";
import WaveImg from "../../../img/wave.png";
import BgImg from "../../../img/bg.svg";
import AvtImg from "../../../img/avatar.svg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <>
            <img class="wave" src={WaveImg} />
            <div class="container">
                <div class="img">
                    <img src={BgImg} />
                </div>
                <div class="login-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item className="login-title-form">
                            <img src={AvtImg} />
                            <div class="login-title-text">Welcome</div>
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        
                        <Form.Item>
                            <div className="login-form-forgot" href="">
                                Forgot Password?
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;

if (document.getElementById("login")) {
    ReactDOM.render(<Login />, document.getElementById("login"));
}
