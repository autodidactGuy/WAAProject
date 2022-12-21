import Moment from 'moment'
import dayjs from 'dayjs';

export const dateToString = (date) => {
   return dayjs(date).format("YYYY-MM-DD")
}

export const stringToDate = (stringDate) => {
    return dayjs(stringDate, 'YYYY-MM-DD')
}

export const convertJobExperienceApiToFront = (api) => {

}

export const convertJobExperienceFrontToApi = (front) => {
    return {
        "jobTitle": front.JobTitle,
        "fromTime": front.From,
        "endTime": front.To,
        "companyName": front.Company,
        "details": front.Details,
        "city": {
            "id": {
                    "cityName": front.City,
                    "stateCode": front.State
                }

        }
    }
}


