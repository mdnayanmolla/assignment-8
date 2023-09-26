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
        <div>
            {noFound?<p className="h-[80vh] flex items-center justify-center">{noFound}</p>:
            <div>
                 {
                    donationsData.map(data=> <DonationsData key={data.id} data={data}></DonationsData>)
                }
             </div>
             }
        </div>
    );
};

export default Donations;