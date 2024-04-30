import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();
    console.log(id)
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/information/${id}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
            console.log(data);
        })
    },[id])
    return (
        <div>
            <h1>jgsdfhj</h1>
        </div>
    );
};

export default Update;