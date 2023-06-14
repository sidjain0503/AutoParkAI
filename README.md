# EagleEye - Codefiesta 2023

EagleEye is a project which aims to automate the parking systems using image processing and provides a means to track and maintain automatic payment for the parking space. 
This project allots the parking lot to the vehicle using its specialized algorithm and provides a navigation path to the driver to reach the alloted parking space via the shortest path possible .Therefore it achieves its aim to minimize the time required to park the vehicles in the parking area and helps in surveillance of the vehicles in the parking area . 

## How this works ? 
1. When the car enters in the parking area the cctv camera automatically runs the entry model , which detects the vehicle's number plate and sends a request to the server with number plate as its input .  
2. Now when the server recieves an input of number plate at the entry point it automatically assigns the available parking lot to the vehicle and gives out an url/ QR code which helps the user to navigate their way through the parking space alloted to them . 
3. The server sends the link to the owner which the user can use to navigate to the alloted parking lot. You can see the deployed application here : [EagleEye's website](https://codefiesta-two.vercel.app/#/navigate/40)
4. On the Exit position the entry model will automatically detect the vehicles number plate again and checkout the car from th exit point by automatically decucting the amount for the parking from their parking wallet. 




## Technologies used 

1. Open-CV
2. Haarcascades for detecting the numberplate.
3. Tesseract and pytesseract for recognizing the license number from the number plate.
4. MERN stack for the web application.

## Future

1. Creating a more realistic frontend : We are planning to build a new frontend for navigation whose figma designs you can see here: [EagleEye's New Design](https://www.figma.com/file/kGOv1NDaM6uUNUEkwNKUtI/Parking?type=design&node-id=4-1311)

2. Features and integrations : Google map's api integration to find the nearest available parking area . 

## Run Locally

Before setting up the project in your local machine make sure you have nodejs , python , pip, codeeditor , pycharm installed on your device . 

```bash
git clone https://github.com/sidjain0503/codefiesta.git


##for backend 
cd b-eagleeye
npm install
npm run start 

##for frontend
npm install
cd f-eagleeye
npm start

```

 Once the frontend and the backend are up and running . Open up the models folder in pycharm and install the dependencies using pip . Run the modals and you're done with your setup !! 
