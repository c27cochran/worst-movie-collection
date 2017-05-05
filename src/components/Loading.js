import React from 'react';
import { Button } from 'react-bootstrap';
import loadingGif from '../assets/loading-gear.gif';

const Loading = ({ tryAgain }) => (
  <div className="loading-container">
    <h3>Ugh!</h3>
    <div>
      <img src={loadingGif} alt="loading-gear" />
    </div>
    <Button onClick={tryAgain}>Try Again</Button>
  </div>
);

Loading.propTypes = {
  tryAgain: React.PropTypes.func.isRequired,
};

export default Loading;
