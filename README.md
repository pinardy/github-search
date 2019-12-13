# Github User Search

https://github-search-c73dc.firebaseapp.com/


## Background

This ReactJS application is created for practising my ReactJS knowledge. This application consumes the [Github API](https://developer.github.com/v3/).

## Instructions

1. Clone the repository
2. Install dependences using `npm install` or `yarn` 
3. Run the application via `npm start` or `yarn start`.  
This starts the app in your browser at http://localhost:3000/.

## Requirements

- [x] There is a search bar to let the user search by username (login name)
- [x] While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)
- [x] After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- [ ] If the results are not complete in one page, the pagination is shown on the screen
- [x] When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user
- [x] The new page also has to display the list of the user's repositories, followers and following
- [x] The application is built by [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
- [x] [Webpack](https://github.com/webpack/webpack) is being used to build the application
- [ ] The application has to be responsive and optimised for mobile
- [ ] The application is production ready (**HINT:** try Google’s PageSpeed or Lighthouse)

## Bonus points

- [ ] The application supports IE10 and/or Android native browser (Chrome 30.0)
- [ ] The pages are server-side rendered and are cached in the server
- [ ] All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- [ ] All pages are SEO optimised
- [ ] The project supports code splitting for each pages
- [ ] The results list also asynchronously shows the number of followers and following of each user without going the user page
- [ ] The search input does the searching as you type (See google search as an example)
- [x] There is animated transition between pages
- [ ] The application supports theming and can easily be switched between themes
- [ ] Unit tests
