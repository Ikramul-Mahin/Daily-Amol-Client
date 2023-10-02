import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyDawaCard from './MyDawaCard';

const MyDawa = () => {
    const { user } = useContext(AuthContext)
    const { data: dawas = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://daily-amol-server.vercel.app/dawas`, {

            })
            const data = await res.json()
            return data
        }
    })
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure u want to confirm!')
        if (proceed) {
            fetch(`https://daily-amol-server.vercel.app/dawas/${id}`, {
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
            <h2>My Dawa</h2>
            <div>
                {
                    dawas?.map(dawa => <MyDawaCard
                        dawa={dawa}
                        key={dawa._id}
                        handleDelete={handleDelete}
                    ></MyDawaCard>)
                }
            </div>
        </div>
    );
};

export default MyDawa;