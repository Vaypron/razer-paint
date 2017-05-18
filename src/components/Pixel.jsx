import React from 'react';
import PropTypes from 'prop-types';

const pixelSize = '25px';

const Pixel = props => (<div style={{ height: pixelSize, width: pixelSize, border: '1px solid #202022', backgroundColor: props.color }} />);

Pixel.defaultProps = {
    color: '#000',
};

Pixel.propTypes = {
    color: PropTypes.string,
};

export default Pixel;
