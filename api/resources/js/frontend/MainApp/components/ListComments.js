import React, { useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import { useGlobalContext } from "../../context";
import { TextareaAutosize } from "@material-ui/core";

const ListComments = ({ comments, setComments, beerpost_id }) => {
    const [value, setValue] = useState("");
    const { user } = useGlobalContext();

    const handleSubmit = async e => {
        e.preventDefault();

        setComments(prev => [
            ...prev,
            {
                id: new Date().getTime().toString(),
                beerpost_id: beerpost_id,
                user_id: user.id,
                text: value,
                user: { name: user.name, profile_photo: user.photo }
            }
        ]);
        await axios.get(`/sanctum/csrf-cookie`);
        const url = `/api/beerposts/comment`;
        await axios
            .post(url, {
                beerpost_id: beerpost_id,
                user_id: user.id,
                text: value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}

            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={3}
                    placeholder="your comment..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button>Post your comment</button>
            </form>
        </>
    );
};

export default ListComments;
