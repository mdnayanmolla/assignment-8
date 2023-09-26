import PropTypes from 'prop-types';
// import DonationCard from './DonationCard';
import { Link } from 'react-router-dom'

const DonationAll = ({ donation }) => {
    const { id, image, title, category, text_color, card_bg_color, btn_bg_color } = donation || {};
    return (
        <Link to={`/donation/${id}`}>
        <div className={`${'text_color'}`} style={{ backgroundColor: card_bg_color }}>
            <img className='w-full' src={image} alt='donation'/>
            <div className='py-4 grow h-36'>
              <button className=" mx-4 my-2 px-4 py-1 rounded-md" style={{ backgroundColor: btn_bg_color, color: text_color }}>{category}</button>
              <h2 className="px-4 py-2 text-xl font-bold" style={{ color: text_color }}>{title}</h2>
            </div>
        </div>
    </Link>
    );
};

DonationAll.propTypes = {
    donation: PropTypes.object.isRequired
}
export default DonationAll;