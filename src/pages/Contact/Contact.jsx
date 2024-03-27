import React from "react";
import img from "./contact.jpg";

const Contact = () => {
    return (
        <div className="text-white xmin-screen:pt-[7%] pt-[40%]  " style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", minHeight: "100vh", }}>
            <div className="max-w-md w-full mx-0 p-6 sm:ml-[10%]  bg-gray-900 rounded-lg shadow-md">
                <h2 className="text-3xl text-center font-bold mb-6">Contactez Nous</h2>
                <form action="" method="post">
                <div className="mb-4">
                    <input id="name" placeholder="Votre nom" className="w-full px-3 focus:border py-2 rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500" required type="text"/>
                </div>
                <div className="mb-4">
                    <input
                    id="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 focus:border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                    required
                    type="email"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                    id="message"
                    rows="4"
                    placeholder="Tapez votre message"
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 focus:outline-none focus:border focus:border-blue-500"
                    required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                <input type="submit" value="Envoyer" className="hover:cursor-pointer w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-[#ff0366] transition duration-300" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
