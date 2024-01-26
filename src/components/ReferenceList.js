// ReferenceList.js
import React from 'react';
import Reference from './Reference';

const ReferenceList = ({ references }) => {
  return (
    <div>
      <h2>Reference</h2>
      {references.map(reference => (
        <Reference key={reference.id} reference={reference} />
      ))}
    </div>
  );
};

export default ReferenceList;
