
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationsData = ({data}) => {
    const {id,image, title, category, text_color, card_bg_color, btn_bg_color,price} = data
    return (
        <div>
            <div className='flex space-x-4 rounded-md gap-5' style={{backgroundColor:card_bg_color}}>
            <div className='w-[40%]'>
               <img className='w-full h-[100%]' src={image} alt=''/>
            </div>
            <div className='w-[60%] py-4 space-y-3'>
               <button className='py-2 px-5 font-bold' style={{backgroundColor:btn_bg_color, color:text_color}}>{category}</button>
               <h2 className='font-bold text-xl' style={{color:text_color}}>{title}</h2>
               <p className='font-bold' style={{color:text_color}}>{price}</p>
               <Link to={`/donation/${id}`}>
               <button className='py-2 px-6 text-white rounded-md' style={{backgroundColor:text_color}}>View Details</button>
               </Link>
            </div>
        </div>
        </div>
     
    );
};
DonationsData.propTypes = {
    data: PropTypes.object
}
export default DonationsData;