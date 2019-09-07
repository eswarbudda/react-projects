import React from 'react';


const char = (props) => {
    const style = {
        display: 'inline-block',
        color: 'white',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: 'blue'
    };

    return (
      <div
          style={style} onClick={props.deleted}>
          {props.charactor}
      </div>
    );
};

export default char;