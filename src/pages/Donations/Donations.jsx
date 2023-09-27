import { useEffect, useState } from "react";
import DonationsData from "../../components/DonationsData/DonationsData";


const Donations = () => {
    const [donationsData,setDonataionData] = useState([])
    const [noFound,setNoFound] = useState('')
    const [showall,setShowAll] = useState(false)
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
                    showall? donationsData.map(data=> <DonationsData key={data.id} data={data}></DonationsData>)
                    :   donationsData.slice(0,4).map(data=> <DonationsData key={data.id} data={data}></DonationsData>)
                  
                }
             </div>
             }
            {
                !showall? <div className="text-center mt-4">
                <button onClick={()=> setShowAll(!showall)} className='px-4 py-2 bg-[#FF444A] text-white'> Show All</button>
            </div>:" "
            }
           
        </div>
    );
};

export default Donations;