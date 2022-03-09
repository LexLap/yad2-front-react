import React, { createContext, useReducer, useState } from 'react';

export const AdSearchContext = createContext();

const AdSearchContextProvider = (props) => {

    function reducer(state, action) {
        // const valueIndex = state.propTypes.indexOf(action.elm)
        let valueIndex

        switch (action.type) {

            case 'update-prop-types':
                valueIndex = state.propTypes.indexOf(action.elm)
                if (action.isChecked)
                    if (valueIndex === -1)
                        return {
                            ...state,
                            propTypes: state.propTypes.concat(action.elm)
                        }
                    else return {
                        ...state
                    }

                else {
                    const part1 = state.propTypes.slice(0, valueIndex);
                    const part2 = state.propTypes.slice(valueIndex + 1);
                    const newArr = [...part1, ...part2]
                    return {
                        ...state,
                        propTypes: [...newArr]
                    }
                }

            case 'update-prop-features':
                valueIndex = state.propFeatures.indexOf(action.elm)

                if (action.isChecked)
                    if (valueIndex === -1)
                        return {
                            ...state,
                            propFeatures: state.propFeatures.concat(action.elm)
                        }
                    else return {
                        ...state
                    }

                else {
                    const part1 = state.propFeatures.slice(0, valueIndex);
                    const part2 = state.propFeatures.slice(valueIndex + 1);
                    const newArr = [...part1, ...part2]
                    return {
                        ...state,
                        propFeatures: [...newArr]
                    }
                }
            case 'update-rooms-amount':
                return {
                    ...state,
                    roomsAmount: { low: action.low, high: action.high }
                }

            case 'update-price-range':
                return {
                    ...state,
                    priceRange: { low: action.low, high: action.high }
                }

            case 'update-floor-range':
                return {
                    ...state,
                    floorRange: { low: action.low, high: action.high }
                }

            case 'update-size-range':
                return {
                    ...state,
                    sizeRange: { low: action.low, high: action.high }
                }

            case 'update-entry-date':
                return {
                    ...state,
                    entryDate: action.value
                }

            default:
                throw new Error();
        }
    }
    const propFeatures = []
    const propTypes = []
    const entryDate = ''
    const floorRange = { low: undefined, high: undefined }
    const priceRange = { low: undefined, high: undefined }
    const sizeRange = { low: undefined, high: undefined }

    const roomsAmount = { low: undefined, high: undefined }
    const initialState = {
        propTypes,
        propFeatures,
        roomsAmount,
        priceRange,
        floorRange,
        sizeRange,
        entryDate

    };
    const [searchContext, setSearchContext] = useReducer(reducer, initialState);

    const updateSearchContextPropTypes = (elm, isChecked) => {
        setSearchContext({ type: 'update-prop-types', elm, isChecked })
    }

    const updateSearchContextPropFeatures = (elm, isChecked) => {
        setSearchContext({ type: 'update-prop-features', elm, isChecked })
    }

    const updateSearchContextRoomsAmount = (low, high) => {
        setSearchContext({ type: 'update-rooms-amount', low, high })
    }

    const updateSearchContextPriceRange = (low, high) => {
        setSearchContext({ type: 'update-price-range', low, high })
    }

    const updateSearchContextFloorRange = (low, high) => {
        setSearchContext({ type: 'update-floor-range', low, high })
    }

    const updateSearchContextSizeRange = (low, high) => {
        setSearchContext({ type: 'update-size-range', low, high })
    }

    const updateSearchContextEntryDate = (value) => {
        setSearchContext({ type: 'update-entry-date', value })
    }



    return (
        <AdSearchContext.Provider value={{
            searchContext,
            updateSearchContextPropTypes,
            updateSearchContextPropFeatures,
            updateSearchContextRoomsAmount,
            updateSearchContextPriceRange,
            updateSearchContextFloorRange,
            updateSearchContextSizeRange,
            updateSearchContextEntryDate
        }}>
            {props.children}
        </AdSearchContext.Provider>
    );
};

export default AdSearchContextProvider;