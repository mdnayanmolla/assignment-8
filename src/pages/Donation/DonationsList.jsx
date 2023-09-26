// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')
import PropTypes from 'prop-types';

const DonationsList = ({ donationList }) => {
    const { id, image } = donationList || {}

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
        <div>
            <img src={image} alt="" />
            <button onClick={handleAddDonation}>add donations</button>
        </div>
    );
};


DonationsList.propTypes = {
    donationList: PropTypes.object.isRequired
}
export default DonationsList;