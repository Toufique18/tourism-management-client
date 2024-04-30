import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyList = () => {

    const {user} = useContext(AuthContext)
    const [item, setItem] = useState([]);
    console.log(user);

    useEffect(() =>{
        fetch(`http://localhost:5000/information/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    },[user])
    return (
        <div>
            
            <table>
    <thead>
        <tr className="m-2">
            <th>Tourists Spot Name</th>
            <th>Country Name</th>
            <th>Location</th>
            <th>Average Cost</th>
            <th>Seasonality</th>
            <th>update/delete</th>
        </tr>
    </thead>
    <tbody>
        {item?.map(info => (
            <tr key={info._id}>
                <td>{info.tourists_spot_name}</td>
                <td>{info.country_Name}</td>
                <td>{info.location}</td>
                <td>{info.average_cost}</td>
                <td>{info.seasonality}</td>
                <td className="gap-4">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
};

export default MyList;