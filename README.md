# **Martian Robot**

## Contents

     1 Run Instructions
   
     2 File Structure
   
     3 Design
     
     4 Run the application using Visual Studio Code
   
   

## 1.Run Instructions

The only requirement to run this application is have installed NodeJS in your PC.

To run the application:


    1 Place or edit the "input.txt" file in the ./MartianRobot/src/data directory
  
  ![image](https://user-images.githubusercontent.com/47821160/133908036-a078abfc-7062-4091-86ac-ea658e5afa41.png)
  
  ![image](https://user-images.githubusercontent.com/47821160/133906813-893c6b02-b37f-4512-9032-b08f3ce13841.png)


    2 Execute the "Script.bat" file
    
   ![image](https://user-images.githubusercontent.com/47821160/133923635-725443aa-128a-4e04-b401-a3201f7f7df9.png)
    
 
    3 Check ./MartianRobot/src/data directory to see a new file named "output.txt" with the solution
  
  ![image](https://user-images.githubusercontent.com/47821160/133908024-ad1c3faf-dfe4-4b84-99e8-0e7ab16a8a8b.png)

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
|_ Script.bat
```
## 3.Design

I wanted to create an application that had the ability to extend easily, such that the addition of new objects or features would affect as little of the rest of the code base as possible.
| Directory | Content and description |
| --- | --- |
| src | Contains all the application code. Main.js is the entry point and Main_controller contains all the application business core logic. I also included a Script.bat file to run the program in an easier way, without using Visual Studio Code or the Windows console |
| data | Contains the input and output files as well as iodata.js that gets the data from the files and returns a usable raw data to the application. The reason for separating it from the rest of the application is beause this way we can change the source of the data without changing the rest of the code. |
| inits | Hold the "initializers" mapinit.js and robotinit.js that transform the raw data into meaningful objects that are consumed by the controller. Error handling is done here, the errors appear in the console at the execution time. |
| models | This directory contains map.js and robot.js that are isolated because if we want to introduce new objects in the future we can do it here and dont affect other parts of the code. |


## 4.Run the application using Visual Studio Code


To run the application:

    1 Place or edit the "input.txt" file in the ./MartianRobot/src/data directory
  
  ![image](https://user-images.githubusercontent.com/47821160/133908036-a078abfc-7062-4091-86ac-ea658e5afa41.png)
  
  ![image](https://user-images.githubusercontent.com/47821160/133906813-893c6b02-b37f-4512-9032-b08f3ce13841.png)


    2 Open the main.js located in ./MartianRobot/src directory with Visual Studio Code
 
    3 Go to the ./MartianRobot/src directory using the "cd" command in the console display
    
           3.a In case that you dont have the console opened, click "View" and then "Console":
    
   ![image](https://user-images.githubusercontent.com/47821160/133907903-6be46229-cf25-405c-841f-a9d4e0c79f40.png)
  
    4 Write "node main.js" in the console display
  
   ![image](https://user-images.githubusercontent.com/47821160/133907993-c0602dfc-5e74-463a-a9cb-776dead32280.png)

    5 Check ./MartianRobot/src/data directory to see a new file named "output.txt" with the solution
  
  ![image](https://user-images.githubusercontent.com/47821160/133908024-ad1c3faf-dfe4-4b84-99e8-0e7ab16a8a8b.png)

  ![image](https://user-images.githubusercontent.com/47821160/133906850-941dcbd8-c2c4-4414-bf31-52d0783156c9.png)
