import PropTypes from 'prop-types';

function GuestGuard({ children }) {
  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.any
};

export default GuestGuard;
