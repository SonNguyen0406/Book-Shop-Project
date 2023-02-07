import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import ImgSale1 from "../../../../img/book-10.png";
import ImgSale2 from "../../../../img/book-11.png";
import ImgSale3 from "../../../../img/book-12.png";
import ImgSale4 from "../../../../img/book-13.png";
import "../../../../css/flashSale.css";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const { Meta } = Card;
const data = [
    {
        id: 1,
        img: ImgSale1,
        book_name: "Book Name",
        price: "$1.00",
        old_price: "$2.00",
    },
    {
        id: 2,
        img: ImgSale2,
        book_name: "Book Name",
        price: "$1.00",
        old_price: "$2.00",
    },
    {
        id: 3,
        img: ImgSale3,
        book_name: "Book Name",
        price: "$1.00",
        old_price: "$2.00",
    },
    {
        id: 4,
        img: ImgSale4,
        book_name: "Book Name",
        price: "$1.00",
        old_price: "$2.00",
    },
];
const FlashSale = () => {
    return (
        <Row className="flash-sale">
            <Divider plain>Flash Sale</Divider>
            <Swiper
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Autoplay, Navigation]}
                style={{ width: "100%" }}
            >
                {data.map(function (data, index) {
                    return (
                        <SwiperSlide>
                            <Col xl={4}>
                                <Card
                                    key={index}
                                    className="flash-sale-card"
                                    hoverable
                                    cover={<img alt="example" src={data.img} />}
                                    style={{ width: "250px" }}
                                >
                                    <Meta title="Europe Street beat" />
                                    <Row
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Col xl={12}>
                                            <h1>{data.price}</h1>
                                        </Col>
                                        <Col xl={12}>
                                            <s>{data.old_price}</s>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button>Add to Card</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Row>
    );
};

export default FlashSale;
