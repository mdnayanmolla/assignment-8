import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsList from "./DonationsList";

const Donation = () => {

  
    const [data, setData] = useState({})

    const { id } = useParams()

    const donations = useLoaderData()
    console.log(typeof donations)
    useEffect(() => {
        const findData = donations?.find((cateData) => cateData.id === id)
        setData(findData)
    }, [id, donations])



    return (
        <div>
            <DonationsList donationList = {data}></DonationsList>
        </div>
    );
};

export default Donation;