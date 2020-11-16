import React, { useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import { useGlobalContext } from "../../context";

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
                user: { name: user.name }
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
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}

            <form onSubmit={handleSubmit}>
                <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="10"
                    placeholder="your comment..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button>Post your comment</button>
            </form>
        </div>
    );
};

export default ListComments;
