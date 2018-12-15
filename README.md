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

TO DO:
CSS styling of the whole application
Install autoprefixer (or equivalent) for CSS vendor prefixes
Add SVG Bookatable logo
Add cross icon to form for exit
Unit tests
Linting
Code coverage
Cross browser and device checking for issues

I installed babel-plugin-react-css-modules to make the styles easier to manage (so they are scoped within their components). I would usually prefer to use postcss-scss (or similar) as well, but as I was tight on time and it's a small project with relatively simple css requirements, I decided against it.

I added placeholder logic for loading spiners and an error component when performing the fetch request for the JSON. It's not intended as a complete implementation - it's just to show that this can be added later.

It looks like there is intended to only be one table of data, and that it would show todays bookings only. I wrote a utils function that would return the data for todays date, but then commented out that logic and replaced todays date with a mock date corresponding to the only day for which there is data in the JSON file.

Looking at the wireframe, it appeared to imply that clicking on a customer row within the table would open up the booking form, and that only one booking form would be open at a time.

I have added a submit button to the form instead of updating instantly based on radio button selection, as I was worried that without it, users might accidentally trigger a change to the reservation details.
- Scenario: User clicks on a row, toggles to a different option with the radio button, and clicks the X.
- No submit button: seated/cancelled booking state has changed without something to confirm it, exiting without a prompt could cause the user to assume nothing was affected.
- Submit button: slows the user down as it's an extra step, but provides a less confusing experience.
- If a user opens the form by clicking a row, does not submit the form, then clicks another row, we have only one form open and it displays the new table row data.

Because of time limitations and the current project setup, I was not able to persist the state. The radio button updates the state in React, but if the page is refreshed or the server restarted then all progress with the days bookings would be lost. It also means changes cannot be shared across multiple devices. To fix this we would need to find a way to update the JSON file or use local storage. If we were using a real API, then we would probably do a POST request each time the form is submitted. 
