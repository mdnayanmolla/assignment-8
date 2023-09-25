import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const DonationCard = ({donationCate}) => {
    const { id, image, title, category, text_color, card_bg_color, btn_bg_color } = donationCate || {};
    return (
        <Link to={`/donation/${id}`}>
        <div className={`${'text_color'}`} style={{ backgroundColor: card_bg_color }}>
            <img src={image} />
            <button className=" mx-4 my-2 px-4 py-1 rounded-md" style={{ backgroundColor: btn_bg_color, color: text_color }}>{category}</button>
            <h2 className="px-4 py-2" style={{ color: text_color }}>{title}</h2>
        </div>
    </Link>
    );
};
DonationCard.propTypes = {
    donationCate: PropTypes.array
}
export default DonationCard;