// import { stringify } from 'postcss';
import PropTypes from 'prop-types';

const DonationsList = ({donationList}) => {
    const {image} = donationList || {}

    const handleAddDonation = ()=>{
       const addedDonationArray = [];
       const  donationItems = JSON.parse(localStorage.getItem('donation'));
      if(!donationItems){
        addedDonationArray.push(donationList)
        localStorage.setItem('donation',JSON.stringify(addedDonationArray))
      }else{
        addedDonationArray.push(...donationItems,donationList)
        localStorage.setItem('donation',JSON.stringify(addedDonationArray))
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