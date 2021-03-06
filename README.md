# BAY AREA TRIP GUIDE APP
- Web app for sharing trips near bay area, link: https://trips-guide.herokuapp.com/#/
- Author: Wenzhu Chen & Xiaoyan Qin

# Project info Content
1. Project basic information
2. Technologies
3. Setup instructions
4. Website at a Glance

## 1.Project basic information
- CS 5610 Project 4 - final project
- Project Objective: Iterating and improving the previous website with design,function, accessibility and usability.
- Class Link: https://johnguerra.co/classes/webDevelopment_spring_2021/
- Professor: John Alexis Guerra Gómez
- Video Demo: https://youtu.be/Y2rn7OqilUg
- Slides: https://docs.google.com/presentation/d/1FHxtSmYU6CQIUl2KAt9uW6v3XQxaJ8GtA9R-jc05VXk/edit?usp=sharing

## 2. Technologies
- React
- CSS
- BootStrap
- Node.js
- Express
- MongoDB
- dotenv
- ESLint
- Axe

## 3. Setup instructions
- Clone the repo
- install dependecies and ”build“ folder
   ```
   yarn install
   cd front
   yarn install
   yarn build
   ```
- Creat your local `.env` file which contains the MongoDB URL and put it into the project folder
   <br>`.env` file example: `MONGO_URL=mongodb+srv://<username>:<password>.....`
- For viewing the webapp, start the frontend server
   ```
   cd front
   yarn start
   ```
- For development, both the frontend server and backend server need to be started. 
   <br> Start the backend server, run  `yarn nodemon`, and visit http://localhost:3001
   <br> Then start the frontend server, run `cd front`, `yarn start` and visit http://localhost:3000

## 4. Website At a Glance
<img width="80%" alt="homepage" src="https://user-images.githubusercontent.com/51281099/116193973-09f98080-a6e5-11eb-9b00-827a2092bc4b.png">
