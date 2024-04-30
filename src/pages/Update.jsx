import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const spots = useLoaderData();
    const { id } = useParams();
    //const idInt = _id;
    const spot = spots.find(spot => spot._id === id)
    const handleUpdate = event => {
        
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const newInfo = {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userEmail, userName}
        console.log(newInfo)
        //send to the server
        fetch(`https://tourism-management-server-qnkzmpe9n-toufiques-projects.vercel.app/information/${spot._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Data updated ',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
             })

        console.log(newInfo)


    }
    // const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, userEmail, userName, _id } = spots;
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl text-center font-semibold mb-8">Update Tourists Spot information</h1>
                <h1 className="text-3xl text-center font-semibold mb-8">Spot Name: {spot.tourists_spot_name}</h1>
                <h1 className="text-3xl text-center font-semibold mb-8">Updated By: {spot.userName}</h1>
                <form onSubmit={handleUpdate} className="space-y-4">
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label> Image URL:</label>
                            <input type="text" defaultValue={spot.image} name="image" id="image" placeholder="Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Tourists Spot Name:</label>
                            <input type="text" defaultValue={spot.tourists_spot_name} name="tourists_spot_name" id="tourists_spot_name" placeholder="Tourists Spot Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Country Name:</label>
                            <input type="text" defaultValue={spot.country_Name} name="country_Name" id="country_Name" placeholder="Country Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Location:</label>
                            <input type="text" defaultValue={spot.location} name="location" id="location" placeholder="Location" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Short Description:</label>
                            <input type="text" defaultValue={spot.short_description} name="short_description" id="short_description" placeholder="Short Description" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label >Average Cost:</label>
                            <input type="text" defaultValue={spot.average_cost} name="average_cost" id="average_cost" placeholder="Average Cost" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Seasonality:</label>
                            <input type="text" defaultValue={spot.seasonality} name="seasonality" id="seasonality" placeholder="Seasonality" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Travel Time:</label>
                            <input type="text" defaultValue={spot.travel_time} name="travel_time" id="travel_time" placeholder="Travel Time" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Total Visitors Per Year:</label>
                            <input type="text" defaultValue={spot.totalVisitorsPerYear} name="totalVisitorsPerYear" id="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>User Email:</label>
                            <input type="email" defaultValue={spot.userEmail}  name="userEmail" id="userEmail" placeholder="User Email" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>User Name:</label>
                            <input type="text" defaultValue={spot.userName}  name="userName" id="userName" placeholder="User Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                    </div>
                    
                    <button type="submit" value="add info" className="btn btn-primary w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;