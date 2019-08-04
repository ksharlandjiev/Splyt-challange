# Splyt React challenge - React Map

## Background
The task is to create a single page JavaScript application using React. The page should feature a map. The map should show markers illustrating
the up-to-date locations of on-demand taxis in the area. The centre of the map is the location of Splyt's office.
The page also features a UI slider, that enables you to change the amount of markers displayed on the map. The range is be 1-50, but this is configurable via **config.json**

## Decision taken to complete this task.
**PLEASE NOTE:** This solution is for demonstration only and is not production ready.
While the initial thoughts were to implement Google Maps, I tought this app could also be used in mobile (react-native) in the future and it would be amazing (and educational for me) if it could implement a semi-offline mode. Such feature will reduce bandwidth usage and will make the application faster and more responsive. Therefore, a decision was made to implement another Maps API that provides offline capabilities: **Mapbox**

By the time of writing the Splyt's API is CORS protected and we are not able to directly call the API via frontend. Browsers will not allow it.
To go around this common problem, we had to create a proxy server. The current simple implementation is written in node.js using express and it runs on port 5000. This is also a good demonstration on how to bootstrap create-react-app alongside with backend node server to proxy requests. Such approach have a great benefit in cases where you need to do backend validation, authentication and/or other processing prior to calling your endpoint. 

Although the task does not require any geolocation services, I've decided to implement a simple solution (for educational purposes).
Geolocation implementation is using React component lifecycle methods to demonstrate how application can load initial state (default location) and be fully usable while asking the visitor for permissions and refresh its content on approval.


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

