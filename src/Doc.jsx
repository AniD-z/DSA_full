import React from "react";


function Doc({ info }) {
  const styles = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    transition: 'transform .2s',
    width: '90%',
    height: '80%',
    padding: '20px',
    margin: 'auto',
    marginBottom: '20px',
    display: "flex",
    flexDirection: "column",
    position : "relative" , 
    left:"2.5rem"
    // top : "40px" ,
    // right:"100px"
  };

  const renderFields = (data, parentKey = '') => {
    return Object.keys(data).map(key => {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      const value = data[key];

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={currentKey} style={{ marginLeft: '10px' }}>
            <strong>{currentKey}:</strong>
            {renderFields(value, currentKey)}
          </div>
        );
      } else {
        return (
          <div key={currentKey} style={{ marginLeft: '10px' }}>
            <strong>{currentKey}:</strong> {value}
          </div>
        );
      }
    });
  };

  return (
    <div style={styles}>
      {renderFields(info)}
    </div>
  );
}

export default Doc