# Jwt authenticate system 

> This project just demonstrates in an easy and simple way how Jwt can be implemented in BackEnd safely through cookies. FrontEnd was implemented only to facilitate the understanding of token validation by Cookies

## Before you proceed

> It is necessary to have knowledge of express with nodejs, reactjs and how cookie-based authentication systems work to understand this example.

## Usage

Copy and paste .env.example on /web-api folder and rename it to .env , inside it you need you need to attribute  a value to JWT_SECRET param, example: JWT_SECRET=SECRET. 

Run both server and client side application on dev mod(The React application its running on port 3000 and the server is running on port 3400, if you want to change the server port do not forget to change the porxy settings on the package.json from the Client application too!) and you will be able to test the application from client side.
