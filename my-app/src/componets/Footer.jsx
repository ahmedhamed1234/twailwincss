import React from 'react'

function Footer() {
    return (
        <footer className="container mx-auto pt-64">
            <section className="flex justify-between">
                <div className="flex-1">
                    <h1 className="font-bold mb-8 text-2xl  ">FOOTER</h1>
                    <div className="flex">
                        <div className="flex flex-col w-1/2 list-none ">
                            <li>lINK1</li>
                            <li>lINK1</li>
                            <li>lINK1</li> 
                            <li>lINK1</li>
                            <li>lINK1</li>
                        </div>
                        <div className="flex flex-col w-1/2 list-none ">
                        <li>About</li>
                            <li>ahmed@gmail.com</li>
                            <li>0399009054</li>
                            <li>iraq</li>
                         </div>
                    </div>
                </div>

            
                <div className="flex-1">
                <h1 className="font-bold mb-8 text-2xl">conect us</h1>

                    <form action="submant" className="flex flex-col">
                    <input className="border-orange-900 mb-8 border placeholder-gray-900 p-2 rounded outline-none" type="name" placeholder="name"/>
                        <input className="border-orange-900 mb-8 border placeholder-gray-900 p-2 rounded outline-none" type="name" placeholder="name"/>
                        <button className="bg-orange-900 p-2 text-white">register now</button>

                        
                    </form>
                </div>
            </section>
            <section >
<p className="text-center text-3xl bg-orange-900 text-white mt-16">by ahmed hameed 2020</p>
            </section>
        </footer >
    )
}

export default Footer
