import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { getPropTypes, propertyTypes, roomsAmmounts } from "../../actions/FormActions";
import { AdSearchContext } from "../../context/AdSearchContext";
import PropChild from "./PropChild";

const Rooms = (props) => {

    const { searchContext, updateSearchContextRoomsAmount } = useContext(AdSearchContext)


    const handleChangeAmount = (key, value) => {
        console.log(key, value)
        const {
            low,
            high
        } = searchContext.roomsAmount

        if (key === 'low')
            updateSearchContextRoomsAmount(value, high)
        else updateSearchContextRoomsAmount(low, value)
    }

    return (
        <div className='dropdown rooms'>
            {!!props.roomsExtended &&
                <div
                    className='dropdown-content room-amount-flex-row'
                >
                    <div className="select-container narrow-container">
                        <select
                            className='dropdown-box'
                            defaultValue={searchContext.roomsAmount.low}
                            onChange={(event) => {

                                handleChangeAmount('low', event.target.value)
                                // setRoomsAmmountError(false)
                            }}
                        >
                            {!!searchContext.roomsAmount.low ?
                                <option value={searchContext.roomsAmount.low} >{searchContext.roomsAmount.low}</option>
                                :
                                <option value="DEFAULT" hidden>מ-</option>
                            }
                            {roomsAmmounts.map((roomsAmmount, i) => {
                                return <option key={i} value={roomsAmmount}>{roomsAmmount}</option>
                            })}

                        </select>
                    </div>

                    <div className="select-container narrow-container">
                        <select
                            className='dropdown-box'
                            defaultValue={searchContext.roomsAmount.high}
                            onChange={(event) => {
                                handleChangeAmount('high', event.target.value)
                                // setRoomsAmmountError(false)
                            }}
                        >
                            <option value="DEFAULT" hidden>עד-</option>
                            {roomsAmmounts.map((roomsAmmount, i) => {
                                return <option key={i} value={roomsAmmount}>{roomsAmmount}</option>
                            })}

                        </select>
                    </div>
                </div>
            }

        </div >

    );

};

export default Rooms;