import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import SpotCard from "../components/SpotCard/SpotCard";
import CustomerReviews from "../components/CustomerReviews";

const Home = () => {

    const spots = useLoaderData();

    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)}
            </div>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;


