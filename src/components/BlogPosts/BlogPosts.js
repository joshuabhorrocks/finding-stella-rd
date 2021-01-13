import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./BlogPosts.css";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div id="blog-posts-page">
      <h2 id="welcome">Welcome to Finding Stella Rd.</h2>
      <div id="posts">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <span>
                    <h2 className="blog-title">{post.title}</h2>
                </span>
                <img className="blog-img" src={post.mainImage.asset.url} alt="" />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}