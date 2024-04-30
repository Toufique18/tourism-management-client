import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/information/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/information/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your place has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">

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
                                <Link to={`/update/${info._id}`}><button className="btn btn-primary">Update</button></Link>
                                <button onClick={() => handleDelete(info._id)} className="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default MyList;