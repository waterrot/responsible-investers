![Responsible Investors](static/images/logo_ri_big.png)

## Table of Contents

-   **[Description](#description)**
-   **[Deployment and Live Demo](#deployment-and-live-demo)**
    -   [Download](#download)
    -   [Clone with Git](#clone-with-git)
    -   [Live Demo](#live-demo)
-   **[UX](#ux)**
    -   [User Stories](#user-stories)
    -   [Wireframes](#wireframes)
    -   [Design](#design)
-   **[Features](#features)**
    -   [Diffent Sections](#different-sections)
    -   [Save Function](#save-function)
    -   [Add and delete players function](#add-and-delete-players-function)
    -   [Reset Game](#reset-game)
    -   [Responsive Design](#responsive-design)
-   **[Technologies](#technologies)**
-   **[Tools](#tools)**
-   **[Testing](#testing)**
    -   [Manual Testing](#manual-testing)
    -   [User Testing](#user-testing)
-   **[Upcoming Features](#upcoming-features)**
-   **[Acknowledgments](#acknowledgments)**

---

## Description

"Responsible Investors is a online broker platform where people can make an account and buy and trade in responsible stocks. The 12 stocks selected for the site are mostly companies who are working on making our planet a better place. Every user gets $10000 (fake) dollars to trade with. Every user pays a small fee ($0.50 + 0,3%) for every trade they make, with this money we from Responsible Investors can keep updating our platform" 

![responsive site](static/images/site_view_on_different_screens.jpg)

---

## Deployment and Live Demo

The game can be used locally by cloning or downloading the repository from [github](https://github.com/waterrot/responsible-investors).

### Download

1. Click on "Clone or download" under the repository name.

2. Click on "Download ZIP"

3. Choose directory to download it to and unzip file

4. Access the Responsible-Investors-master folder

5. Open index.html into your browser to open the Responsible Investors website

### Clone with Git

In your local IDE:

1. Open a new terminal window

2. Change the current working directory to the location where the cloned directory to be created.

3. Enter the following line in the console:

    `git clone https://github.com/waterrot/responsible-investors`

4. Press enter

### Live Demo

The live demo of the cv builder has been deployed to Heroku and is accessible [here](http://responsible-investors.herokuapp.com/).

---

## UX

### User Stories

_Generic User / Player_

-   I want to make an account on the Responsible Investors website.
-   I want to login on the Responsible Investors website.
-   I want to logout of the Responsible Investors website.
-   I want to change my email adress and/or username.
-   I want to read more information about a curtain stock.
-   I want to see which stocks I can buy on the website
-   I want to buy a stock that I like.
-   I want to see how much I gained/lossed on my stock purchase.
-   I want to see how much I spend on trading fees.
-   I want to sell one of my stocks

These goals are accomplished in the following way:

-   A new user can click on the register button on the home screen to make a new account.
-   An existing user can click on the login link to log into the website.
-   An existing user can click on the logout button when he/she is logged in and would like to logout.
-   An existing user can go to profile to change their username/emailadres.
-   An existing user has to login and then can go to the home page to compare the different stocks provided by website.
-   An existing user can click on the stock he/she would like to buy and then fill in the amount of stock he/she wants to buy.
-   An existing user who allready has bought a stock can go to the portfolio to see how their stock is performing.
-   An existing user who allready has bought a stock can see how much he/she has spend on fees on the portfolio page and the profile page.
-   An existing user who allready has bought a stock can sell their stock on the portfolio page by filling in the amount he/she would like to sell and then click the sell button.
-   In the footer of the site the email addresse of the creator is visible so people can get in touch.

### Wireframes

The wireframe was made by hand. The final version of the wireframes can be found [here](assets/images/readme/wireframe.png)

### Design
When the website was made it had a focus on mobile and on desktop vieuw. down below you can find the 2 main design challenges: 

#### colors
The green color (#00c853) was choosen from the standaard colors of Materialize. For a broker the color green and red are important,
 these 2 colors are associated with 'win/loss' and influences to users unconsciously. For the red color we choose #F44336, this color 
 was also chosen with the help of Materialize.

#### Logo
The logo was made with help of [Canva](https://canva.com). I used windmills and an arrow who points upwords. I choose for this because the image 
of the website is green/responsible investing and a combination of gaining money (what the arrow symbolizes) and the windmill, who stends for a green world,
seems like a good combination for that.

![Responsible Investors](static/images/logo_ri.png)

---

## Features

### different Sections

The website can be divided into four main sections:

-   **Welcome Section** This section is a card designed section where people read about the game and continue to another page.
    ![welcome section](assets/images/readme/welcome-section.png)
-   **Donate Section** This section is creates a possibility so that people can donate to the creator.
    ![donate section](assets/images/readme/donate-section.png)
-   **Players Section** Here players can be added and deleted. and there is an information modal on this section.
    ![players section](assets/images/readme/players-section.png)
-   **Game Section** there the randomly selected name and the randomly selected question will be displayed.
    ![game section](assets/images/readme/game-section.png)

Sections are responsive and have dynamic element with them. 

### Save Function

The game make use of the local storage so it is not a problem when players refresh the page.
The names that where filled in by the players are stored in an array in the local storage and are randomly selected when you click on the screen.
The questions and card are also stored in an array in the local storage. Every time the player clicks on the screen a random other item from the array will be selected and the old one will be deleted from local storage.
Any changes made to the CV or its theme can be saved to be updated at a later time.
In the picture down below you can see the local storage with the 2 saved arrays:

![local storage](assets/images/readme/local-storage.png)

### Add and delete players function

In the players section there are 2 buttons to add and delete players. The add button is made with the help of a "for loop" and the delete button deletes the newest input field. 
In the picture down below you can see the 2 buttons, the "add player" and "remove player" buttons:

![add and remove buttons](assets/images/readme/players-section.png)

### Reset Game

The reset button on in the game section deletes the local storage and refreshes the page. before this is done the player will be asked if he or she want to continue with it.
When the page is refeshed the player will get the same question if he or she would like to continue the game or start a new one. On the picture below you can see this notification in the modal.

![reset notification](assets/images/readme/reset-notification.png)

### Responsive Design

This application is build mobile first because it will mostly be used on small gatherings where most people do not have a laptop with them.
With the help of Bootstrap the screens on different screen sizes could easily be editted. The website is customized for all screen sizes with some help to the Google Chrome's dev tools bugs could easily be fixed.

---

## Technologies

-   HTML
-   CSS
-   JavaScript
-   [JQuery](https://jquery.com/)
-   [Bootstrap](https://getbootstrap.com/)
---

## Tools

-   Pen and paper to create the wireframe
-   [Canva](https://canva.com) to create the logo
-   [Font Awesome](https://fontawesome.com/): used for all icons throughout the site
-   [Google Fonts](https://fonts.google.com/): All the fonts were imported from Google Fonts
-   [ResponsiveDesign.is](http://ami.responsivedesign.is/): used to make a photo of how the website will look in different screen sizes.
---

## Testing

### Manual Testing

When the user get the home page he/she can read the first card that comes on the screen. The text that is shown to the user is an intro to the game.
The user also gets the choose to go either to the game page of donate something to the creator. 

When the user chooses for donating to the creator a modal will pop up. This modal asks the user if he or she wants to donate 1, 6 or 24 beer(s). 
When the user presses the button with the amout of beers he or she want to donate the play now button will go to Paypal with that amout preset.

When the user chooses to go to the game page they will first see the "players section" if it is their first visit. Here they can fill in the player names.
They can easily add and remove player names by pressing the "add player" or "remove player" button. If it is not clear to the user he or she can also click on the question mark icon.
A modal will come up with an explanation on how the game works and how that specific section works. When the user presses the "start the game!" button the game will start.

The user then will see a screen with first one randomly selected player from the players who manually where put into the website and then a randomly selected question/task he or she has to complete.
By pressing on the card the next question and player will randomly be selected. There is also a reset button in the right down corner if the user would like to reset the game. A modal will then pop up with 
the question if the user is sure about resetting the game. There is also another question mark icon in the top right corner that triggers a modal with how to play the game. 


### User Testing

The website is fully working and users with no technical knowage can easily test it. I asked 3 friends if anything was unclear to them when they used the site.
This resulted in the following changes:

-   Added a reset button to make the user experience better
-   Added information modals to the game to answer all the main questions
-   changed the home page to be more focussed on the game and not on donating
-   When the page refreshes the user will get a question if he or she would like to continue


## Upcoming features

A number of new features will be implemented in the future.

-   Multible packages of questions so an user can select a question pack based on a theme. 

-   A form where users can upload their own questions to us so that we could add it to one of the packages.

-   A Function where people can make their own question packs with their own questions and pre made questions.

-   Make it possible to delete a specific player instead of only the last one entered.

---

## Acknowledgments

Thanks to [Felipe Alarcon](https://github.com/felipe-alarcon) for helping me with brainstorming on how to code curtain things and for helping me reflect on my own work.

[The following Code Institute student project](https://github.com/jumboduck/CV-Builder) helped me in to create this readme file.

Thanks [Slack Overflow](https://stackoverflow.com/) for giving me code idea's when I was not curtain on how to code something.

Thanks [Code Pen IO](https://codepen.io/rsherry/pen/QwoqyO) for giving me tips on how to make the add and remove players Javascript code.

The footer was made with help of a previous project about making a [CV](https://github.com/waterrot/CV).