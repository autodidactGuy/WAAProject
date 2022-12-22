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
        "toTime": front.To,
        "company": front.Company,
        "details": front.Details,
        "isCurrentPosition":front.IsCurrentPosition,
        "hierachicalLevel":"leader",
        "city": {
            "id": {
                    "cityName": front.City,
                    "stateCode": front.State
                }

        }
    }
}

export const jobFromApi2Front=(job)=>{
    return {
        Id: job.id,
		 
		JobTitle: job.jobTitle,
		From: job.fromTime,
		To: job.toTime,
		IsCurrentPosition: job.isCurrentPosition,
		Company: job.company,
		Details: job.details,
		State: job.city.id.stateCode,
		City: job.city.id.cityName
    }
}
export const jobListFromApi2Front=(list)=>{
    let result =[]
     
    list.forEach(element => result.push(jobFromApi2Front(element)));
  
    return result;
}


export const educationFromFront2API=(education)=>{
    return {
        educationTitle:education.EducationTitle,
        degree:education.Degree,
        year:dayjs(education.Year).format("YYYY-MM") ,
        description:education.Description,
        gpa:+education.GPA,
        schoolname:"MIU"
    }
}

export const educationFromAPI2Front=(education)=>{
    return {
        Id: education.id,
		
		EducationTitle: education.educationTitle,
		Degree: education.degree,
		Year: education.year+"-01",
		Description : education.description,
		GPA: education.gpa,
        SchoolName:education.schoolname
    }
}

export const educListFromAPI2Front=(list)=>{
    let result = [];
    list.forEach(e=>{
        result.push(educationFromAPI2Front(e));
    })
    return result;
}

export const advFromAPI2Front=(adv)=>{
    
    return {
        Id: adv.id,
        
        Title: adv.profile,
        PublicationDate: adv.publicationDate,
        //State: adv.city?.id?.stateCode,
        //City: adv.city?.id?.cityName,
        State: "",
        City: "",
        CompanyName: adv.companyName,
        Description:adv.description,
        src:"",
        tags:adv.tags,

    }
}

export const advFromFront2API=(adv)=>{
    return {
        publicationDate: dateToString(adv.PublicationDate),
        workload:"123",
        contract:"222",
        description:adv.Description,
        profile:adv.Title,
        city:{
            id:{
                cityName:adv.location[1],
                stateCode:adv.location[0]
            }
        },
        companyName:adv.CompanyName
    }
}


export const advListFromApi2Front=(list)=>{
    let result =[]
   console.log('before convertion ',list);
   
    list.forEach(element => result.push(advFromAPI2Front(element)));
   
    return result;
}


export const convertUserApiToUserFront=(user)=>{
    return {

    };
}