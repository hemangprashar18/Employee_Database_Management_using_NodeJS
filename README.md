<p>
To run the project -> 
Run command -> npm install . then start mongodb (for linux -> sudo service mongod start) <br>
    
--> To register a user -: <br>
Endpoint -> http://localhost:5000/api/auth/register
and in raw data field in JSON format -:
{
    "fullName": "Hemang Prashar",
    "lastName": "Prashar",
    "email": "hprasar@gmail.com",
    "number": "1234664490"
}

--> To login as a user -: <br>
Endpoint -> http://localhost:5000/api/auth/login
and in raw data field in JSON format -:
{
    "fullName":"Hemang Prashar",
    "password":"Hear1234"
}
Logic for password is -: First two letters of Full Name + last two letters of Last Name + First four numbers of your phone number

--> To add bio of that user -: <br>
Endpoint -> http://localhost:5000/api/users/userId/bio
and in raw data field in JSON format -:
{
    "full name":"Hemang Prashar",
    "bio":"My Name is Hemang . I work in BlackBeltHelp as a Software Engineer and I have 2 years of ecprerience in backend development."
}

--> To add photo -: <br>
Endpoint -> http://localhost:5000/api/users/userId/photo
and in form-data field -> give photo as a key and then upload a file. and also userId also as a key.

--> To add video -: <br>
Endpoint -> http://localhost:5000/api/videos/upload
and in form-data field -> give video as a key and then upload a file. also give title,description and userId

--> To get list of Videos of tha users <br>
Endpoint -> http://localhost:5000/api/videos/list

--> To get list of all user's video <br>
Endpoint -> http://localhost:5000/api/videos/list?page=1&limit=5

--> To get videos of the particular video  <br>
Endpoint -> http://localhost:5000/api/videos/userId


</p>
