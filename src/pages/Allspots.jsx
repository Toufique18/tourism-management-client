import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard/SpotCard";

const Allspots = () => {
    const spots = useLoaderData();
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)}
            </div>
        </div>
    );
};

export default Allspots;