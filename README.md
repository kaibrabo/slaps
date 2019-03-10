This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Dependencies

`npm install -S react-router-dom`


Using c9:

if:
`Error: Cannot find module 'npmlog'`

    do:
    `nvm i node`
    `npm config delete prefix`
    `npm i -g npm`
    
    then: 
    `npm start`

if:
`sh: 1: react-scripts: not found`

    do:
    `npm update`
        `npm audit fix` if necessary
    
    then: 
    `npm start`