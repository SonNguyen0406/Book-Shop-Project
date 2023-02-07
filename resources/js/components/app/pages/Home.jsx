import React from "react";
import BookShelf from "./BookShelf";
import Service from "./Service";
import FlashSale from "./FlashSale";
import NewLetter from "./NewLetter";
import NewBook from "./NewBook";
import Deal from "./Deal";
import Review from "./Review";
import Blog from "./Blog";

const Home = () => {
    return (
        <div>
            <BookShelf />
            <Service />
            <FlashSale />
            <NewLetter />
            <NewBook />
            <Deal />
            <Review />
            <Blog />
        </div>
    );
};

export default Home;
