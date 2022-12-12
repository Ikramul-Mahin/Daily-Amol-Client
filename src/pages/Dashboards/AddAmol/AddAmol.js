import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AmolModal from './AmolModal';

const AddAmol = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='my-4'>
            <div className="card glass pt-4 ">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-black">{user?.name}</h2>
                    <p>Submit Your Amal!</p>
                    <div className="card-actions justify-start">
                        <label htmlFor="my-modal-3" className="btn bg-green-600 ">আমল জমা দিন</label>

                    </div>
                </div>
            </div>
            <AmolModal></AmolModal>
        </div>
    );
};

export default AddAmol;