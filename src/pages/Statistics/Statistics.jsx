import { useEffect } from "react";
import { useState } from "react";
import ChartJS from 'chart.js/auto';
import { Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(
    Tooltip, Title, ArcElement, Legend
);

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState([])

    useEffect(() => {
        fetch('./allData.json')
            .then(res => res.json())
            .then(data => setTotalDonation(data))
    }, [])

    const [donationsData, setDonataionData] = useState([])

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        setDonataionData(donationItems)
    }, [])

    // console.log(donationsData.length)
    const data = {
        datasets: [{
            data: [`${donationsData.length}`, `${totalDonation.length}`],
            label: 'Donation',
            backgroundColor: [
                'rgb(0, 196, 159)',
                'rgb(255, 68, 74)',

            ],
            hoverOffset: 4
        }],
        labels: [
            'Your Donation',
            'Total Donation'
        ],
    };


    return (
        <div >
            <div className="flex items-center justify-center h-[100vh]">
                <div className='w-[50%] h-[50%] flex justify-center'>
                    <Pie data={data} />
                </div>
            </div>

        </div>
    );
};

export default Statistics;