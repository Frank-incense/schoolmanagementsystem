import { ChartArea, ChartBar } from "lucide-react"
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from "react"
import { color } from "@mui/system";
import { PieChart } from "@mui/x-charts";

function Dashboard(){
    const [period, setPeriod] = useState([
        {
            time: 'This Week',
            selected: false,
            value: 'week'
        },
        {
            time: 'This Month',
            selected: false,
            value: 'month'
        },
        {
            time: 'This Term',
            selected: false,
            value: '3months'
        }
    ])

    const dataset = [
        {
            fee: 10,
            week: {
                one: 3,
                two: 4,
                three: 2,
                four: 1
            },
            month: 'Jan'
        },
        {
            fee: 15,
            month: 'Feb'
        },
        {
            fee: 11,
            month: 'Mar'
        },
        {
            fee: 1,
            month: 'Apr'
        },
        {
            fee: 20,
            month: 'May'
        },
        {
            fee: 16,
            month: 'Jun'
        },
        {
            fee: 9,
            month: 'Jul'
        },

    ]

    const [time, setTime] = useState('month')
    const transactions=[1]

    const chartSetting = {
        xAxis: [
            {
                label: time
            },
        ],
        height: 400,
        margin: { left: 0}
    }

    const data = [
        {
            label: 'pp1',
            value: 2,
            color: '#0088FE'
        },
        {
            label: 'pp2',
            value: 1,
            color: '#00C49F'
        },
        {
            label: '1',
            value: 3,
            color: '#FFBB28'
        },
        {
            label: '2',
            value: 2,
            color: '#FF8042'
        },
    ]
    const pieSettings = {
        margin: {right: 5},
        width: 400,
        height: 400,
        hideLegend: true,
    }

    return(
        <div className="w-full p-10">
            <div className="">
                <h2 className="text-4xl montserrat" style={{'--fw':'600'}}>Dashboard</h2>
            </div>
            <div className="mt-3">
                <h3 className="outfit text-2xl" style={{'--fw':'600'}}>
                    Welcome back, Admin
                </h3>
                <p className="montserrat text-lg">
                    Today is Monday, 12 May 2025 | Term 2, Week 7
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {/* Card 1: Active Learners */}
                <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-600 font-medium mb-2">Active Learners</p>
                            <p className="text-2xl font-bold text-gray-800 mb-1">1,234</p>
                            <div className="flex items-center">
                                <span className="text-emerald-500 text-sm font-medium mr-2">▲ 156</span>
                                <span className="text-xs text-gray-500">from last term</span>
                            </div>
                        </div>
                        <div className="text-emerald-500">
                            <span className="text-2xl">👨‍🎓</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center text-xs text-gray-500">
                            <div className="flex-1 mr-2">
                                <div className="flex justify-between mb-1">
                                    <span>Active</span>
                                    <span>98.2%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '98.2%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Fee Arrears */}
                <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-600 font-medium mb-2">Fee Arrears</p>
                            <p className="text-2xl font-bold text-gray-800 mb-1">KSh 245K</p>
                            <div className="flex items-center">
                                <span className="text-rose-500 text-sm font-medium mr-2">▼ 12%</span>
                                <span className="text-xs text-gray-500">from last month</span>
                            </div>
                        </div>
                        <div className="text-rose-500">
                            <span className="text-2xl">📉</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center text-xs text-gray-500">
                            <div className="flex-1 mr-2">
                                <div className="flex justify-between mb-1">
                                    <span>89 students affected</span>
                                    <span>18%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '18%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Fee Collected */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-600 font-medium mb-2">Fee Collected</p>
                            <p className="text-2xl font-bold text-gray-800 mb-1">KSh 8.2M</p>
                            <div className="flex items-center">
                                <span className="text-blue-500 text-sm font-medium mr-2">▲ 24%</span>
                                <span className="text-xs text-gray-500">this term</span>
                            </div>
                        </div>
                        <div className="text-blue-500">
                            <span className="text-2xl">💰</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-xs text-gray-500">
                            <div className="flex justify-between">
                                <span>Against target:</span>
                                <span className="font-medium text-blue-600">+14.5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Expected Fee */}
                <div className="bg-gradient-to-br from-white to-violet-50 rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-600 font-medium mb-2">Expected Fee</p>
                            <p className="text-2xl font-bold text-gray-800 mb-1">KSh 12.5M</p>
                            <div className="flex items-center">
                                <span className="text-violet-500 text-sm font-medium mr-2">Term 2</span>
                                <span className="text-xs text-gray-500">2024</span>
                            </div>
                        </div>
                        <div className="text-violet-500">
                            <span className="text-2xl">🎯</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-xs text-gray-500">
                            <div className="flex justify-between">
                                <span>Collection rate:</span>
                                <span className="font-medium text-violet-600">65.6%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="">
                    <h3 className="flex text-xl outfit" style={{'--fw':'600'}}><ChartArea className="" color="#00CF0E"/> QUICK STATS & FILTERS</h3>
                    <div className="border-2 border-[#00cf0e] w-fit">
                        {period.map((p,i)=>{
                            return(
                            <button 
                            onClick={()=>{
                                setPeriod(period.map((btn)=>{

                                    if(btn.time === p.time){
                                        btn.selected = true
                                    }
                                    else{
                                        btn.selected = false
                                    }
                                    return btn
                                }))
                            }}
                            type="button" 
                            key={i}
                            className={p.selected
                                ?'w-30 py-1 text-lg hover:bg-[#00CF0E] border-2 border-[#00cf0e] bg-[#00CF0E] text-white'
                                :'w-30 py-1 text-lg hover:bg-[#00CF0E] border-2 border-[#00cf0e]'}>
                                {p.time}
                            </button>)
                        })}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Fee Collection Trend</h3>
                        <ChartArea className="text-[#00CF0E]" />
                    </div>
                    <BarChart
                        dataset={dataset}
                        yAxis={[{scaleType:'band', dataKey: time}]}
                        series={[{dataKey: 'fee', label:'Fee Collection', color: '#00CF0E'}]}
                        layout="horizontal"
                        {...chartSetting}
                        colors={['#00CF0E']}
                    />
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Balances by Class</h3>
                        <ChartBar className="text-[#00CF0E]" />
                    </div>
                    <PieChart
                        series={[{
                            innerRadius: 50,
                            outerRadius: 100,
                            data,
                            arcLabel: (item) => `${item.value}K`,
                            arcLabelMinAngle: 15,
                        }]}
                        {...pieSettings}
                        slotProps={{
                            legend: {
                                hidden: false,
                                direction: 'row',
                                position: { vertical: 'bottom', horizontal: 'middle' },
                            },
                        }}
                    />
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-2xl outfit" style={{'--fw':'600'}}>
                    Recent Transactions
                </h2>
                <div className="w-full">
                    <table className="w-full rounded-2xl">
                        <thead className="w-full p-2 bg-[#00CF0E] rounded-t-2xl">
    <tr>
        <th className="text-sm font-medium text-white py-3 rounded-tl-2xl">Date</th>
        <th className="text-sm font-medium text-white py-3">Student</th>
        <th className="text-sm font-medium text-white py-3">Amount</th>
        <th className="text-sm font-medium text-white py-3">Method</th>
        <th className="text-sm font-medium text-white py-3">Status</th>
        <th className="text-sm font-medium text-white py-3 rounded-tr-2xl">Action</th>
    </tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100">
    {transactions.map((transaction, index) => (
        <tr key={index} className="hover:bg-gray-50">
            <td className="py-3 px-4 text-center text-gray-700">12/05/24</td>
            <td className="py-3 px-4 text-center text-gray-700">James Ochieng</td>
            <td className="py-3 px-4 text-center font-medium">KSh 15,000</td>
            <td className="py-3 px-4 text-center">
                <span className="inline-flex items-center gap-1">
                    💵 Cash
                </span>
            </td>
            <td className="py-3 px-4 text-center">
                <span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
                    ✅ Cleared
                </span>
            </td>
            <td className="py-3 px-4 text-center">
                <button className="text-[#00CF0E] hover:text-emerald-700">
                    View
                </button>
            </td>
        </tr>
    ))}
</tbody>
                    </table>
                </div>
            </div>
        </div>    
    )
}

export default Dashboard