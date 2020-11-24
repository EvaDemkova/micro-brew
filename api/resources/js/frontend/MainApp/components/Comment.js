import React from "react";
import "./styles/comment.scss";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment__photo">
                <img src={comment.user.profile_photo} alt="" />
            </div>
            <div className="comment__details">
                <h5>{comment.user.name}</h5>
                <p>
                    {/* {comment.text.replace(new RegExp("\r?\n", "g"), "<br />")} */}
                    {comment.text}
                </p>
            </div>
        </div>
    );
};

export default Comment;
