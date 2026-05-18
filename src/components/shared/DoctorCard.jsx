import React from 'react';

const DoctorCard = ({data}) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default DoctorCard;