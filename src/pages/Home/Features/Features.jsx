import featureImg1 from "../../../assets/icons/1.png";
import featureImg2 from "../../../assets/icons/2.png";
import featureImg3 from "../../../assets/icons/3.png";
import featureImg4 from "../../../assets/icons/4.png";

const Features = () => {
  return (
    <div className="bg-primary bg-opacity-20">
      <div className="container mx-auto py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        <div className="p-4 text-center">
          <img className="mx-auto" src={featureImg1} alt="Feature" />
          <h3 className="font-rancho text-2xl my-4">Awesome Aroma</h3>
          <p className="font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="p-4 text-center">
          <img className="mx-auto" src={featureImg2} alt="Feature" />
          <h3 className="font-rancho text-2xl my-4">High Quality</h3>
          <p className="font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="p-4 text-center">
          <img className="mx-auto" src={featureImg3} alt="Feature" />
          <h3 className="font-rancho text-2xl my-4">Pure Grades</h3>
          <p className="font-raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="p-4 text-center">
          <img className="mx-auto" src={featureImg4} alt="Feature" />
          <h3 className="font-rancho text-2xl my-4">Proper Roasting</h3>
          <p className="font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
