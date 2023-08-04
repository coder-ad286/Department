import { useNavigate } from 'react-router-dom'
import students from '../data/students.json'
import Loader from './Loader'

const AttendanceDetails = () => {
    const navigate = useNavigate();
    
    return (
        <>
            {/* <Loader /> */}
            <main className="bg-gray-300  w-full p-2 h-screen">
                <section className="bg-white w-11/12  border border-black mx-auto rounded-xl p-5 mt-5">
                    <h1 className="font-bold text-black text-2xl center">Class Name</h1>
                    <div className='hidden md:block'>
                        <table className="w-full mt-5 ">
                            <thead className="bg-blue-500 border-b-2 rounded border-gray-600 text-xl">
                                <tr className="">
                                    <th className="p-3">RegNo</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Present</th>
                                    <th className="p-3">Absent</th>

                                </tr>
                            </thead>
                            <tbody className="text-center font-bold divide-y divide-gray-800">
                                {students.map((student, index) => {
                                    const sNo = index + 1;
                                    return (
                                        <tr className={`${sNo % 2 === 0 && 'bg-blue-300'} `} key={student.regno}>
                                            <td className='p-2 '>{student.regno}</td>
                                            <td className='p-2 '>{student.DOB}</td>
                                            <td className='p-2 '>{student.gender}</td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                    <div className='md:hidden'>
                        {
                            students.map((student) => {
                                return (
                                    <div className='bg-blue-400  rounded-2xl shadow- mt-2' key={student.regno}>
                                        <div className='flex flex-col md:flex'>
                                            <div className='w-full md:w-1/4 py-3 flex bg-blue-500 rounded-t-2xl'>
                                                <h1 className='m-auto  text-center font-bold text-lg'>{student.regno}</h1>
                                            </div>
                                            <div className='w-full md:w-3/4 flex p-5'>
                                                <div className='my-auto '>
                                                    <h1 className='font-bold text-xl'>{student.name}</h1>
                                                    <h1 className='font-bold text-gray-700'><span>Present : </span>{student.DOB}</h1>
                                                    <h1 className='font-bold text-gray-700'><span>Absent : </span>{student.gender}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                </section>
            </main>
             {/* <main className='flex justify-center items-center w-full '>
                <section className='my-auto w-full'>
                    <div className='w-full lg:w-1/3 p-5 rounded-lg mx-auto mt-24'>
                        <h1 className='font-bold text-2xl text-center'>Issue</h1>
                        <p className='bg-red-500 rounded-lg p-5 font-bold text-lg text-center my-3'>
                            <div>No Data Found</div>
                            <div>Please Make Correct Selection</div>
                        </p>
                        
                        <div className='flex justify-center'>
                            <button onClick={()=>{navigate('/staff')}} className='font-bold text-md text-center text-gray-800'>Please Go Back </button>
                       </div>
                    </div>
                </section>
            </main>  */}
        </>
    )
}

export default AttendanceDetails