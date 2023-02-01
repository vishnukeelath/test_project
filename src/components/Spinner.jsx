import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="spinner">
        <LineWave
        height="100"
        width="100"
        color="#f04a29"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        />

        <p className="spinner-font">{message}</p>
    </div>
  )
}

export default Spinner