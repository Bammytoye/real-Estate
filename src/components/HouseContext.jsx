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
        const allCountries = housesData.map((house) => house.country);
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, []);

    // Extract unique properties
    useEffect(() => {
        const allProperties = housesData.map((house) => house.type);
        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
        setProperties(uniqueProperties);
    }, []);

    const handleClick = () => {
        // Set loading state
        setLoading(true);

        // Check if a value includes "(any)"
        const isDefault = (str) => str.split(' ').includes('(any)');

        // Parse price range
        const priceRange = price.split(' ');
        const minPrice = parseInt(priceRange[0]);
        const maxPrice = parseInt(priceRange[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            // Check if all values are default
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return true;
            }

            // Check country
            const matchesCountry = isDefault(country) || house.country === country;

            // Check property type
            const matchesProperty = isDefault(property) || house.type === property;

            // Check price range
            const matchesPrice =
                isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

            // Return true if all selected filters match
            return matchesCountry && matchesProperty && matchesPrice;
        });

        // Simulate loading delay
        setTimeout(() => {
            setHouses(newHouses.length < 1 ? [] : newHouses);
            setLoading(false);
        }, 1000);
    };

    return (
        <HouseContext.Provider
            value={{
                country,
                setCountry,
                countries,
                property,
                setProperty,
                properties,
                price,
                setPrice,
                houses,
                loading,
                handleClick,
            }}
        >
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;