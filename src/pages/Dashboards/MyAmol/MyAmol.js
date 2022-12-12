import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyAmolTable from './MyAmolTable';

const MyAmol = () => {
    const { user } = useContext(AuthContext)
    // const [amols, setAmols] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/amols?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAmols(data))
    // }, [user?.email])

    const { data: amols = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://daily-amol-server.vercel.app/amols?email=${user?.email}`, {

            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Total</th>
                        <th>Gained</th>
                        <th>Missed</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>

            </table>

            {
                amols.map((amol, i) => <MyAmolTable
                    amol={amol}
                    i={i}
                    key={amol._id}
                ></MyAmolTable>)
            }
        </div>
    );
};

export default MyAmol;