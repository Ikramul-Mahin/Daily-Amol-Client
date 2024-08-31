import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyAmolTable from './MyAmolTable';

const MyAmol = () => {
    const { user } = useContext(AuthContext)


    const { data: amols = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://daily-amol-server.vercel.app/amolByEmail?email=${user?.email}`, {

            })
            const data = await res.json()
            return data
        }
    })
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure u want to confirm!')
        if (proceed) {
            fetch(`https://daily-amol-server.vercel.app/amols/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted The Amol')
                        refetch()
                    }
                })
        }
    }
    if (isLoading) {
        return <Loading></Loading>
    }
  
    return (
        <div>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>No.</th>
                        {/* <th>Total</th> */}
                        <th>Gained</th>
                        <th>Missed</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </table>

            {
                amols.map((amol, i) => <MyAmolTable
                    handleDelete={handleDelete}
                    amol={amol}
                    i={i}
                    key={amol._id}
                ></MyAmolTable>)
            }
            <hr />

            <div>
                <h2 className='text-white py-6 text-xl'> Dear {user.displayName}  You Have Gained: <span className='text-amber-800 font-bold '>{amols.reduce((prev, next) => {
                    let gain = Number(next.salat) + Number(next.jikir) + Number(next.quran) + Number(next.sofor) + Number(next.boi) + Number(next.dowa) + Number(next.dawat) + Number(next.mulk) 
                    return prev + gain
                }, 0)}</span> Out Of 300.</h2>
  
            </div>

        </div >
    );
};

export default MyAmol;