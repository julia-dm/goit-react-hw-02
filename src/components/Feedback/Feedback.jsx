import PropTypes from 'prop-types';
export default function Feedback({value,type,isPercentage=false}){

return(
    <div>
        <p> {type}{value}{isPercentage ? '%' : ''}</p>
       
    </div>

)
}
Feedback.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPercentage: PropTypes.bool,
  };
  