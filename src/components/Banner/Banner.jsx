
import Background from '../../assets/Rectangle4281.png'
import Search from '../Search/Search';
const Banner = () => {
    return (
        <div className="h-[70vh]  text-center">
            <div className="hero h-[70vh]" style={{ backgroundImage:`url(${Background})` }}>
                <div className="hero-overlay bg-gray-100/90 backdrop-brightness-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <Search></Search>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;