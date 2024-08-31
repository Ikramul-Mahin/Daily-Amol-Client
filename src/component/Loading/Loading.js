import React from 'react';

const Loading = () => {
    return (
        <div className='text-center mt-24'>
            <h2 className='text-amber-800 font-semibold'>Loading...</h2>
            <progress className="progress w-56 bg-amber-800 "></progress>
           
        </div>
    );
};

export default Loading;