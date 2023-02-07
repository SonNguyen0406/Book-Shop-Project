import React from "react";
import {
    HeartOutlined,
    ShoppingCartOutlined,
    HomeOutlined,
    BookOutlined,
} from "@ant-design/icons";
import { Row, Col, Menu, Input } from "antd";
import { useState, useEffect } from "react";
import "../../../../css/header.css";
import { Link } from "react-router-dom";

const { Search } = Input;
const items = [
    {
        label: "Home",
        key: "home",
    },
    {
        label: "Product",
        key: "product",
    },
];

const Header = () => {
    const [current, setCurrent] = useState("home");
    const [scroll, setScroll] = useState(false);
    const onClick = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 70);
        });
      }, []);

    return (
        <div>
            <Row className="header-1">
                <Col span={8} className="header-1-logo">
                    <Link to={"/"}>
                        <BookOutlined />
                        <i>Bookly</i>
                    </Link>
                </Col>
                <Col span={8} className="header-1-search">
                    <Search
                        className="input-search"
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                </Col>
                <Col span={8} className="header-1-icon-nav">
                    <HeartOutlined />
                    <ShoppingCartOutlined />
                    <HomeOutlined />
                </Col>
            </Row>
            <Menu
                className={`header-2 ${scroll ? "active" : ""}`}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
        </div>
    );
};

export default Header;
