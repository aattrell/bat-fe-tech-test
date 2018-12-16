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

#### Additional packages used

I installed babel-plugin-react-css-modules to make the styles easier to manage. As this scopes them within their components, this prevents style clash, and puts less focus on creating unique classnames for every single component, speeding up development time.

I was intending to install autoprefixer (or something similar) to automatically add vendor prefixes. This means you do not have to look up which CSS properties require vendor prefixes, and which ones have the default supported across all browsers already. This speeds up development time, and reduces the likelihood of differences across browsers due to human error.

I would usually prefer to use postcss-scss (or similar) as well, but as I was tight on time and it's a small project with relatively simple css requirements, I decided against it.

#### Fetch request (loading, errors)

I decided to simulate a request to an API by using fetch, and passing it the file name instead of a url.

I added placeholder logic for loading spiners and an error component when performing the fetch request for the JSON. It's not intended as a complete implementation - it's just to show that this can be added later.

#### Display only 1 table & 1 form

I worked on the assumption that there would only be one table of data, and that it would show todays bookings only. I wrote a utils function that would return the data for todays date, but then commented out that logic and replaced todays date with a mock date corresponding to the only day for which there is data in the JSON file.

Looking at the wireframe, it appeared to imply that clicking on a customer row within the table would open up the booking form, and that only one booking form would ever be open at once.

I have added a submit button to the form instead of updating instantly based on radio button selection, as I was worried that without it, users might accidentally trigger a change to the reservation details.
- Scenario: User clicks on a row, toggles to a different option with the radio button, and clicks the X.
- No submit button: seated/cancelled booking state has changed without something to confirm it, exiting without a prompt could cause the user to assume nothing was affected.
- Submit button: slows the user down as it's an extra step, but provides a less confusing experience.
- If a user opens the form by clicking a row, does not submit the form, then clicks another row, we have only one form open and it displays the new table row data.

#### Persisting state

Because of time limitations and the current project setup, I was not able to persist the state. The radio button updates the state in React, but if the page is refreshed or the server restarted then all progress with the days bookings would be lost. It also means changes cannot be shared across multiple devices, as one device cannot receive booking updates set by another.

To fix this we would need to find a way to update the JSON file or use local storage. If we were using a real API, then we would probably do a POST request each time the form is submitted. 

#### Accessibility

I have tried to think about basic accessibility requirements as I go along. I have taken care to add hover states, check keyboard navigation, allow outlines for focus states, check color contrast of fonts against backgrounds, improve scannability of the table by colouring alternate rows, and defining roles on buttons.

I have not had time to check this on a screen reader, and review if all content is correctly picked up. This would be a good improvement.

Note: if you are checking keyboard navigation, you may have to alter your default browser settings for this to work correctly.

#### Suggested improvements

(Unfortunately I was not able to achieve these goals in the time available.)

Setup:
- Install an autoprefixer for vendor prefixes
- Install mocha, chai, sinon and enzyme
- Generate a code coverage report e.g. using istanbul
- Configure linting settings for the project

Further work:
- Add unit tests (ideally I would have followed a TDD approach, but I prioritised actually completing the project)
- Add the Bookatable SVG logo at the top of the page
- Make the table header sticky, so a user can clearly see the column headings after scrolling down the page
- Add animations to improve transitions such as opening or closing the form, so this is clearer to the user

Review:
- Cross browser and cross device testing using Browserstack, Saucelabs or physical devices
- Test with a screen reader

