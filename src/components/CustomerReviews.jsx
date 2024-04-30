import img from '../assets/images/profile-1480882496007-db96d21b83d4.jpg'
import img2 from '../assets/images/profile-1504956584097-8075e1de76b7.jpg'
import img3 from '../assets/images/profile-fb-1467929753-02a75cc39300.jpg'
import img4 from '../assets/images/double-commas-vector-6159176.jpg'
const CustomerReviews = () => {
    return (
        <div className=" bg-blue-400 py-20">
            <div className=" text-center ">
                <p className="text-2xl">Reviews</p>
                <h1 className="text-2xl">What Our Tourists Saying!!</h1>
            </div>
            <div className="flex-1 md:flex-1 lg:flex justify-center mt-10">
                <div className=" bg-white rounded-lg shadow-lg p-8 mx-4">
                    <div className=" flex items-center justify-between mb-4">
                        <img src={img} alt="" className="w-20 h-20 rounded-full" />
                        <img src={img4} alt="" className="w-10 h-10 ml-2" />
                    </div>
                    <h4 className="newsletter-title text-xl font-bold mb-2">Mr. David</h4>
                    <p className="common-text text-gray-700"> "Navigating through the website was a breeze! The intuitive design and organized layout made it easy to find the information I needed. From browsing destinations to booking flights, the user experience was exceptional. Definitely my go-to platform for travel planning!"</p>
                </div>
                <div className=" bg-white rounded-lg shadow-lg p-8 mx-4">
                    <div className=" flex items-center justify-between mb-4">
                        <img src={img2} alt="" className="w-20 h-20 rounded-full" />
                        <img src={img4} alt="" className="w-10 h-10 ml-2" />
                    </div>
                    <h4 className="newsletter-title text-xl font-bold mb-2">Mr. Peter</h4>
                    <p className="common-text text-gray-700"> "This website offers an extensive range of destination options that cater to every type of traveler. Whether you're looking for a relaxing beach getaway or an adventurous trekking expedition, you'll find a plethora of choices here. The detailed destination guides and user reviews helped me make informed decisions, ensuring I had a memorable travel experience."</p>
                </div>
                <div className="customer-info bg-white rounded-lg shadow-lg p-8 mx-4">
                    <div className=" flex items-center justify-between mb-4">
                        <img src={img3} alt="" className="w-20 h-20 rounded-full" />
                        <img src={img4} alt="" className="w-10 h-10 ml-2" />
                    </div>
                    <h4 className="newsletter-title text-xl font-bold mb-2">Mr. Antony</h4>
                    <p className="common-text text-gray-700"> "I found the destination guides on this website to be incredibly informative and helpful. Each guide provided detailed insights into the local attractions, culture, cuisine, and activities available at the destination. It helped me plan my itinerary more efficiently and make the most out of my trip."</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
