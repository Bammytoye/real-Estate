import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)'); 
    const [properties, setProperties] = useState([]); 
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    // Extract unique countries
    useEffect(() => {
        const allCountries = houses.map((house) => house.country);
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, [houses]); 

    // Extract unique properties
    useEffect(() => {
        const allProperties = houses.map((house) => house.type); 
        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
        setProperties(uniqueProperties);
    }, [houses]); 
    
    const handleClick = () => {
        //set loading
        setLoading(true);

        //create a function that check if the string include any
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        //get first value of the price and parse it to number
        const minPrice = parseInt(price.split(' ')[0]);

        //get the second value of the price 
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            //if all values are selected
            if (
                house.country === country &&
                house.type === property && 
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house;
            }

            //if all values are default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            //if all country are default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            //if all property are default
            if (isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.type === property;
            }

            //if all price are default
            if (isDefault(price) && isDefault(country) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                };
            }

            //if country and property is not default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property; 
            }

            //if country and price is not default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country === country
                }
            }

            //if property and price is not default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }
        });

        setTimeout(() => {
            return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
            setLoading(false); 
        }, 1000)
    }

    return (
        <HouseContext.Provider value={{
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            setProperties,
            price,
            setPrice,
            houses,
            loading,
            setLoading, 
            handleClick,
            loading,
        }}>
            {children}
        </HouseContext.Provider>
    );
}

export default HouseContextProvider;