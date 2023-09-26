
import PropTypes from 'prop-types';
const DonationsData = ({data}) => {
    const {image} = data
    return (
        <div>
           <img src={image} alt=''/>
        </div>
    );
};
DonationsData.propTypes = {
    data: PropTypes.object
}
export default DonationsData;