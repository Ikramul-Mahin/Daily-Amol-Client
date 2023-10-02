import React from 'react';

const AddAmolCard = ({ individual, i }) => {
    return (
        <div className=''>
            <div className="card my-2 border-2 border-amber-500 mx-2 h-40 image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body text-warning">
                    <div className='text-center'>
                        <h2>Serial: {i + 1}</h2>
                        <h2 className='text-warning text-xl'>Email: {individual[0]?.email}</h2>
                        <h2 className='text-lg text-warning'>Total Gained: <span className='text-white'> {
                            individual?.reduce((prev, next) => {
                                console.log(individual);
                                let gain = Number(next.salat) + Number(next.jikir) + Number(next.quran) + Number(next.sofor) + Number(next.boi) + Number(next.dowa) + Number(next.dawat) + Number(next.mulk) + Number(next.roja) + Number(next.kahf) + Number(next.tahajjut)
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