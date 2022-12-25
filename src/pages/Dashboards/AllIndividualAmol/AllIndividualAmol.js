import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AddAmolCard from '../AddAmol/AddAmolCard';

const AllIndividualAmol = () => {
    const { user } = useContext(AuthContext)
    const { data: indiviualAmols = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/individuals`, {

            })
            const data = await res.json()
            return data
        }
    })
    console.log(indiviualAmols[2]);
    if (isLoading) {
        return <Loading ></Loading>
    }
    return (
        <div>
            <h2 className='text-warning text-center'>Total individual amol collection.</h2>
            <div className='grid grid-cols-2'>
                {
                    indiviualAmols.map((individual, i) => <AddAmolCard
                        individual={individual}
                        i={i}
                    ></AddAmolCard>)
                }
            </div>

        </div >
    );
};

export default AllIndividualAmol;