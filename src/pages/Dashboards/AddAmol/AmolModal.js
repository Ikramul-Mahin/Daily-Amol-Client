import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AmolModal = ({ refetch }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const handleAmal = (data) => {
        console.log(data)
        fetch('https://daily-amol-server.vercel.app/amols', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('আলহামদুলিল্লাহ আপনার আমল জমা হয়েছে')
                refetch()
            })




    }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-center">
                <div className="modal-box text-center relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(handleAmal)}>
                        <div className="form-control w-full  ">
                            <input readOnly defaultValue={user?.email} {...register("email")} />
                        </div>
                        <br />
                        <div className="form-control w-full  ">
                            <label htmlFor="" className='label'>তারিখ সিলেক্ট করুন?</label>
                            <input type="date" className='py-2' id="start" name="date"{...register("date")}
                            ></input>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">১. ৫ ওয়াক্ত সালাত এবং পরবর্তি আমল? </label>
                            <select className=' border p-4' {...register("salat")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> ২. সকাল-সন্ধ্যার আমল?</label>
                            <select className=' border p-4' {...register("jikir")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">৩. ৪ পৃষ্ঠা কোরআন তিলাওয়াত?  </label>
                            <select className=' border p-4' {...register("quran")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">৪. ১০ পৃষ্ঠা বই পড়া? </label>
                            <select className=' border p-4' {...register("boi")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">৫. ১৫-২০ মিনিট দাওয়াতের ফিকির করা? </label>
                            <select className=' border p-4' {...register("dawat")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">৬. প্রতিদিন ১০ মিনিট মোনাজাত ? </label>
                            <select className=' border p-4' {...register("dowa")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">৭. সুরা-মুলক এবং ঘুমানোর আমল? </label>
                            <select className=' border p-4' {...register("mulk")}>
                                <option value="0">হয়নি</option>
                                <option value="1">হয়েছে</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">Click Below If Weekly</div>
                        </div>
                        <div className="collapse border-2">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title   peer-checked:bg-secondary peer-checked:text-secondary-content">
                                সাপ্তাহিক
                            </div>
                            <div className="collapse-content  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <div className="form-control w-full">
                                    <label className="label">৮. সপ্তাহে মিনিমাাম ২ দিন তাহাজ্জুদ? </label>
                                    <select className=' border p-4' {...register("tahajjut")}>
                                        <option value="0">হয়নি</option>
                                        <option value="1">হয়েছে</option>
                                    </select>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">৯. সপ্তাহে ১দিন রোজা? </label>
                                    <select className=' border p-4' {...register("roja")}>
                                        <option value="0">হয়নি</option>
                                        <option value="1">হয়েছে</option>
                                    </select>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">১০. শুক্রবারের আমল এবং সুরা কাহফ? </label>
                                    <select className=' border p-4' {...register("kahf")}>
                                        <option value="0">হয়নি</option>
                                        <option value="1">হয়েছে</option>
                                    </select>
                                </div>

                            </div>
                        </div>



                        <input className='btn w-full mt-2 bg-green-700' type="submit" />
                        <div className="modal-action w-full">
                            <label
                                htmlFor="my-modal-3"
                                className="btn w-full bg-red-700"
                            >Close </label>
                        </div>
                    </form>
                </div>
            </div >

        </>



    );
};

export default AmolModal;