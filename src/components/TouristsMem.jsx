import img from '../assets/images/cox-bazar.jpg'
import img2 from '../assets/images/Chiang-Mai.jpg'
import img3 from '../assets/images/Phuket.jpg'
const TouristsMem = () => {
  return (
    <div className=" py-20 px-5 lg:px-20 container mx-auto lg:px-20 px-5 py-5">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Today's Best 3 Tourists Memory </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card">
            <img src={img} alt="Image 1" className="w-full h-64 object-cover rounded-md" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cox's-bazar</h3>
              
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src={img3} alt="Image 2" className="w-full h-64 object-cover rounded-md" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Phuket</h3>
              
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src={img2} alt="Image 3" className="w-full h-64 object-cover rounded-md" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Chiang-Mai</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristsMem;
