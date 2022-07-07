import React from 'react';
import './preloader.css'

const Preloader = () => {
  return (
    <>
      <div className='preloader_body'>
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    </>
  );
};

export {Preloader};