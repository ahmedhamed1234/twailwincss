import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Section = () => {
    const [value, setOpen] = useState("new")
    const [open] = useState(false)

    function increment() {
        setOpen("new");
    }


    return (
        <section className="container mx-auto py-32  flex flex-wrap">
            <div className="sm:w-full lg:w-2/6">
                <div className="">
                    <h6 className=" mb-2 text-6xl ">Offers</h6>
                    <h2 className="text-6xl font-medium">off</h2>
                    <h2 className="text-6xl font-medium upto">New offers</h2>
                    <h6 className="py-8 text-2xl">for all cosetos</h6>
                </div>  
                <div>
                    <ul>
                        <li className="py-3 ">
                            <Link onClick={() => setOpen("new")} className="menu_triggr text-4xl " to='/'>New offers</Link>
                            {value === "new" && <ul className="p-3">
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>Clothes</Link>
                                </li>
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>shoes</Link>
                                </li>
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>Shirts</Link>
                                </li>
                            </ul>}

                        </li>

                        <li className="  py-3 ">
                            <Link onClick={() => setOpen("ok")} className="menu_triggr text-4xl " to='/'>Old show</Link>
                            {value === "ok" && <ul className="sub_munee p-3">
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>children clothes</Link>
                                </li>
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>Woman clothes</Link>
                                </li>
                                <li className="py-2 pt-3">
                                    <Link className="hover:text-orange-800" to='/'>Man clothes</Link>
                                </li>
                            </ul>}
                        </li>
                    </ul>
                </div>

            </div>
            {/* right section */}

            <div className="sm:w-full sm:mt-64 lg:w-4/6 flex">
                <div className="sm:w-full lg:w-1/2 mr-6 ">
                    <div className="bg-green-300 mb-6 box-1 w-2/3 ml-auto">
                        <img src={require('../assets/images/cosmetics-two-bottles.png')} alt='Main Logo' />
                        <div className="absolute bottom-0 right-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>
                    </div>
                    <div className="bg-gray-400  mb-6 box-2 w-full pt-32 relative">
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className="absolute top-0 left-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>
                    </div>
                    <div className="bg-pink-100  mb-6 box-3 w-2/3 ml-auto h-64 relative">
                        <img src={require('../assets/images/cosmetic-cream.png')} alt='Main Logo' />
                        <div className="absolute bottom-0 right-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>

                    </div>
                </div>
                <div className="sm:w-full lg:w-1/2">

                    <div className="bg-gray-400  mb-6 box-4 w-2/3 relative">
                        <img src={require('../assets/images/Cosmetics.png')} alt='Main Logo' />
                        <div className="absolute bottom-0 right-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>

                    </div>
                    <div className="bg-orange-200  mb-6 box-5 w-full relative">
                        <img src={require('../assets/images/cosmetics-bottles.png')} alt='Main Logo' />
                        <div className="absolute top-0 left-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>

                    </div >
                    <div className="bg-blue-300  mb-6 box-6 w-2/3 pt-32 pb-12 pr-6 relative">
                        <img src={require('../assets/images/cosmetics-jar.png')} alt='Main Logo' />
                        <div className="absolute bottom-0 right-0 bg-white"> <h1 className="p-4 font-gotham">For Body</h1></div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Section;
