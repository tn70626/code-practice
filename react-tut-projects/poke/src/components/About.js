import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">This is the about page</h4>
      <p>lorem ipsum </p>
    </div>
  );
};

export default Rainbow(About);
