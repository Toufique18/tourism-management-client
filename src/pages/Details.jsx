import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const spots = useLoaderData();
    const { _id } = useParams();
    const idInt = _id;
    const spot = spots.find(spot => spot._id === idInt)
    
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="card bg-base-100 border border-neutral-900 border-opacity-20">
                <figure className="p-5 m-3 rounded-3xl">
                    <img src={spot.image} alt="Shoes" className="rounded-xl cover" />
                </figure>
                <div className="card-body ">
                    
                    <h2 className="text-neutral-900 text-base font-bold font-['Playfair Display']">Tourists spot name: {spot.tourists_spot_name}</h2>
                    <div className="flex justify-between">
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Country Name: {spot.country_Name}</p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Average cost: {spot.average_cost}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Travel time: <span className="text-green-400">{spot.travel_time}</span></p>
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Seasonality: {spot.seasonality}</p>
                        
                    </div>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Visitors: {spot.totalVisitorsPerYear}/year</p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-normal font-['Work Sans']"> {spot.short_description }</p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">location: {spot.location}</p>
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default Details;