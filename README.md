# Getting Started with our SGC_Faculty Project

## Software need to be installed
<Visual Studio Code>
<XAMPP>

##Extension to install in Visual Studio Code
> Shortcut Key to open extension page in visual studio code "Ctrl+Shift+X"
Search PHP Server and install it

Steps to get ready the project
## Download XAMPP from internet

//This is very important, this is to run the database
Remember to setup the environment variable XAMPP/php

Step 1: Open your environment variable,
Step 2: Select PATH in the user variables for USER
Step 3: Add new and put in your xampp file "eg.C:\xampp\php"

## Import project database to XAMPP Server
eg. http://localhost/phpmyadmin/

Step 1: After you setup your path, open you XAMPP Control Panel,
Step 2: Select the "Start" Action for Module <Apache> and <MYSQL> ONLY,
Step 3: After the server runs, click on the "Admin" for <MYSQL>

From the steps above, will lead you to open localhost php my admin and this is the example for the path, now we will import the database to the server
Step 1: Click on the New to navigate to home page for database
Step 2: Create your database with this name "todonex8_sgc_faculty" and beside that select "utf8mb4_general_ci
Step 3: Click Create

You will now see your database is created
Step 4: Find import tab on current database
Step 5: Choose file and select the database you downloaded (Will be included in the zip file, and the name will be "todonex8_sgc_faculty")
Step 6: Click go, wait till "Import has successfully finished, queries executed.

//Congratulations your database is created 

## Download Visual Studio Code from internet
After you clone the project, go to the project directory and open your cmd
eg. C:\Users\User\Desktop\sgc_faculty 

//Please make sure to have Visual Studio Code installed
In the cmd, open "code ."
(Open with Visual Studio Code)

//This is to install the plugins we used in the project || Must run this command
Step 1: After the visual studio code is opened, type "npm install" in the previous cmd 
Step 2: Shortcut Key to open extension page in visual studio code "Ctrl+Shift+X"
Step 3: Search PHP Server and install it

Let's get started on the project
## Open your visual studio code and search for a file DbConnect.php in the controller folder
Step1: Click on it and in the page right click, you will find an option "PHP Server: Serve project"
Step2: Click on it, it will navigate you to a new page, if it is white color page with nothing, congratulations, the db working fine, 
if there is error about php, you might need to double check these few things
1. Your environment path for your xampp is set
2. You had import the database file and name the database "todonex8_sgc_faculty"//very important as to your phpmyadmin 
3. Make sure you downloaded PHP Server extension for Visual Studio Code 

After you got a white page from serving the project
Step1: Go to the project directory and open your cmd, cmd will displayeg. your path\sgc_faculty 
run npm install
run npm start
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
