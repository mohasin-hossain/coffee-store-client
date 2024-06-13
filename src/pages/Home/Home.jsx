import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;