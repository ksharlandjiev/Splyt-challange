# Splyt React challenge  - React Map

## Background
The task is to create a single page Javascript application using React. The page should feature a map. The map should show markers illustrating
the up-to-date locations of on-demand taxis in the area. You can centre the map on the location of Splyt's office.
The page should also feature a UI slider, that enables you to change the amount of drivers displayed on the map. The range should be 1-50.

## Decision taken to complete this task.
This is just for demonstration and is not production ready.
While the initial reaction was go with Google Maps, I tought this app could also be used in mobile (react-native) in the future and it would be amazing if it could work semi-offline and not consuming a lot of bandwidth. Therefore a decision was made to implement another Maps API that provides offline capabilities: **Mapbox**

By the time of writing the Splyt API is CORS protected and we are not able to directly call the API via frontent. To achive connectivity I had to create a proxy server
written in node/express which runs on port 5000.

Although the task does not require, I was curious to check the **Geolocation API**, and have implemented a small improvement into the app.

## Installation
```
npm install
```
## Configuration

All configuration can be found in config.json
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app and the proxy server in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

