import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../component/Loading/Loading';

const DawaCard = () => {
    const { data: dawas = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://daily-amol-server.vercel.app/dawas`, {

            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-4 m-2'>
            {
                dawas.map(dawa => <div className="bg-gradient-to-r from-indigo-600  to-purple-400 card lg:card-side  my-6 text-white rounded-md border-2 border-amber-500 shadow-xl">
                    <div className="card-body">
                        <div className='text-center w-40' >
                            <h2 className='text-warning text-lg text-center border border-white rounded'> <span className='text-white' >Date:</span> {dawa.date}</h2>
                        </div>
                        <div>
                            <label className="" htmlFor="">Notice</label>
                            <p className='border py-2 rounded border-amber-800'>{dawa?.texts}</p>
                        </div>
                        <div className='mt-4'>
                            
                            <a className='border border-amber-800 btn btn-outline font-semibold text-warning  w-full' target={'_blank'} href={dawa?.tlink}>Text</a>
                        </div>
                        <div className='mt-4'>
                           
                            <a className='border border-amber-800 btn  btn-outline font-semibold text-warning  w-full' target={'_blank'} href={dawa?.vlink}>Video</a>
                        </div>

                    </div>
                </div>)
            }

        </div>
    );
};

export default DawaCard;