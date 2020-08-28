import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const [menuActive, setMenuState] = useState(true);

    return (
        <nav className="container mx-auto py-4 flex items-center justify-between font-gotham flex-wrap">
            {/*  side logo */}
            <div>
                <h1 className="text-4xl ">Beaty Store</h1>
            </div>
            {/* side action mobile  */}
            <div className="  lg:hidden  " onClick={() => setMenuState(!menuActive)}>
                <i className="fa fa-align-right text-3xl "></i>
            </div>
            {/*side  list of navbar */}
            <div className={`sm:w-full sm:text-center lg:flex lg:w-auto  items-center justify-between flex-wrap&& ${menuActive ? 'sm:hidden' : 'sm:block'}`}>
                {/* left one */}
                <div className="flex flex-col md:flex-row ">
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Home</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Sections</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Payment</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Shooping</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Blog</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>Serveces</Link>
                    <Link className="ml-10  hover:text-orange-900 sm:text-xl sm:py-3  md:text-3xl" to='/' onClick={() => setMenuState(!menuActive)}>About up</Link>
                </div>
                {/* side list icon   */}
                <div className="sm:ml-48 flex items-center md:ml-24">
                    <Link className="ml-12 text-3xl hover:text-orange-900" to='/'><i className="fa fa-user"></i></Link>
                    <Link className="ml-12 text-3xl hover:text-orange-900" to='/'><i className="fa fa-search"></i></Link>
                    <Link className="ml-12 text-3xl hover:text-orange-900" to='/'><i className="fa fa-shopping-cart"></i></Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
