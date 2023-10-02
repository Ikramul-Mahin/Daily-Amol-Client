import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AmolModal from './AmolModal';
import DawaCard from './DawaCard';

const AddAmol = () => {
    const { user } = useContext(AuthContext)



    const { data: allamols = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://daily-amol-server.vercel.app/amols`, {

            })
            const data = await res.json()
            return data
        }
    })
    console.log(allamols);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-4 mb-4'>

            <DawaCard></DawaCard>

            <div className="card glass pt-4 ">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure> */}
                <div className="card-body">
                    <h2 className="text-black">{user?.name}</h2>
                    <div className='text-amber-400'>
                        <h1 className='text-xl'>Octobor Toppers</h1>
                        <ul >
                            <li>1st: Jaber</li>
                            <li>2nd: Hamza</li>
                            <li>3rd: Muyaj</li>
                        </ul>
                    </div>
                    <p className='text-warning font-bold text-lg' >Submit Your Amal!</p>
                    <div className="card-actions justify-start">

                        <label
                            htmlFor="my-modal-3"
                            className="btn bg-green-600 "
                        >আমল জমা দিন</label>

                    </div>
                </div>
            </div>

            <AmolModal
                refetch={refetch}
            ></AmolModal>

            <div>
                <hr className='bg=warning my-4' />
                <h2 className='text-xl text-white text-center my-2'>Latest 10 Amols Submission</h2>
                {
                    allamols.slice(0, 10).map((allamol, i) => <div className="overflow-x-auto">
                        <table className="table table-zebra w-full ">

                            <tbody className=''>
                                <tr className='hover'>
                                    <th>{i + 1}</th>
                                    <td className=''>{allamol.email}</td>
                                    <td>{allamol.date}</td>
                                    <td className=' bg-green-600'></td>
                                </tr>
                                <hr className='my-1 text-center w-full' />
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div >
    );
};

export default AddAmol;