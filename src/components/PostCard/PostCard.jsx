import React from "react";
import { Link } from "react-router-dom";
function PostCard({ id, title, featuredImage, viewCount }) {
  return (
    <div>
      <Link to={`/post/${id}`}>
        <div className="">
          <div className="">
            <img
              src={`service.getiFIlePreview(featuredImage)`}
              alt="postImage"
              className=""
            />
          </div>
          <h2clas>{title}</h2clas>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
