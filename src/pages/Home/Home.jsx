
import Banner from "../../components/Banner/Banner";
import DonationAll from "../../components/DonationAll/DonationAll";
import { useEffect, useState } from "react";

const Home = () => {
    const [donationCate , setDonationCate] = useState([])
    useEffect(()=>{
        fetch('./allData.json')
        .then(res=> res.json())
        .then(data=> setDonationCate(data))
      },[])
    return (
        <div className=" pb-36">
            <Banner></Banner>
            <div className="mt-10 ">
                <h2 className="text-2xl font-bold text-center">Donation Categories</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 px-[7%]">
           {
                donationCate?.map(donation=><DonationAll key={donation.id} donation={donation}></DonationAll>)
            }
           </div>
        </div>
    );
};

export default Home;