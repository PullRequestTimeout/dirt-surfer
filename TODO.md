# TODOs for Dirt Surfer (and Dirt Server backend)

## Dirt Surfer (Front End)

### Menu surface

-   Create list of desired options:
    -   Weather: C° or F°, Trail sorting preference,
-   Connect menu surface to header button, pass props 'open' and 'closed' to operate.
-   Store options in an object at the app level by raising state and pass the object as props to the main widgets, weather and trail displays. Look into useContext hook to avoid prop drilling.

### Weather Widget

-   ~API call for the current day and the next 4 or 6, store as an object variable.~
-   ~Create weather icon component with material icons that takes in weathercode, temp high, temp low as props.~
-   ~Iterate through weather data days and call icon component with props populated from API call, display with divider in between.~

### Trail Widget

-   Main props passed are sorting choices from options object and location which tailors the Dirt Server API call via location query
-   ~Make trail item accordian module. Props should be trailName, starRating, description, forecast and all come from Dirt Server call.~
-   ~Helper function module to make the API fetch to Dirt Server, this already exists in local format in TrailList component.~
-   ~Dirt Server call will return JSON with all trail items, make an array from the JSON, iterate through the array with forEach and call~

### General UI

-   ~Loading screen overlay while API calls are completing and populating React components. Called on location change also while reloading content.~
-   Speed Dial MUI component with icon buttons for my github, linkedin or insta, and ko-fi profile or something.

## Dirt Server (Back End)

-   ~Complete JSON files of trail data, descriptions for Rossland trails, and complete catagorisation of Trail and Castlegar still remaining~
-   Setup Express local environment for development process, to be moved to remote server before deployment
-   Setup default response for main API index ('/'), maybe return html containing docs on usage?
-   ~Set up routing system to each trail network location, GET requests to each route should return dynamic JSON files of trail data and dynamic GPT forecast descriptions. File structure could be '/trails/rossland' which returns the static JSON and the GPT modified JSON~
-   ~Setup .env variable to store and hide OpenAI key, figure out config to cap usage or set price alerts so I don't go broke.~
-   ~Setup chron jobs for Weather API and OpenAI GPT call. Perhaps midnight PST each day, call weather first and populate a JSON file with the previous 10 days weather data. Then when complete, make GPT calls by iterating through all trail items with the weather data object and system params. Should be specified to return both a star rating and a forecast description limited to ~50 words.~ (Cron-job needs to be started when deployed still, one day of data is currently in use for FE development)

## Intro to Dirt Surfer

-   Check in localStorage to determine if the app has been used before, if not, display intro tour for the app. If it has been used before, skip the intro tour and go straight to the app. Perhaps 'do not show again' checkbox on the intro tour.
-   Intro tour should be a series of modals that display the main features of the app, with a 'next' button to move to the next modal. The last modal should have a 'start' button to begin the app.
