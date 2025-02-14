import React, { useContext } from 'react'
import { HouseContext } from './HouseContext'
import House from './House'
import { Link } from 'react-router' 
import { ImSpinner2 } from 'react-icons/im'

function HouseList() {
    const {houses, loading} = useContext(HouseContext);

    //if the loading is true
    if (loading) {
        return (
            <ImSpinner2 
                className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'
            />
        )
    }

    return (
        <section className='mb-20'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-14'>   
                    {
                        houses.map((house, index)=> {
                            return (
                                <Link to={`/property/${house.id}`} key={index}>
                                    <House house={house} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HouseList