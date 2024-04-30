import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'


const AddSpots = () => {
    const {user} = useContext(AuthContext)
    const [name, setName] = useState(user ? user.displayName : '');
    const [email, setEmail] = useState(user ? user.email : '');

    
    const handleSubmit = event => {
        
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
        fetch("http://localhost:5000/information", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'success!',
                        text: 'Data added to database',
                        icon: 'success',
                        confirmButtonText: 'close'
                      })
                }
             })

        console.log(newInfo)


    }
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-8">Add Tourists Spot</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label> Image URL:</label>
                            <input type="text" name="image" id="image" placeholder="Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Tourists Spot Name:</label>
                            <input type="text" name="tourists_spot_name" id="tourists_spot_name" placeholder="Tourists Spot Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Country Name:</label>
                            <input type="text" name="country_Name" id="country_Name" placeholder="Country Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Location:</label>
                            <input type="text" name="location" id="location" placeholder="Location" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Short Description:</label>
                            <input type="text" name="short_description" id="short_description" placeholder="Short Description" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label >Average Cost:</label>
                            <input type="text" name="average_cost" id="average_cost" placeholder="Average Cost" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Seasonality:</label>
                            <input type="text" name="seasonality" id="seasonality" placeholder="Seasonality" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Travel Time:</label>
                            <input type="text" name="travel_time" id="travel_time" placeholder="Travel Time" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Total Visitors Per Year:</label>
                            <input type="text" name="totalVisitorsPerYear" id="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>User Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="userEmail" id="userEmail" placeholder="User Email" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>User Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="userName" id="userName" placeholder="User Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                    </div>
                    
                    <button type="submit" value="add info" className="btn btn-primary w-full">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddSpots;