import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

function Property() {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left'>
                <RiHome5Line className='dropdown-icon-primary' />

                <div className='flex justify-between items-center w-full'>
                    <div>
                        <div className='text-[15px] font-medium leading-tight'>{property || "Select a property"}</div>
                        <div className='text-[13px]'>Select your property type</div>
                    </div>
                    {isOpen ? (
                        <RiArrowUpSLine className='dropdown-icon-secondary' />
                    ) : (
                        <RiArrowDownSLine className='dropdown-icon-secondary' />
                    )}
                </div>
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {
                    properties.map((property, index) => {
                        return (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button
                                        onClick={() => setProperty(property)}
                                        className={`cursor-pointer block w-full text-left px-6 py-2 ${active ? 'bg-violet-100 text-violet-700' : 'text-gray-900'} transition`}
                                    >
                                        {property}
                                    </button>
                                )}
                            </Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    );
}

export default Property;