# **Martian Robot**

## Contents

     1 Run Instructions
   
     2 File Structure
   
     3 Design
   
   

## 1.Run Instructions


To run the application:

    1 Place or edit the "input.txt" file in the ./MartianRobot/src/data directory
  
  ![image](https://user-images.githubusercontent.com/47821160/133906552-238d4377-71a2-4e69-b071-e30c02a03f86.png)
  
  ![image](https://user-images.githubusercontent.com/47821160/133906813-893c6b02-b37f-4512-9032-b08f3ce13841.png)


    2 Open the main.js located in ./MartianRobot/src directory with Visual Studio Code
 
    3 Write "cd src" in the console display
  
    4 Write "node main.js" in the console display
  
  ![image](https://user-images.githubusercontent.com/47821160/133906791-7c35eb95-1a81-4ed8-be0b-35d8e778712d.png)

    5 Check ./MartianRobot/src/data directory to see a new file named "output.txt" with the solution
  
  ![image](https://user-images.githubusercontent.com/47821160/133906839-98f1bf52-6fd9-482a-9c84-f234a0d4d103.png)

  ![image](https://user-images.githubusercontent.com/47821160/133906850-941dcbd8-c2c4-4414-bf31-52d0783156c9.png)

## 2. File Structure
```
src/
|_ data/
   |_ iodata.js
|_ inits/
   |_ mapinit.js
   |_ robotinit.js
|_ models/
   |_ map.js
   |_ robot.js
|_ main_controller.js
|_ main.js
```
## 3.Design

I wanted to create an application that had the ability to extend easily, such that the addition of new objects or features would affect as little of the rest of the code base as possible.
| Directory | Content and description |
| --- | --- |
| src | Contains all the application code. Main.js is the entry point and Main_controller contains all the application business core logic. |
| data | Contains the input and output files as well as iodata.js that gets the data from the files and returns a usable raw data to the application. The reason for separating it from the rest of the application is beause this way we can change the source of the data without changing the rest of the code. |
| inits | Hold the "initializers" mapinit.js and robotinit.js that transform the raw data into meaningful objects that are consumed by the controller. Error handling is done here, the errors appear in the console at the execution time. |
| models | This directory contains map.js and robot.js that are isolated because if we want to introduce new objects in the future we can do it here and dont affect other parts of the code. |
