import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Datepicker from "react-tailwindcss-datepicker";
import { ReactTyped } from "react-typed";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import AOS from "aos";
import "aos/dist/aos.css";


const Filter=()=>{


    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        setValue(newValue);
    };
    return(
        <div className="bg-gray-100">
            <Navbar />
            {/* up filter */}
            <div className="w-full h-40 bg-black shadow-2xl z-40 " >
                {/* <p className="text-white font-semibold text-4xl block text-center pb-4 pt-4" >Filtrer. Choisir. Reserver!</p> */}
                <ReactTyped
                    className="text-white font-semibold text-4xl block text-center pb-4 pt-4"
                    strings={['Filtrer. Choisir. Reserver!']}
                    typeSpeed={40}
                    backSpeed={50}
                />
                <div className="w-[88%] min-screen:h-32 rounded-[20px]  bg-[#ff0366] m-auto shadow-xl flex items-center px-4 " >
                    <form className=" flex min-screen:flex-row flex-col justify-center items-center mx-auto " action="">
                        <div className="h-10 flex justify-center rounded-lg min-screen:w-64 w-[100%] min-screen:my-0 my-5  items-center bg-white min-screen:mr-2 focus:border ">
                            <FaLocationDot size={12} color="gray" className="mx-2" />
                            <input type="text" className=" focus:outline-none bg-white rounded-lg   focus:border-blue-500  text-[18px] font-light placeholder:text-gray-400 " name="villeDepart" id="" placeholder="Ville de depart" />
                        </div>
                        <div className="flex min-screen:w-fit min-screen:my-0 mb-5" >
                            <Datepicker
                                value={value}
                                onChange={handleValueChange}
                                primaryColor={"rose"}
                                lightMode
                                placeholder={""}
                            />
                            <select className="ml-2 font-light px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" >
                                {[...Array(24).keys()].map(hour => (
                                    <option key={hour} value={hour}>{hour}:00</option>
                                ))}
                            </select>
                            <select className="ml-2 font-light px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" >
                                {[...Array(24).keys()].map(hour => (
                                    <option key={hour} value={hour}>{hour}:00</option>
                                ))}
                            </select>   
                        </div>
                            <button className="text-white min-screen:my-0 mb-5 bg-black rounded-lg ml-2 w-[180px] border h-[40px] font-semibold  hover:bg-transparent  ease-in-out duration-[450ms]">
                                Rechercher
                            </button>
                    </form>
                </div>
            </div>

            {/* Advanced filter */}
            <div className="flex max-w-[1100px] px-4 mx-auto " >
                <div className="w-[280px] h-fit bg-white mt-16 shadow-xl mb-16 p-4" >
                    <p className="text-[#ff0366] text-xl  font-semibold" >Personnalisez votre choix :</p>
                    <form action="" >
                        {/* Categories */}
                        <div className="border-b border-b-blue-800 pb-4 mt-4" >
                            <p className="text-lg text-blue-800" >Categorie</p>
                            <div className="w-[50%] pt-2">
                                {/* SUV Category */}
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="SUV" className="mr-4" />
                                    <label htmlFor="SUV" className="w-full cursor-pointer">SUV</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="Cabriolets" className="mr-4" />
                                    <label htmlFor="Cabriolets" className="w-full cursor-pointer" >Cabriolets</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="Breaks" className="mr-4" />
                                    <label htmlFor="Breaks" className="w-full cursor-pointer">Breaks</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="Berlines" className="mr-4" />
                                    <label htmlFor="Berlines" className="w-full cursor-pointer">Berlines</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="Compacts" className="mr-4" />
                                    <label htmlFor="Compacts" className="w-full cursor-pointer">Compacts</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="Crossovers" className="mr-4" />
                                    <label htmlFor="Crossovers" className="w-full cursor-pointer">Crossovers</label>
                                </div>
                            </div>
                        </div>

                        {/* Passagers */}
                        <div className="border-b border-b-blue-800 pb-4 mt-4" >
                            <p className="text-lg text-blue-800" >Passagers</p>
                            <div className="w-[60%] pt-2">
                                {/* 1 a 2 passagers*/}
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="ponetotwo" className="mr-4" />
                                    <label htmlFor="ponetotwo" className="w-full cursor-pointer">1 à 2 Passagers</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="pthreetofive" className="mr-4" />
                                    <label htmlFor="pthreetofive" className="w-full cursor-pointer">3 à 5 Passagers</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="psixormore" className="mr-4" />
                                    <label htmlFor="psixormore" className="w-full cursor-pointer">6 ou plus</label>
                                </div>
                            </div>
                        </div>

                        {/* Valises */}
                        <div className="border-b border-b-blue-800 pb-4 mt-4" >
                            <p className="text-lg text-blue-800" >Valises</p>
                            <div className="w-[60%] pt-2">
                                {/* 1 a 2 Valises*/}
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="vonetotwo" className="mr-4" />
                                    <label htmlFor="vonetotwo" className="w-full cursor-pointer">1 à 2 Valises</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="vthreetofour" className="mr-4" />
                                    <label htmlFor="vthreetofour" className="w-full cursor-pointer">3 à 4 Valises</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="vfiveormore" className="mr-4" />
                                    <label htmlFor="vfiveormore" className="w-full cursor-pointer">5 ou plus</label>
                                </div>
                            </div>
                        </div>

                        {/* Transmission */}
                        <div className="border-b border-b-blue-800 pb-4 mt-4" >
                            <p className="text-lg text-blue-800" >Valises</p>
                            <div className="w-[60%] pt-2">
                                {/* Automatique*/}
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="automatique" className="mr-4" />
                                    <label htmlFor="automatique" className="w-full cursor-pointer">Automatique</label>
                                </div>
                                <div className="flex flex-row justify-start" >
                                    <input type="checkbox" id="manuelle" className="mr-4" />
                                    <label htmlFor="manuelle" className="w-full cursor-pointer">Manuelle</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Display filtered cars */}
            </div>
            
        </div>
    )
}
export default Filter