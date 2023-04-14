import { useState } from "react";

import Checkboxcomponent from "../Checkboxcomponent";
const Eventinerestcomponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const titles = [
        "All",
        "No Poverty",
        "Zero Hunger",
        "Good Health And Well-Being",
        "Quality Education",
        "Gender Equality",
        "Clean Water And Sanitation",
        "Affordable And Clean Energy",
        "Decent Work And Economic Growth",
        "Industry Innovation And Infrastructure",
        "Reduced Inequalities",
        "Sustainable Cities And Communities",
        "Responsible Consumption And Production",
        "Climate Action",
        "Life Below Water",
        "Life On Land",
        "Peace And Justice And Strong Institutions",
    ];

    return (
        <>
            {/* disktop design */}
            <div
                className={`md:mx-32 mx-10 md:w-80 md:p-5 md:block md:static md:z-0	fixed z-50 top-0 left-0 md:h-full h-96 bg-opacity-50 md:opacity-100 transition-opacity  ${
                    isOpen ? "" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className='fixed md:static md:z-0 z-50 top-1/2 left-1/2 md:transform-none transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-4  w-full md:w-80 h-80 md:h-full overflow-y-scroll md:overflow-auto scrollbar '>
                    <div className='grid grid-cols-1 gap-2 '>
                        <p className='font-medium font-Rubik underline text-center md:block hidden'>
                            Pick Your Interest
                        </p>
                        {titles &&
                            titles.map((title) => {
                                return (
                                    <Checkboxcomponent
                                        key={title}
                                        title={title}
                                        afterChecked='flex items-center justify-center text-center md:border-2 md:border-black border-0 md:bg-secondry-orange bg-white p-3 rounded h-16  font-Rubik font-medium sm:text-base text-xs'
                                        beforeChecked='checked flex items-center justify-center text-center  md:border-2 md:border-black border-0 p-3 rounded h-16  font-Rubik font-medium sm:text-base text-xs'
                                        view='md:hidden'
                                        block='block'
                                        flex='flex'
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
            <button
                className='flex items-center  p-2 border border-black rounded mt-4 md:hidden'
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className='px-2 font-Rubik'>Change Interest</p>
                <svg
                    width='13'
                    height='8'
                    viewBox='0 0 13 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M11.4704 0.705392C11.6865 0.465228 12.0564 0.445759 12.2965 0.661906C12.5366 0.878053 12.5561 1.24797 12.34 1.48813L7.07538 7.3385C6.84301 7.59672 6.43816 7.59672 6.20579 7.3385L0.941182 1.48813C0.725065 1.24797 0.744531 0.878053 0.984662 0.661906C1.22479 0.445759 1.59465 0.465228 1.81077 0.705392L6.64058 6.07259L11.4704 0.705392Z'
                        fill='#1A1A1A'
                    />
                </svg>
            </button>
        </>
    );
};

export default Eventinerestcomponent;
