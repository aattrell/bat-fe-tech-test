# Basic React dev environment with hot loading

To be used as part of the _Bookatable Front End and React Assessment_.  
**See the included `task_docs` folder for full instructions and wireframes.**

### Requirements

Built using


```
Node.js:   8.12.0  
npm:       6.4.1
```


### Usage

Hot loading / live-editing React components is enabled.

```
npm install
npm start
open http://localhost:3000
```


#### WebStorm Users

Because the WebStorm IDE uses "safe writes" by default, Webpack's file-watcher won't recognize file changes, so hot-loading won't work. To fix this, disable "safe write" in WebStorm.


### Building

A basic production script is included that builds your app to a `dist` folder

```
npm run build
```


### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)

---

### Notes

I installed babel-plugin-react-css-modules to make the styles easier to manage (so they are scoped within their components). I would usually prefer to use postcss-scss (or similar) as well, but as I was tight on time and it's a small project with relatively simple css requirements, I decided against it.

I added placeholder logic for loading spiners and an error page when performing the fetch request for the json. This is very basic just to show it was something I was considering, but it's not intended as a complete implementation - it's just to show that this can be added properly later.

Looking at the wireframe, it appeared to imply that clicking on a customer row within the table would open up the booking form. 

I have added a submit button to the form instead of updating instantly based on radio button selection, as I was worried that without it, users might accidentally trigger a change to the reservation details.
- Scenario: User clicks on a row, toggles to a different option with the radio button, and clicks the X.
- No submit button: seated/cancelled booking state has change without something to confirm it, exiting without a prompt could cause the user to assume nothing was affected.
- Submit button: slows the user down as it's an extra step, but provides a less confusing experience.

Because of time limitations and current configuration, I was not able to persist the state by updating the JSON or using local storage or doing a POST request if it was a real API. The radio button updates the state in React, but if the page is refreshed or the server restarted then all progress would be lost. 
