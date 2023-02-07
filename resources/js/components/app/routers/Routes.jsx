import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import BookShelf from "../pages/BookShelf";
import Service from "../pages/Service";
import FlashSale from "../pages/FlashSale";
import NewLetter from "../pages/NewLetter";
import NewBook from "../pages/NewBook";
import Deal from "../pages/Deal";
import Review from "../pages/Review";
import Blog from "../pages/Blog";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/book-shelf" element={<BookShelf />} />
            <Route path="/service" element={<Service />} />
            <Route path="/flash-sale" element={<FlashSale />} />
            <Route path="/new-letter" element={<NewLetter />} />
            <Route path="/new-book" element={<NewBook />} />
            <Route path="/deal" element={<Deal />} />
            <Route path="/review" element={<Review />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
};

export default Routers;
