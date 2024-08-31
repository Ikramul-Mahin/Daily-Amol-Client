import React from 'react';

const AddAmolCard = ({ individual, i }) => {
    return (
        <div className=''>
            <div className="card my-2 border-2 border-amber-500 mx-2 h-30 image-full">
               
                <div className="card-body text-warning">
                    <div className='text-left'>
                        <h2>Serial: {i + 1}</h2>
                        <h2 className='text-white text-xl'>Email       :<span className='text-amber-800'> {individual[0]?.email}</span> </h2>
                        <h2 className='text-lg text-white'>Total Gained: <span className='text-amber-800 font-bolds'> {
                            individual?.reduce((prev, next) => {
                                console.log(individual);
                                let gain = Number(next.salat) + Number(next.jikir) + Number(next.quran) + Number(next.sofor) + Number(next.boi) + Number(next.dowa) + Number(next.dawat) + Number(next.mulk) 
                                return prev + gain
                            }, 0)}</span> out of 300
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAmolCard;