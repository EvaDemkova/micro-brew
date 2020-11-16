import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useGlobalContext } from "../../context";
import "./styles/likeBtn.scss";

const LikeBtn = ({ likes, beerpost_id }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [nbLikes, setNbLikes] = useState(likes.length);
    const user = useGlobalContext();
    console.log(user);

    //create array of all user_id who liked the post
    const user_id_like = [];
    likes.map(like => user_id_like.push(like.user_id));

    useEffect(() => {
        if (user_id_like.indexOf(user.id) !== -1) {
            setIsLiked(true);
        }
    }, []);

    const likeBtn = async () => {
        await axios.get(`/sanctum/csrf-cookie`);

        // New like is inserted if the post is not liked yet
        if (!isLiked) {
            setNbLikes(nbLikes + 1);
            setIsLiked(true);
            const url = `/api/beerposts/${beerpost_id}/like`;
            await axios
                .post(url, {
                    user_id: user.id
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        // Delete the existing like from the database
        else {
            setNbLikes(nbLikes - 1);
            setIsLiked(false);
            const url = `/api/beerposts/${beerpost_id}/unlike`;
            await axios
                .post(url, {
                    user_id: user.id
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    };

    return (
        <div className="likes" onClick={likeBtn}>
            <div className="likes__icon">
                {isLiked ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </div>
            <div className="likes__count">{nbLikes}</div>
        </div>
    );
};

export default LikeBtn;
