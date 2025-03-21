
import { Link } from "react-router-dom"
import stats from './assets/incomeStatistics.svg'
export default function Income() {
    return (
        <div className="ps-10">
            <div className="">
                <h1 className="text-3xl font-bold">Income</h1>
                <h1 className="text-gray-800 pt-6">Last <span className="underline">30 days</span></h1>
                <h1 className="text-4xl font-bold pt-6">$6,543</h1>

                <div className="pt-16">
                    <img src={stats} alt="stats"></img>
                </div>

                <div>
                    <div className="flex justify-between pt-16 pe-6">
                        <h1 className="text-xl font-bold">Your Transactions (3)</h1>
                        <h1 className="text-gray-800">Last <span className="underline">30 days</span></h1>
                    </div>
                    <div className="flex flex-col gap-6 mt-6 mb-16">
                        <div className="flex justify-between items-center bg-white me-5 p-5">
                            <h1 className="text-4xl font-semibold">$543</h1>
                            <h1 className="text-gray-800">1/1/2025</h1>
                        </div>
                        <div className="flex justify-between items-center bg-white me-5 p-5">
                            <h1 className="text-4xl font-semibold">$464</h1>
                            <h1 className="text-gray-800">5/1/2025</h1>
                        </div>
                        <div className="flex justify-between items-center bg-white me-5 p-5">
                            <h1 className="text-4xl font-semibold">$722</h1>
                            <h1 className="text-gray-800">12/1/2025</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}