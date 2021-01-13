import React from "react";
import "./Home.css";
import BlogPosts from "../BlogPosts/BlogPosts.js";

export default function Home() {
    return (
        <div id="home-page">
            <h1>Finding Stella Rd</h1>
            <BlogPosts />
        </div>
        
    )
}