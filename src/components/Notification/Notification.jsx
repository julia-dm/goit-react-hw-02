import PropTypes from 'prop-types';

export default function Notification({children}) {``
   return (
    <div>
         <p>{children} </p>
    </div>
   )
  }
  Notification.propTypes = {
    children: PropTypes.node.isRequired,
  };