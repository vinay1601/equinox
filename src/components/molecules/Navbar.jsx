import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const Navbar = () => {
    return (
        <div>
            <Card className="w-full max-w-[calc(100%-5%)] mx-auto mt-4 rounded-2xl shadow-md">
                <CardContent className="px-4 py-0 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="space-y-1">
                            <h2 className="text-lg md:text-xl font-semibold">
                                Burman Hospitality Pvt. Ltd.
                            </h2>
                            <p className="text-sm text-gray-500">
                                Delhi ● Central Delhi ● 110002 | Created on : 1 Jul 2022 |
                                <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm px-2 mx-3 py-1 rounded-xl">
                                    POSTPAID
                                </span>
                            </p>
                        </div>

                        <div className="items-center gap-3 hidden md:flex">
                            <Menu className="w-5 h-5 text-gray-600" />
                            <Button size="sm" className="text-sm bg-blue-600 py-5">
                                + Raise Query
                            </Button>
                        </div>
                    </div>

                    <hr className="my-2" />

                    <div className="flex flex-col items-center md:flex-row mt-2 text-sm w-full gap-4">
                        <div className="flex flex-2/5 items-start  border-gray-300 md:border-r-2 pr-4">
                            <div className="pr-3 md:pr-7">
                                <p className="font-semibold">10,00,000</p>
                                <p className="text-gray-400 font-semibold">Total Revenue</p>
                            </div>
                            <div className="pr-3 md:pr-7">
                                <p className="text-black font-semibold">7,00,000</p>
                                <p className="text-cyan-300 font-semibold">Payment Received</p>
                            </div>
                            <div className='pr-0 md:pr-7'>
                                <p className="text-black font-semibold">1,00,000</p>
                                <p className="text-blue-600 font-semibold">Not Yet Due</p>
                            </div>
                        </div>

                        <div className="flex items-center  flex-4/6  md:p-2 rounded">
                            <div className="text-center mb-2 pr-1 md:px-20">
                                <p className="text-red-600 font-medium">Payment</p>
                                <p className="text-red-600 font-medium">Overdue</p>
                            </div>

                            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 text-center text-sm">
                                <div className='px-1 md:px-5'>
                                    <p className="font-semibold">20,000</p>
                                    <p className="text-orange-400 font-semibold">A</p>
                                </div>
                                <div className='px-1 md:px-5'>
                                    <p className="font-semibold">50,000</p>
                                    <p className="text-orange-400 font-semibold">B</p>
                                </div>
                                <div className='px-1 md:px-5'>
                                    <p className="font-semibold">50,000</p>
                                    <p className="text-orange-400 font-semibold">C</p>
                                </div>
                                <div className='px-1 md:px-5'>
                                    <p className="font-semibold">30,000</p>
                                    <p className="text-orange-400 font-semibold">D</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-2" />

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div className="flex flex-col">
                            <p className="text-gray-400 text-sm font-semibold">Lead Category - Source</p>
                            <span className="text-black font-semibold">Others - References</span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-400 text-sm font-semibold">Latest Category - Lead source</p>
                            <span className="text-black">-</span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-400 text-sm font-semibold">Last Updated</p>
                            <span className="text-black font-semibold">07 Nov 2023</span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-400 text-sm font-semibold">Total Outstanding</p>
                            <span className="text-red-600 font-semibold">10,00,000</span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-gray-400 text-sm font-semibold">Last Order Date</p>
                            <span className="text-red-600 font-semibold">10 Dec 2023 03:30 PM</span>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Navbar
