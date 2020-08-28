import React from 'react'

function Forms() {
    return (
        < >
            <section className="flex w-11/12 ml-auto flex-wrap ">
                <div className=" sm:w-full bg-orange-900 lg:w-2/5 p-24">
                    <div className="w-64">
                        <h4 className="text-white font-medium text-3xl">Form</h4>
                        <h3 className="text-white font-medium text-6xl leading-tight border-b-4 border-white pb-4">ofeer</h3>
                        <p className="text-white py-4">Sorry, we couldn't find details<br></br> for any uploaded files.

                         </p>
                    </div>
                    <div className="mt-16 ">
                        <form action="">
                            <div className="mb-4">
                                <input className="bg-orange-700 text-white text-sm placeholder-white w-full p-4 outline-none focus:bg-pink-200 " type="text" placeholder="name" />
                            </div>
                            <div className="mb-4">
                                <input className="bg-orange-700 text-white text-sm placeholder-white w-full p-4 outline-none focus:bg-pink-200 " type="text" placeholder="name" />
                            </div>
                            <div>
                                <button className="bg-black text-white w-full p-4 uppercase text-sm tracking-wide focus:outline-none" type="submit">subment</button>
                            </div>
                            <div className="flex items-center mt-6">
                                <div>
                                    {/* <input type="checkbox" id="check" className="agree_checked" checked />
                                    <label for="check"></label> */}
                                </div>
                                <div className="ml-3 text-white text-sm ">
                                    Sorry, we couldn't find details for any uploaded files.
                              </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="w-3/5 sm:hidden lg:block">
                    <img src={require('../assets/images/cosmetics-tools.png')} alt='Main Logo' />

                </div>
            </section>

        </ >
    )
}

export default Forms
