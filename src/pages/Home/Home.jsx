import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Follow from "./Follow/Follow";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularProducts></PopularProducts>
            <Follow></Follow>
        </div>
    );
};

export default Home;