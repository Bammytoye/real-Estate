import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

function PriceRangeDropDown() {
    const { price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: 'Price range (any)'
        },
        {
            value: '100000 - 130000'
        },
        {
            value: '130000 - 160000'
        },
        {
            value: '160000 - 190000'
        },
        {
            value: '190000 - 220000'
        },
        {
            value: '10000 - 30000'
        },
        {
            value: '30000 - 40000'
        },
    ]

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left'>
                <RiWallet3Line className='dropdown-icon-primary' />

                <div className='flex justify-between items-center w-full'>
                    <div>
                        <div className='text-[15px] font-medium leading-tight'>{price}</div>
                        <div className='text-[13px]'>Choose price range</div>
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
                    prices.map((price, index) => {
                        return (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button
                                        onClick={() => setPrice(price.value)}
                                        className={`cursor-pointer block w-full text-left px-6 py-2 ${active ? 'bg-violet-100 text-violet-700' : 'text-gray-900'} transition`}
                                    >
                                        {price.value}
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

export default PriceRangeDropDown;