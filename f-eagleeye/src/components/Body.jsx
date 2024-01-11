import React from 'react';
import gif from './Header.gif'
// import body2 from './body.css'

const Body = () => {
    return (
        <div>
            <div id="main" className=" sm:flex  ">
                

                <div className="bg-white h-[80vh] sm:w-1/2  "><p className="font-black font-serif text-4xl px-8 text-left padding-left: 34px mt-[20px]">Optispace Park</p>
                    <p className="px-8 py-6 text-left lg:font-size:22px">New Age Machine Learning based Parking Lot Automation Stytem</p>
                    <p className="px-8 py-4 text-left {body2} max-sm:font-size:13px max-md:font-size:16px lg:font-size:20px">Develop an affordable and efficient image processing solution for the detection, identification, and monitoring of vehicles in parking spaces through number plate recognition, to enhance parking management efficiency, reduce human errors, and provide an affordable and reliable solution for parking space operators.</p>
                </div>
                <div className="bg-white flex items-center justify-end sm:w-1/2"><img className="h-96" src={gif} /> </div>
            </div>
        </div>
    );
}

export default Body;






// [#e2e8f0]