import coffee1 from "../../../assets/cups/Rectangle 9.png";
import coffee2 from "../../../assets/cups/Rectangle 16.png";
import coffee3 from "../../../assets/cups/Rectangle 11.png";
import coffee4 from "../../../assets/cups/Rectangle 12.png";
import coffee5 from "../../../assets/cups/Rectangle 13.png";
import coffee6 from "../../../assets/cups/Rectangle 14.png";
import coffee7 from "../../../assets/cups/Rectangle 15.png";
import coffee8 from "../../../assets/cups/Rectangle 10.png";


const Follow = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div>
        <p className="font-rancho text-center text-xl">-- Follow us Now --</p>
        <h2
          style={{ textShadow: "0px 1px 8px #818181" }}
          className="text-center font-rancho text-secondary font-extrabold text-5xl mb-8"
        >
          Follow on Instagram
        </h2>
        <div className="grid grid-cols-4 gap-2 max-w-5xl mx-auto">
          <div>
            <img src={coffee1} alt="Coffe" />
          </div>
          <div className="col-span-2 row-span-2">
            <img className="w-full" src={coffee2} alt="Coffe" />
          </div>
          <div>
            <img src={coffee3} alt="Coffe" />
          </div>
          <div>
            <img src={coffee4} alt="Coffe" />
          </div>
          <div>
            <img src={coffee5} alt="Coffe" />
          </div>
          <div>
            <img src={coffee6} alt="Coffe" />
          </div>
          <div>
            <img src={coffee7} alt="Coffe" />
          </div>
          <div>
            <img src={coffee8} alt="Coffe" />
          </div>
          <div>
            <img src={coffee4} alt="Coffe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
