import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Donation = () => {

  
    const [data, setData] = useState({})
    const { id } = useParams()
    const donations = useLoaderData()
    useEffect(() => {
        const findData = donations?.find(cateData => cateData.id === id)
        setData(findData)
    }, [id, donations])

const handleAddDonation = ()=>{
    console.log(data);
}
    return (
        <div>
           <img src={data.image} alt="" />
           <button onClick={handleAddDonation}>add donations</button>
        </div>
    );
};

export default Donation;