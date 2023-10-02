import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MyDawaCard = ({ dawa, handleDelete }) => {
    console.log(dawa.tlink);
    return (
        <div>
            <div className="card lg:card-side bg-neutral text-neutral-content shadow-xl">
                <div className="card-body">
                    <div className='text-center w-40' >
                        <h2 className='text-warning text-lg text-center border border-yellow-600 rounded'> <span className='text-white p-2' >Date:</span> {dawa.date}</h2>
                    </div>
                    <div>
                        <label className="underline" htmlFor="">Guides</label>
                        <p className='border py-2 border-yellow-600'>{dawa?.texts}</p>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="">Click To Read The Text</label>
                        <a className='border border-yellow-600 btn btn-warning btn-outline font-semibold text-warning  w-full' target={'_blank'} href={dawa?.tlink}>Text</a>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="">Click To See The Video</label>
                        <a className='border border-yellow-600 btn btn-warning btn-outline font-semibold text-warning  w-full' target={'_blank'} href={dawa?.vlink}>Video</a>
                    </div>
                    <div className="card-actions justify-end">
                        <button className='btn btn-error rounded' onClick={() => { handleDelete(dawa?._id) }} >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDawaCard;