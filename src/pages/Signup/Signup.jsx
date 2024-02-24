import React from "react";
import signupImg from "./signup2.jpg";

const Signup = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${signupImg})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                width: '100%', 
                height: '100vh',
            }} className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-black  to-transparent p-8 rounded-lg shadow-md h-[100vh] max-w-full w-full">
                    
                </div>
            </div>
        </>
    );
}

export default Signup;