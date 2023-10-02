import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddDawa = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const handleAddDawa = data => {
        console.log(data)
        fetch('https://daily-amol-server.vercel.app/dawas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Dawa Added')
                navigate('/dashboard/mydawa')

            })
    }

    return (
        <div className=''>
            <h2 className='text-center text-lg text-warning font-bold'>Add A Dawa</h2>
            <div className='' >

                <form className='mx-16' onSubmit={handleSubmit(handleAddDawa)} >
                    <div className="form-control w-full  ">
                        <label htmlFor="" className='label text-warning'>Select Date</label>
                        <input type="date" className='py-2 bg-slate-600 text-white' id="start" name="date"{...register("date")}
                        ></input>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="text-warning label-text">Instractions</span> </label>
                        <textarea
                            type="text"
                            className="textarea textarea-info h-40 w-full bg-slate-600 text-white"
                            placeholder="Bio"
                            {...register("texts", {
                            })}
                        ></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="text-warning label-text">Text Link</span> </label>
                        <input type='text'
                            className="input input-bordered w-full bg-slate-600 text-white"
                            {...register("tlink", {

                            })}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="text-warning label-text">Video Link</span> </label>
                        <input type='text'
                            className="input input-bordered w-full bg-slate-600 text-white "
                            {...register("vlink", {

                            })}
                        />
                    </div>
                    <input className='btn bg-green-600 w-full mt-4' value='Add Dawa' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddDawa;