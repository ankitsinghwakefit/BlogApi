# BlogApi
The above code is deployed on Heroku and can be accessed using https://shipthis.herokuapp.com/ and endpoints can be hit using postman also as per the request type(GET, POST, PUT, DELETE) targeted.

Here is the list of all implemented requests.
Content-Type : application/json  (to be set in postman header)

First End-Point - To test
    METHOD : GET,
    LINK: https://shipthis.herokuapp.com/
    
Second End-Point - New user registration
    Method: POST,
    LINK: https://shipthis.herokuapp.com/api/v1/users
    BODY: {
            "user" : {
              "username" : "test",
              "email" : "test@gmail.com",
              "password" : "test@12343"
            }
          }
          
Third End-Point - User login
    Method: POST,
    LINK: https://shipthis.herokuapp.com/api/v1/users/login
    BODY: {
            "user" : {
              "email" : "test@gmail.com",
              "password" : "test@12343"
            }
          }
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE OF USER REGISTRATION

Fourth End-Point - Create article
    Method: POST,
    LINK: https://shipthis.herokuapp.com/api/v1/articles
    BODY:{
          "article" : {
            "title": "title",
            "description": "description",
            "body": "body"
          }
        }
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE 

Fifth End-Point - Get selected article
    Method: GET,
    LINK: https://shipthis.herokuapp.com/api/v1/articles/{:slug}
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE 

Sixth End-Point - Update article
    Method: PUT,
    LINK: https://shipthis.herokuapp.com/api/v1/articles/{:slug}
    BODY:{
          "article" : {
            "title": "Updated title",
            "description": "Updated description",
            "body": "Updated body"
          }
        }
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE 

Seventh End-Point - Delete selected article
    Method: DELETE,
    LINK: https://shipthis.herokuapp.com/api/v1/articles/{:slug}
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE 
    
Eighth End-Point - Get user details
    Method: GET,
    LINK: https://shipthis.herokuapp.com/api/v1/user
    Headers : authorization : WRITE THE TOKEN GENERATED IN RESPONSE 
