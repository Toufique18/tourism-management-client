import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import SpotCard from "../components/SpotCard/SpotCard";
import CustomerReviews from "../components/CustomerReviews";
import TouristsMem from "../components/TouristsMem";

const Home = () => {

    const spots = useLoaderData();

    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <Banner></Banner>
            <div className="lg:p-9 p-2 ">
                <h1 className="lg:text-3xl md:text-2xl text-2xl text-center font-bold">See Your Favourite Spot</h1>
                <p className="text-center text-xl">Start planning your next adventure today and let ExploreEase be your trusted companion every step of the way. Whether you're embarking on a weekend getaway or a once-in-a-lifetime journey, we're here to make your travel dreams a reality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)}
            </div>
            <CustomerReviews></CustomerReviews>
            
            <TouristsMem></TouristsMem>
        </div>
    );
};

export default Home;


