const Axios = require('axios')

export const propertyTypes = [
    'דירה',
    'דירת גן',
    'גג/פנטהאוז',
    'דופלקס',
    'דירת נופש',
    'מרתף/פרטר',
    'טריפלקס',
    'יחידת דיור',
    'סטודיו/לופט',
    "בית פרטי/קוטג'",
    'דו משפחתי',
    'משק חקלאי/נחלה',
    'משק עזר',
    'מגרשים',
    'דיור מוגן',
    'בניין מגורים',
    'מחסן',
    'חניה',
    "קב' רכישה/ זכות לנכס",
    'כללי'
]

export const floorOptions = [
    "הכל",
    "מרתף/פרטר",
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'
]

export const getPropTypes = (index1, index2) => {
    const result = propertyTypes.slice(index1, index2);
    return result;
}


export const propertyConditions = [
    'חדש מקבלן (לא גרו בו בכלל)',
    'חדש (נכס בן עד 5 שנים)',
    'משופץ (שופץ ב5 השנים האחרונות)',
    'במצב שמור (במצב טוב, לא שופץ)',
    'דרוש שיפוץ (זקוק לעבודת שיפוץ)'
]

export const roomsAmmounts = [
    '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5',
    '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12'
]

export const propertyFeatures = [
    'מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', 'ריהוט', 'גישה לנכים', 'מעלית', 'מזגן תדיראן', 'משופצת', 'מטבח כשר', 'דוד שמש', 'סורגים'
]


export const getSuggestedCities = async (input) => {

    if (input.length > 0)
        try {
            const response = await Axios.get(
                'https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=1500'
            )

            const cities = []
            response.data.result.records.map((city) => {

                const cityName = city['שם_ישוב'].trim()
                const cityCode = city['סמל_ישוב']

                if (cityName.indexOf(input) == 0)
                    cities.push({ label: cityName, value: cityCode })
            })

            return cities
        } catch (error) { throw error }
    else return []

}

export const getSuggestedStreets = async (input, cityCode) => {

    if (input.length > 0) {
        try {
            const response = await Axios.get(
                `https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&filters={"סמל_ישוב":"${cityCode}"}&limit=10000`
            )

            const streets = []
            response.data.result.records.map((street) => {

                const streetName = street['שם_רחוב'].trim()

                if (streetName.indexOf(input) == 0)
                    streets.push({ label: streetName, value: streetName })
            })

            return streets
        } catch (error) { throw error }
    } else return []
}

export const getSuggestedHouseNums = async (input, cityCode, street) => {

    if (input.length > 0) {

        try {
            const response = await Axios.get(
                `https://data.gov.il/api/3/action/datastore_search?resource_id=90483ad8-e60d-48a8-a24a-f1959ced4707&filters={"cityCode":"${cityCode}", "streetName":"${street}"}&limit=10000`
            )

            const houseNums = []
            response.data.result.records.map((num) => {

                const houseNum = num['HouseNuber']


                if (houseNum.indexOf(input) == 0)
                    houseNums.push({ label: houseNum, value: houseNum })
            })

            return houseNums
        } catch (error) { throw error }
    } else return []
}

export const getEstateRegion = async (cityCode) => {

    try {
        const response = await Axios.get(
            `https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&filters={"סמל_ישוב":"${cityCode}"}`
        )

        console.log(response.data.result.records[0]["שם_מועצה"])
        return response.data.result.records[0]["שם_מועצה"]
    } catch (error) { throw error }
}

