import React from 'react';
export default function Contact (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4 uppercase border-b-2 border-gray-50 text-md text-gray-100">Mes contacts</div>
                    <div className="space-y-4 pt-4 text-md font-normal text-gray-100">
                        <div className="flex">
                            <div className="w-12 h-12 mr-4 text-center bg-gray-100 rounded-full">
                                <span className="text-gray-700 text-xl font-bold" style={{lineHeight:"2.5rem"}}>
                                    A
                                </span>
                            </div>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"2.6rem"}}>
                                +261(0)34 75 979 57
                            </span>
                        </div>
                        <div className="flex">
                            <div className="w-12 h-12 mr-4 text-center bg-gray-100 rounded-full">
                                <span className="text-gray-700 text-xl font-bold" style={{lineHeight:"2.5rem"}}>
                                    B
                                </span>
                            </div>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"2.6rem"}}>
                                +261(0)34 21 243 19
                            </span>
                        </div>
                        <div className="flex">
                            <div className="w-12 h-12 mr-4 text-center bg-gray-100 rounded-full">
                                <span className="text-gray-700 text-xl font-bold" style={{lineHeight:"2.5rem"}}>
                                    C
                                </span>
                            </div>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"2.6rem"}}>
                                michelfreddy1992@gmail.com
                            </span>
                        </div>
                        <div className="flex">
                            <div className="w-12 h-12 mr-4 text-center bg-gray-100 rounded-full">
                                <span className="text-gray-700 text-xl font-bold" style={{lineHeight:"2.5rem"}}>
                                    D
                                </span>
                            </div>
                            <span className="inline text-sm md:text-md" style={{lineHeight:"2.6rem"}}>
                                NARISOA HARILALA Freddy Michel
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='w-100 rounded-b-xl -mt-8'>
                <a className='font-semibold pt-2 pr-2 float-right text-right text-sm  text-gray-100'>
                    Plus de details
                </a>
            </div> */}
        </div>
    )
}