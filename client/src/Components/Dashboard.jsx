function Dashboard(){
    return(
        <div className="w-full p-10">
            <div className="">
                <h2 className="text-4xl montserrat" style={{'--fw':'600'}}>Dashboard</h2>
            </div>
            <div className="flex flex-wrap gap-5 my-5">
                <div className="bg-white w-[80%] md:w-1/2 lg:w-fit rounded-xl p-5">
                    <p className="text-2xl outfit">
                        No. of students
                    </p>
                </div>
                <div className="bg-white w-[80%] md:w-1/2 lg:w-fit rounded-xl p-5">
                    <p className="text-2xl outfit">
                        No. of students
                    </p>
                </div>
                <div className="bg-white w-[80%] md:w-1/2 lg:w-fit rounded-xl p-5">
                    <p className="text-2xl outfit">
                        No. of students
                    </p>
                </div>
                <div className="bg-white w-[80%] md:w-1/2 lg:w-fit rounded-xl p-5">
                    <p className="text-2xl outfit">
                        No. of students
                    </p>
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-2xl outfit" style={{'--fw':'600'}}>
                    Recent Transactions
                </h2>
                <div className="w-full">
                    <table className="w-full rounded-2xl">
                        <thead className="w-full p-2 bg-[#00CF0E] rounded-t-2xl mb-2">
                            <th className="text-xl text-white rounded-tl-2xl">example</th>
                            <th className="text-xl text-white">example</th>
                            <th className="text-xl text-white">example</th>
                            <th className="text-xl text-white">example</th>
                            <th className="text-xl text-white rounded-tr-2xl">example</th>
                        </thead>
                        <tbody className="w-full p-2 bg-white mt-2.5">
                            <tr className="bg-white ">
                                <td className="text-lg p-2 text-center rounded-bl-2xl">data</td>
                                <td className="text-lg p-2 text-center">data</td>
                                <td className="text-lg p-2 text-center">data</td>
                                <td className="text-lg p-2 text-center">data</td>
                                <td className="text-lg p-2 text-center rounded-br-2xl">data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
    )
}

export default Dashboard