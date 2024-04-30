import img from '../../assets/images/bali.jpg'
import img2 from '../../assets/images/Angkor-Wat.jpg'
import img3 from '../../assets/images/Penang-Island.jpg'
const Banner = () => {
    return (
        <div className='mb-5'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="flex-1 w-3/5 ">
                        <h1 className="text-center text-2xl text-red-500">Welcome to TourBuddy</h1>
                        <p className="text-center text-xs text-green-500 lg:text-2xl" >TourBuddy is simplifying travel with tools and resources for seamless adventures. Your go-to for hassle-free journey planning and unforgettable experiences.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-center text-xs text-green-500 lg:text-2xl">Join our community of fellow travelers and share your experiences, tips, and recommendations. </p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img  src={img3} className="w-full h-80 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-center text-xs text-green-500 lg:text-2xl">Browse through our curated selection of destinations, from bustling cities to serene countryside retreats</p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;