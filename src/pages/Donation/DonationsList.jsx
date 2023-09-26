// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')
import PropTypes from 'prop-types';

const DonationsList = ({ donationList }) => {
    const { id, image, title, text_color, price,description } = donationList || {}

    const handleAddDonation = () => {
        const addedDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (!donationItems) {
            addedDonationArray.push(donationList)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            Swal.fire({
                title: 'Yur Donation is Successfully Done!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        } else {
            const isExits = donationItems.find(item => item.id === id)
            if (!isExits) {
                addedDonationArray.push(...donationItems, donationList)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                Swal.fire({
                    title: 'Yur Donation is Successfully Done!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            } else {
                Swal.fire({
                    title: 'This Category Donation is Complated!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }

        }
    }
    return (
        <div className='px-[7%] my-16'>
            <div>
                <div className='relative'>
                    <img className=' w-full' src={image} alt="" />
                    <div className='absolute bg-black bg-opacity-70 left-0 bottom-0 w-full '>
                       <button onClick={handleAddDonation} style={{backgroundColor:text_color}} className='mx-16 my-8 px-8 py-3 text-white'>Donate { price }</button>
                    </div>
                </div>  
                <div className='mt-8'>
                   <h2 className='text-black font-black text-3xl mb-3'>{title}</h2>
                   <p>{description}</p>
                </div>            
            </div>
        </div>
    );
};


DonationsList.propTypes = {
    donationList: PropTypes.object.isRequired
}
export default DonationsList;