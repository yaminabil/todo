# Getting Started with Create React App

// "scripts": {
// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject",
// "dev": "nodemon server",
// "heroku-postbuild": "npm install && npm run build"
// },

{
"proxy": "https://localhost:3001",
"name": "todo",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/jest-dom": "^5.16.4",
"@testing-library/react": "^13.0.1",
"@testing-library/user-event": "^13.5.0",
"axios": "^0.26.1",
"cors": "^2.8.5",
"dotenv": "^16.0.0",
"express": "^4.17.3",
"fetch": "^1.1.0",
"http-proxy-middleware": "^2.0.4",
"mongoose": "^6.2.11",
"morgan": "^1.10.0",
"react": "^18.0.0",
"react-dom": "^18.0.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
},
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"dev": "nodemon server",
"heroku-postbuild": "npm install && npm run build"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
}
}
