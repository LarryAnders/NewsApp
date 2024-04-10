# NewsApp

#### *The NewsApp application was built using NodeJS with a PostgreSQL database. 

## This application allows for users to submit news articles to a bulletin board for anyone using the application to read. 
#### - New users are immediately directed to the register account page, but also have to option to view existing articles.

#### - ExpressJS framework is used to define routes and handle CRUD operations. This allows users to create a new article, view existing articles, and edit or delete their personal articles.

#### - Bcrypt is used to encrypt user passwords before storing them into the database upon registering a new user.

#### - pg-promise library is used to retrieve and send data to the PostgreSQL database. 

### Middleware used to protect routes:

#### - Only allowing users with accounts to add, edit, or delete articles. 
#### - Users can only edit or delete their personal articles, but can view all articles in database.  

 
