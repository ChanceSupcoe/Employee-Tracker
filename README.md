# Employee Tracker

## Description
A node application that allows a business owner to view and manage all of the departments, roles, and employees within the company in a single location to facilitate the organization of a the business. 
Upon running the application the user is given the options of viewing all departments, viewing all roles, viewing all employees, adding a department, adding a role, adding an employee, or updating and existing employees role within the organization. 
The input information is used to update the SQL tables associated with the business. 

## Installation
User must first input npm i to load the required npm packages needed.
Second mysql needs to be initialized by typing in mysql -u root -p and entering the password (rootroot) when prompted.
Once the mysql is running, type in source db/shcema.sql to initialize the tables, and then source db/seeds.sql to load the tables with the provided information. 
\q will close mysql so that the node application can be ran.
node index.js will begin the node application, and then follow the prompts on the screen to run the program. 

## Video of Functionality
https://drive.google.com/file/d/1hUSzVIAbkeCFvYlDvCxoot_BQcDEbxHL/view

## License
MIT License

Copyright (c) 2022 Chance Allen Supcoe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
