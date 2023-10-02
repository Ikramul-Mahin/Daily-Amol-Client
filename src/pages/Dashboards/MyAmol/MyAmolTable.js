import React from 'react';

const MyAmolTable = ({ amol, i, handleDelete }) => {
    console.log(amol)
    // const [sums, setSum] = useState(0)
    const { salat, jikir, quran, boi, dowa, dawat, roja, kahf, tahajjut, mulk, date, sofor } = amol
    const gainedAmol = Number(salat) + Number(jikir) + Number(quran) + Number(sofor) + Number(boi) + Number(dowa) + Number(dawat) + Number(mulk) + Number(roja) + Number(kahf) + Number(tahajjut)
    const missedAmol = 9 - gainedAmol


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <tbody className='table-zebra'>
                        <tr className='font-semibold hover table-zebra'>
                            <td>{i + 1}</td>
                            {/* <td>7</td> */}
                            <td className='pl-16'>{gainedAmol}</td>
                            <td className='pl-16'>{missedAmol}</td>
                            <td className='pl-10'>{date}</td>
                            <td> <button className='btn btn-xs bg-red-700' onClick={() => { handleDelete(amol?._id) }}>Delete </button> </td>
                        </tr>


                    </tbody>
                </table>

            </div>
        </div >
    );
};

export default MyAmolTable;