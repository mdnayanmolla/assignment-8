import { useEffect, useState } from "react";
import DonationsData from "../../components/DonationsData/DonationsData";


const Donations = () => {
    const [donationsData,setDonataionData] = useState([])
    const [noFound,setNoFound] = useState('')
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'));
       if(donationItems){
        setDonataionData(donationItems)
       }else{
        setNoFound('No Data Found')
       }
    },[])
    return (
        <div className="px-[7%] my-16">
            {noFound?<p className="h-[80vh] flex items-center justify-center">{noFound}</p>:
            <div className="grid lg:grid-cols-2 gap-6">
                 {
                    donationsData.map(data=> <DonationsData key={data.id} data={data}></DonationsData>)
                }
             </div>
             }
        </div>
    );
};

export default Donations;