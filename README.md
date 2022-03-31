# overbond-eng-test-joshuaemerson

## How to use the application
You can clone the repo from github. In order to install the dependancies, you will run:

```
npm install
```

This will install all dependancies as outline in the package.json file. 

In order to view the spreadsheet, you will need to view the "index.html" file in your browser". The "createScatterPlot" function defined inside of "App.js"
is used to create the scatterplot that can be viewed in the browser. Currently, this function uses a file that I have already defined in the repo. If you wish
to create a scatterplot with your own data, simply copy the file into the repo and change add the relative path of this file as the argument to the "createScatterPlot"
function.


## Testing (Incomplete)
In order to run the automated testing, you can run the following:

```
npm test
```

This will run the automated testing suite through a package called "mocha". Note: The testing suite is incomplete as I had run out of time when creating it.


## Approach
My approach to the problem is as follows. Since I am familiar using JavaScript, I decided to use the fetch API to parse the data from the file as first
a text file. I then converted this text file into an array to make the data easier to work with. I then obtained the required data from the file that was neccessary to create the
desired scatterplots. I did this by looping through the array and checking for the data of interest and then pushing these values into individual arrays
that corresponded to the issuance datesm clean asks, clean bids, and last prices. I then used these arrays as the data to create the scatterplot. I used a 
external library called "plotly" to do this. This library creates the scatterplot in the browser which can be viewed by opening the "index.html" file in the browser,
(use Chrome for best results).
