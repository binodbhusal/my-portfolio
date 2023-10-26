import PropTypes from 'prop-types';

const Line = ({ width = 'w-full', blur = false }) => <div className={`h-0.5 ${width}${blur ? 'blur-effect' : ''} bg-gradient-rainblue`} />;
Line.propTypes = {
  width: PropTypes.func.isRequired,
  blur: PropTypes.func.isRequired,
};
export default Line;
