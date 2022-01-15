# API for [Schedura](https://github.com/GDSC-DSI/Schedura)
[![GitHub contributors](https://img.shields.io/github/contributors/GDSC-DSI/api)](https://github.com/GDSC-DSI/api/graphs/contributors) [![GitHub issues](https://img.shields.io/github/issues/HAC-2020/Aimers)](https://github.com/kitarp29/api/issues/) [![apkSize](https://img.shields.io/badge/Web%20App%20size-32MB-blue)]() <br/>  
## Overview
The API is a basic REST API written to be called by the App built under Android Study Jams 2021. We built this API under the Org. [**Google Developer Student Club - DSI**](https://gdsc.community.dev/dayananda-sagar-institutions-bengaluru/).
There is basic work of the API is to provide routes to *GET* and *POST* the timetable of different classes that are conducted on our college campus. This app provides the data for the classes happening at [Dayananda Sagar College of Engineering, Bangalore](http://dsce.edu.in/) in real-time.
This is still a system in development.
## ✨ Proposed Solution :
This project proposes an “Attendance Manager System” which also has a “Digital Time Table” in it.
</p>
<p>
The attendance management system allows students to track their attendance in any subject of their choice. They just have to add the subject of their choice and mark attended or missed for each class they have. Then the app will automatically generate and display a progress bar indicating their attendance percentage. 
</p>
<p>
The digital timetable takes data from users like – year, branch & semester. Then it fetches & displays the timetable for the given data. Students get their class schedule in a few clicks, that too in a hassle-free manner.
</p>

## 🛠 How To Setup :
Minimun requirements:
- [Node.JS v14+](https://nodejs.org/en/download/)
- [MongoDB Databse](https://www.mongodb.com/) (Local/Remote)
- Any Code Editor
- Internet Browser
- Internet
## Docker Setup:
- First make sure your laptop has Docker
- Open terminal, run ```docker pull kitarp29/gdsc_dsi_api:1.0```
- Run ```docker run -e  DATABASE_URL -d --name pk -p 5000:5000 kitarp29/gdsc_dsi_api:1.0```
- The API is running at  [http://localhost:5000/](http://localhost:5000/)
## Steps to set up locally
- Clone the Repo
- Open in any code editor
- In index.js replace ```process.env.DATABASE_URL``` with the URL of your MongoDB Database
- In your terminal, run: ``` npm i``` (supposing you have npm, commands might differ for yarn)
- Now, run: ```nodemon index.js```
 
This should start a server running at [http://localhost:5000/](http://localhost:5000/)

## Rules for Contributing:
- Always commit to ```main``` branch
- Make descriptive issues
- Make a fork and then make a Pull Request

## Current Tech Specs
- NodeJS Version v14.18.2
- Heroku for Deploying API
- MongoDB Atlas for Database

## Tasks for future
- Make logging procedure for each request
- Containerise the API Server
- Deploy it in a K8s Cluster
- Add Monitoring tools for the server like ELK, Prometheus, and Grafana


## Watch this
- https://user-images.githubusercontent.com/74984914/149630743-22f11a13-8434-482c-a574-4b0ef355c062.mp4

To know more stay tuned at https://www.youtube.com/channel/UCMsXkBhIKnEpDAJGNKGo0Tw


### Thanks for the interest in our API :)
