# Khuong's Full Stack Project (Dogsy)

Welcome to Dogsy, an Etsy inspired clone for all pet related items! Feel free to explore the website and check out what our site has to offer for your furry friends. Users can view and review products while browsing Dogsy.The project was built using Flask for back-end and React for front-end.

**Click on the link below to visit the live site!**<br>
[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
](https://bet2win.onrender.com/)

**Check out my LinkedIn profile below:**<br>
[![Linkedin](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khuong-c-nguyen/)

**Languages Used**<br>
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
<!-- ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) -->

**Site Preview**<br>
![Alt Text](https://cdn.discordapp.com/attachments/1110721109076221993/1195912430971260958/image.png)

<!-- ![Alt text](<Screen-Recording-2024-01-13-at-11.17.31 AM.gif>) -->

## What can you do on Bet2Win?

**1. Explore Betting Options!**<br>

- Navigate through the website as either a registered or unregistered user. Create your own account or simply log in as the demo user for quick access!

**2. What are the perks of being a registered user?**<br>

- Place bets on various events and games
- Manage your betting history
- Interact with other users through comments and discussions on events

## How to download Bet2Win on your local computer

1. In the root folder:

- create an .env file
- copy over .envexample content into the new .env file
- run these commands in terminal

  ```bash
  pipenv requirements > requirements.txt
  pipenv install
  pipenv shell
  flask db upgrade
  flask seed all
  flask run
  ```

2. cd into the root folder and then run `pipenv run flask run` to start the back-end

3. cd into the react-app folder and then run `npm start` to start the front-end

# Site Summary

## Landing Page

![](https://cdn.discordapp.com/attachments/1110721109076221993/1196641120906641540/image.png)

- This page showcases upcoming and popular betting events
- Get a preview of the betting options available on Bet2Win

## Main Page

![All products](https://cdn.discordapp.com/attachments/1110721109076221993/1195912430971260958/image.png)

- The main page displays a list of all available games on Betify
- Anyone can view this page to explore betting options for different games

## Signup

![Sign up](image-3.png)

- Unregistered users can create their own account via the top-right hand corner dropdown menu
- Invalid information will prompt error messages until user resolves them successfully
- Automatically logs the new user in if there are no errors in the sign up form

## Login

![Login](image-2.png)

- Existing users can log in here
- For a quick demo session, click to sign in as the Demo user to explore the site to its fullest extent (ex. create new games, manage games, and leave comments)

## Leave a Comment

![Leave a comment](image.png)

- As a logged-in user, leave comments and discuss upcoming games
- Engage with other users in the community

## Place a Bet

![Place a Bet](image.png)

- As a logged-in user, place bets on various games
- Each new bet requires details like game name, description, category, and amount to bet


## Manage Bets

![Manage Bets](image.png)

- Users can manage and track their bets on the game details page
- View betting history and update or delete bets as needed