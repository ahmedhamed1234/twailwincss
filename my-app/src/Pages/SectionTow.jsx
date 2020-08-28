import React from 'react'

function SectionTow() {
    return (
        < >
            <section className="container mx-auto py-48 flex ">

                <div className="w-2/5">
                    <div className="w-64 ">
                        <h4 className="  font-medium text-3xl">Blog</h4>
                        <h3 className="  font-medium text-6xl leading-tight border-b-4 border-orange-600 pb-4">ofeer</h3>
                        <p className="  py-4">Sorry, we couldn't find details for any uploaded files
                       </p>
                    </div>

                    <div className="mt-16  ">

                         <button className=" bg-orange-900 text-white w-1/2 uppercase items-center justify-between hover:orange-700 flex p-8 text-xs"><span> Read all articesd</span>
                            <img src={require('../assets/images/arrow-right.svg')} alt='Main Logo' />

                        </button>
                    </div>
                </div>




                <div className="w-3/5 flex items-center pl-16">
                    <div className="w-4/6 leading-normal font-semibold  sm:hidden lg:block">
                        <img src={require('../assets/images/cosmetics-lady.png')} alt='Main Logo' />
                    </div>

                    <div className="lg:w-2/6 sm:w-full">
                        <h1 className="text-3xl">
                            Sorry, we couldn't find details for any uploaded files</h1>
                        <div className=" w-16 h-px bg-orange-900 my-8"></div>

                        <p className=" text-sm ">Sorry, we couldn't find details for any uploaded filesSorry, we couldn't find details for any uploaded files</p>
                        <div className="flex items-center mt-16">
                            <img src={require('../assets/images/user.svg')} alt='Main Logo' />
                            <span className="ml-4">details for any uploaded files</span>
                        </div>
                    </div>

                </div>
            </section>

        </ >
    )
}

export default SectionTow
