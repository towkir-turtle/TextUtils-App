import React from 'react';

const Alert = ({ alert }) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
