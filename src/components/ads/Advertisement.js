import React, { useState } from "react";
import noImageIcon from '../../media/no-image-icon.png'

const Advertisement = (props) => {
    const [extendedMode, setExtendedMode] = useState(false)
    const URL = "https://drop-box-storage.s3.eu-west-1.amazonaws.com/"

    const {
        formID,
        propertyType,
        propertyCondition,
        city,
        street,
        houseNum,
        floor,
        totalFloors,
        isOnPillars,
        hood,
        roomsAmmount,
        parkingLotsAmmount,
        balconiesAmmount,
        feature0, feature1, feature2, feature3, feature4, feature5,
        feature6, feature7, feature8, feature9, feature10, feature11,
        description,
        builtArea,
        overallArea,
        price,
        entryDate,
        contactName,
        mainNumber,
        email,
        photoUrls
    } = props.adData

    const [showNumber, setShowNumber] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleClickExtender = (event) => {
        const className = event.target.className
        if (className !== 'show-number-button' && className !== 'phone-icon') {
            setExtendedMode(!extendedMode)
            setShowNumber(false)
        }
    }


    return (
        <div >
            {!extendedMode ?
                <div className='ad-wrapper-normal clickable transition'
                    onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                    onClick={() => { setExtendedMode(!extendedMode); handleMouseOut() }}
                >
                    <div className='ad-section1'>
                        {photoUrls.length > 0 ?
                            // <img src={URL + `?key=${photoUrls[0]}`} alt={'img'} />
                            <img src={URL + photoUrls[0]} alt={'img'} />
                            :
                            <img src={noImageIcon} alt={'img'} />
                        }
                    </div>

                    <div className='ad-section2'>
                        <div
                        >{street} {houseNum}
                        </div>
                        <div
                        >{propertyType}, {city}
                        </div>
                    </div>

                    <div className='ad-section3'>
                        <div>
                            {roomsAmmount} <span>??????????</span>
                        </div>

                        <div>
                            {floor} <span>????????</span>
                        </div>

                        <div>
                            {builtArea} <span>??"??</span>
                        </div>
                    </div>

                    <div className='ad-section4'>

                        <div className="ltr">

                            <div>
                                ??? {price.toLocaleString()}
                            </div>

                            {isHovering ?
                                <div className="ad-section4-sub1 orange-font transition">
                                    ???????? ????????????
                                </div>
                                :
                                <div className="ad-section4-sub1 ">
                                    ?????????? ????????
                                </div>
                            }

                        </div>

                    </div>
                </div>
                :
                <div className='ad-wrapper-normal wrapper-extended clickable transition'
                    onClick={handleClickExtender}
                >

                    <div className='ad-section1 ext1'>
                        {photoUrls.length > 0 ?
                            // <img src={URL + `?key=${photoUrls[0]}`} alt={'img'} />
                            <img src={URL + photoUrls[0]} alt={'img'} />
                            :
                            <img src={noImageIcon} alt={'img'} />
                        }
                    </div>

                    <div className="ad-section2 ext2">

                        <div className='ad-section2 full-width padding-top'>
                            <div
                            >{street} {houseNum}
                            </div>
                            <div
                            >{propertyType}, {city}
                            </div>
                        </div>

                        <div className='ad-section3 no-border full-width'>
                            <div>
                                {roomsAmmount} <span>??????????</span>
                            </div>

                            <div>
                                {floor} <span>????????</span>
                            </div>

                            <div>
                                {builtArea} <span>??"??</span>
                            </div>
                        </div>
                    </div>

                    <div className='ad-section3-ext ltr'>

                        <div className="ltr">

                            <div>
                                ??? {price.toLocaleString()}
                            </div>

                            {isHovering ?
                                <div className="ad-section4-sub1 orange-font transition">
                                    ???????? ????????????
                                </div>
                                :
                                <div className="ad-section4-sub1 ">
                                    ?????????? ????????
                                </div>
                            }

                        </div>



                        <div>
                            <div className="show-number-button"
                                onClick={() => { setShowNumber(!showNumber); }}
                            >
                                ???????? ???????? ??????????
                                <div className="phone-icon" />
                            </div>

                            <div
                                className='dropdown'>
                                <div
                                    className='phone-number-modal transition'
                                >

                                    {!!showNumber &&

                                        <div>
                                            <div className="contact-row">
                                                {contactName || 'Ploni Almoni'}
                                            </div>
                                            <div className="props-spacer" />
                                            <div className="contact-row">
                                                {mainNumber || '050-1234567'}
                                            </div>
                                            <div className="props-spacer" />
                                            <div className="contact-row">
                                                {'?????????? ?????????? ????????????'}
                                            </div>
                                        </div>

                                    }

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            }
            {!!extendedMode &&
                <div className="ext-prop-desc-container ">

                    <div className="ext-prop-desc rtl">

                        <div>
                            <div className="prop-desc-title">
                                ?????????? ????????
                            </div>

                            <div className="prop-desc">
                                {description}
                            </div>
                        </div>


                        <div className="property-features1-ext">
                            <div>?????? ???????? <span>{propertyCondition}</span></div>
                            <div>?????????? ?????????? <span>{entryDate}</span></div>
                            <div>?????????? ?????????? <span>{totalFloors}</span></div>
                            <div>???????????? <span>{balconiesAmmount}</span></div>
                            <div>?????????? <span>{parkingLotsAmmount}</span></div>
                        </div>


                        <div>
                            <div className="prop-desc-title">
                                ???? ???? ?????????
                            </div>

                            <div className="property-features2-ext">
                                <div className={feature0 ? "orange-font" : "grey-font"}>??????????</div>
                                <div className={feature11 ? "orange-font" : "grey-font"}>????????????</div>
                                <div className={feature6 ? "orange-font" : "grey-font"}>??????????</div>
                                <div className={feature9 ? "orange-font" : "grey-font"}>???????? ??????</div>
                                <div className={feature10 ? "orange-font" : "grey-font"}>?????? ??????</div>
                                <div className={feature5 ? "orange-font" : "grey-font"}>???????? ??????????</div>
                                <div className={feature8 ? "orange-font" : "grey-font"}>????????????</div>
                                <div className={feature1 ? "orange-font" : "grey-font"}>????"??</div>
                                <div className={feature2 ? "orange-font" : "grey-font"}>????????</div>
                                <div className={feature7 ? "orange-font" : "grey-font"}>???????? ????????????</div>
                                <div className={feature4 ? "orange-font" : "grey-font"}>??????????</div>
                                <div className={feature0 ? "orange-font" : "grey-font"}>????????</div>

                            </div>

                        </div>
                    </div>


                    <div className="prop-desc-side-bar" />
                </div>
            }

        </div >
    );
};

export default Advertisement;