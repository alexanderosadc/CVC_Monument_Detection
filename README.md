# General Information
The modern tourist businesses just start to bounce back and get themselves back on their feet after economics crisis due to the pandemic. Small tourists’ businesses and tour guides could profit from an application, detecting cultural monuments. Also, those who decided to travel by themselves would find it easier to explore a another’s culture and history through this kind of application. "Tell me what is it? Tourist Edition" is an application for detecting cultural monuments and displaying information about them.
We’ve built a web-application that gets a photo from the user and, having the photo processed by a neuronal network, shows the tourist a brief information about the moment in front of them proposing to visit more websites to get more detailed understating about that landmark.
The goal of our app is to:
* promote local and international tourism
* make it easier to understand and get to know another countries’ culture
* make the work easier for tour guides 
## Scraping
 The neuronal network was trained on the data douwnloaded from the [source](https://www.cs.ubc.ca/~kmyi/imw2020/data.html). We tested it on the test folder from the same [source](https://www.cs.ubc.ca/~kmyi/imw2020/data.html)
## Preprocessing Data
* data cleaning – deleting the photos that are blurry or of an another format
* splitting the photos into the train and test folders
# Model Training and Result Comparison
## Hand-written neuronal network
* Epoch 1) Train Accuracy: 0.9545809910003267 Test Accuracy: 0.968869070589665
…
* Epoch 10) Train Accuracy: 0.9816279182700289 Test Accuracy: 0.989991383100004

## Pretested neuronal network (resnet50)
* Epoch 1) Train Accuracy: 0.9665809869766235 Test Accuracy: 0.9676907062530518
…
* Epoch 10) Train Accuracy: 0.9974293112754822 Test Accuracy: 0.9954880519294434

# Technologies Used
## Front-end
* HTML, CSS
* JavaScript (JQuery)
## Python (Flask) and Libraries
* included in the requirement.txt document
# Setup
1)	Install python virtual environment (conda)
2)	Run in the shell pip install -r requirements.txt to install all necessary libraries.


