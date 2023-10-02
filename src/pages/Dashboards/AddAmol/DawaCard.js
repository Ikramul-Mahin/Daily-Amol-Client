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
        <div className='mb-4'>
            {
                dawas.map(dawa => <div className="card lg:card-side bg-neutral my-6 text-neutral-content rounded-md border-2 border-amber-500 shadow-xl">
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

                    </div>
                </div>)
            }

        </div>
    );
};

export default DawaCard;