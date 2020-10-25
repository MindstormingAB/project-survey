import React from 'react';

import Restart from './Restart';

const Summary = ({ place, rating, feedback }) => {
  return (
    <div className="summary" tabIndex="0">
      <p>Thank you for spending some time on this evaluation!</p>
      <h2>Here is a summary of your answers:</h2>
      <h3>Your place: <span className="summary-answer">{place}</span></h3>
      <h3>Your feeling after this week: <span className="summary-answer">{rating}</span></h3>
      <h3>Your feedback: <span className="summary-answer">{feedback}</span></h3>
      <Restart />
    </div>
  )
}

export default Summary;