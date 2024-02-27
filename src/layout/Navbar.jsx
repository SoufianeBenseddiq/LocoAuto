import React,{useEffect, useState} from "react";
// import {Link} from 'react-router-dom'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar =()=>{
    const [showNav,setShowNav]=useState(true)
    const handleNav =()=>{
        setShowNav(!showNav)
    }
    //to stop scrolling while the nav is opened on small screens
    useEffect(()=>{
        if(showNav){
            document.body.style.overflowY="scroll"
        }else{
            document.body.style.overflowY="hidden"
        }
    },[showNav])
    

    return(
        <>
            {/*large devices*/}
            <div className="flex flex-row justify-between items-center h-[50px] mt-4 max-w-[1100px] mx-auto ">
                <h1 className="text-3xl font-semibold hover:cursor-pointer md:ml-0 ml-4 " >LocoAuto</h1>
                <div className="hidden min-screen:flex flex-row justify-between min-screen:w-[50%]">
                    <nav className="flex flex-row justify-between w-[60%] font-semibold items-center">
                        <div className="hover:font-bold hover:cursor-pointer hover:text-[#ff0366]" >Accueil</div>
                        <div className="hover:font-bold hover:cursor-pointer hover:text-[#ff0366]" >Voitures</div>
                        <div className="hover:font-bold hover:cursor-pointer hover:text-[#ff0366]" >Contact</div>
                        <div className="hover:font-bold hover:cursor-pointer hover:text-[#ff0366]" >Aide</div>
                    </nav>
                        <Link to="/signup" >
                            <button className="text-white bg-black rounded-3xl w-[180px] h-[40px] font-semibold  hover:bg-[#ff0366]  ease-in-out duration-[450ms]">
                            S'inscrire
                            </button>
                        </Link>
                </div>
                <div onClick={handleNav} className={showNav?'flex min-screen:hidden hover:cursor-pointer mr-4':'hidden'}>
                    <AiOutlineMenu size={25} className='text-black'/>
                </div>
            </div>
            {/**phone screens */}
            <div className={!showNav?'px-4 fixed left-0 flex flex-col top-0 py-8 justify-between w-[100%] h-[100%] bg-white items-center text-[#15162f] z-50 ease-in-out duration-[650ms]':'fixed py-8 flex flex-col left-[-100%] w-[100%] ease-in-out duration-[650ms] z-50 pb-24 h-screen top-0 justify-between'}>
                <div className='flex justify-between items-center w-[100%]'>
                    <h1 className="text-3xl font-semibold hover:cursor-pointer" >LocoAuto</h1>
                    <AiOutlineClose size={25} onClick={handleNav} className='text-black hover:cursor-pointer'/>
                </div>
                <nav className="flex flex-col justify-between w-full h-[50%] font-semibold items-center text-2xl">
                    <div className="hover:font-bold hover:cursor-pointer" >Accueil</div>
                    <div className="hover:font-bold hover:cursor-pointer" >Voitures</div>
                    <div className="hover:font-bold hover:cursor-pointer" >Contact</div>
                    <div className="hover:font-bold hover:cursor-pointer" >A propos</div>
                </nav>
                <div className="w-[100%] text-center">
                    <Link to="/signup" >
                        <button className="text-white bg-black rounded-3xl w-[170px] h-[40px] font-semibold ">
                            S'inscrire
                        </button>
                    </Link>
                </div>
                    
            </div>
        </>
    );
}
export default Navbar;