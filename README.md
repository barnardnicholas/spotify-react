# Nick Barnard - Spotichip Tech Test
13/02/2021

## TLDR - Development Notes
- Used 'dotenv' package to handle development environment variables. It's conditionally loaded in index.js.
- Modified 'categories' hook to store multiple values - items, offset, limit, total. useEffect listens for changes in offset & limit to re-fetch data from API.
- Added additional api function for paginated results in src/api/getPaginatedCategories.js.
- Added util funciton to handle URL queries. Function is in src/utils/utils.js, testing scripts are in src/spec/utils.spec.js. Mocha and Chai packages used for TDD. run 'npm run test-utils' to test.
- Modified Header component to accept children, installed pagination controls in header. Prev/Next buttons are conditionally disabled based on current page.
- Added broswer locale detection with fallback and added to API queries. This seemed to solve a bug whereby the Spotify API returned different 'total' values on each API call, as well as making the results more relevant to the end user.
- Added loading feedback for better UX. Feel free to simulate slow connection using Chrome Developer Tools > Mid Tier Mobile. Placeholder result cards are displayed and pagination readout blanks out between content loads. Dummy content is located in /src/data/dummy-data.js. Extra styling added for dummy content. Additional assets can also be found in src/assets.

# Spotchip

Spotchip is a grueling technical test designed to seperate the wheat from the chaff.

The starter code is outputting the first page of music categoires that are being fetched from Spotify's api. Using the Spotify documentation, update the existing code to fetch the subsequent pages.

## Instructions

Fork this repo.

You'll be sent a .env file that contains Spotify client keys, this will need adding to the project for the API calls to work.

## Minimum Requirements

- Build a paginated user interface to view the subsequent categories.
- Update the existing code to use hooks.
- Output the total number of pages.

##
We want to see how you would approach building this feature, get creative and feel free to rip out the existing code, it's really only there as a starting point!

## Resources

- [Spotify browse categories documentation](https://developer.spotify.com/console/get-browse-categories/)