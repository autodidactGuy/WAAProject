DataBase : 
I started it.
Check the database design. Open the file "ReactJSProject" using the website https://app.diagrams.net/

API tasks : 
1) create entities (implement the classes with annotations corresponding to the database)
2) create repositories (CRUD)
3) methods needed in API
* get the last 10 job advertisements.
* get 10 most recently applied job advertisements.
* save new user
* login user
* edit user profile
* get user profile
* add job advertisement 
* edit job advertisement 
* apply job advertisement	
* get advertisements filtered :by tags ,by state by city by companyName. 
* get students filter by by state by city by major by name by student id.
* add comment from Faculty about a student.
* get faculty comments.
* add/edit/get job experience
* add/edit/get education experience
* activate/deactivate user account
* send email to reset password
* get Number of job advertisements per location
* get Number of students per state
* get Number of students per city
* get job advertisement per tag
* get job advertisement per tag and location
* get Average time spent to find a job per gpa range (use gpa column in education and calculate time between the last degree and the first job experience)
* delete operations : isDeleted field set to true
* Login attempts : increment accessFailedCount each time the login operation failed and set the time in lockOutEnd if accessFailedCount >=5. Update accessFailedCount to zero for success login and lockOutEnd to null.
* send notification when 
		*AppliedToTheJob: To the owner of the job advertisement when a student has applied to the job.
		*NewJobPoster: To all students who are interested in job poster's tags get a notification about the job.
	-create the data.sql
	


Front End Components : 
* Modal login
* Modal register 
* Dashboard to Display the last 10 job advertisements
* Dashboard to Display 10 most recently applied job advertisements
* Dashboard for Display charts
* Profile Component
* List Education component 
* List Work experience component 
* List Job advertisement component
* List notifications component
* Chart components   
	 
