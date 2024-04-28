import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, _id } = spot;
    return (
        <div className="card bg-base-100 border border-neutral-900 border-opacity-20">
            <figure className="p-5 m-3 bg-zinc-100 rounded-3xl">
                <img src={image} alt="Shoes" className="rounded-xl w-72 h-40" />
            </figure>
            <div className="card-body ">

                <h2 className="text-neutral-900 text-base font-bold font-['Playfair Display']">Spot Name: {tourists_spot_name}</h2>
                <div className="flex-1 justify-between">
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Country Name: {country_Name}</p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Average cost: {average_cost}</p>
                </div>

                <div className="flex-1 items-center justify-between">
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Travel time: <span className="text-green-400">{travel_time}</span></p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Visitors: {totalVisitorsPerYear} /year</p>

                </div>
                <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Seasonality: {seasonality}</p>

            </div>
            <div className="text-center p-3">
                <Link to={`/details/${_id}`}>
                <button className="btn btn-primary w-full ">View Details</button>
                    </Link>

            </div>
        </div>
    );
};

export default SpotCard;



