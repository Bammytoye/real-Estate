import React from 'react'
import { housesData } from '../data'
import { useParams, Link } from 'react-router'
import { BiBed, BiBath, BiArea, BiArrowBack } from 'react-icons/bi'

function PropertyDetails() {
    const { id } = useParams()

    // get the house based on id
    const house = housesData.find((house) => house.id === parseInt(id));

    return (
        <section>
            <div className='container mx-auto min-h-[800px] mb-14'>

                {/* Back Button */}
                <Link to="/" className="flex items-center text-violet-700 hover:text-violet-900 mb-4">
                    <BiArrowBack className="text-2xl mr-2 p-1 bg-violet-700 text-white rounded-full" /> 
                </Link>

                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <h2 className='text-2xl font-semibold '>{house.name}</h2>
                        <h3 className='text-lg mb-4'>{house.address}</h3>
                    </div>

                    <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm '>
                        <div className='bg-green-500 text-white px-3 py-1 rounded-full '>{house.type}</div>
                        <div className='bg-violet-500 text-white px-3 py-1 rounded-full '>{house.country}</div>
                    </div>

                    <div className='text-3xl text-violet-600 font-semibold'>₦ {house.price} </div>
                </div>

                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[668px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt="" className='rounded-lg' />
                        </div>

                        <div className='flex gap-x-6 text-violet-700 mb-6'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl' />
                                <div>{house.bedrooms}</div>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl' />
                                <div>{house.bathrooms}</div>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl' />
                                <div>{house.surface}</div>
                            </div>
                        </div>

                        <div className='text-justify'>{house.description}</div>
                    </div>

                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                                <img src={house.agent.image} alt="" />
                            </div>

                            <div>
                                <div className='font-bold text-lg'>{house.agent.name}</div>
                                <Link to='' className='text-violet-700 text-sm '>
                                    View Listings
                                </Link>
                            </div>
                        </div>

                        {/* form */}
                        <form action="" className='gap-y-3 flex flex-col '>
                            <input type="text" placeholder='Name' className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-10 text-sm ' />
                            <input type="email" placeholder='Email' className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-10 text-sm ' />
                            <input type="number" placeholder='Phone' className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-2 h-10 text-sm ' />

                            <textarea
                                placeholder='Message*'
                                defaultValue='Hello, I am interested in.....'
                                className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-2 h-30 text-sm text-gray-400'
                            ></textarea>

                            <div className='flex flex-col gap-2'>
                                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
                                <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyDetails
