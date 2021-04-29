# Wine Dataset Visualization App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I have used JavaScript here.

## Tools used:

1. JavaScript
2. React via CRA
3. Yarn `(for installing the node modules, running the project and also deploying it)`
4. Echarts for React `(for the scatter plot and bar plot)`

### File Structure:

1. src folder -> pages folder:
`file structure`
<br>
--> bar.js : contains the bar graph component for plotting 'Alcohol' on horizontal axis and average of 'Malic Acid' on the vertical axis.
<br>
--> bar_responsive.js : contains the bar graph component for plotting 'Alcohol' on horizontal axis and average of 'Malic Acid' on the vertical axis but appears only in screens of width less or equal to 600px
<br>
--> scatter.js : contains the scatter plot component for plotting 'Color Intensity' on horizontal axis and 'Hue' on the vertical axis. 
<br>
--> scatter_responsive.js : contains the scatter plot graph component for plotting 'Color Intensity' on horizontal axis and 'Hue' on the vertical axis but appears only in screens of width less or equal to 600px
<br>
--> scatter_responsive.js : contains the scatter plot graph component for plotting 'Color Intensity' on horizontal axis and 'Hue' on the vertical axis but appears only in screens of width between 766px and 768px
<br>
--> wine.json: containing the dataset containing all the values with their respective keys. The file from where all the values are taken for plotting the bar and scatter plots. Dervied from 'wine.data' from the` [Wine Dataset](https://archive.ics.uci.edu/ml/datasets/wine)

2. src folder -> App.js : `where both the scatter plot and the bar plot components are rendered to show it on the opening page`
3. src folder -> index.js : `to render the App component`
4. css files :`to style the pages`
5. package.json : `where all the configuration and node modules are there`



## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all the necessary node modules.
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
Your app is ready to be deployed!

## Basic overview of the work:
1. downloaded the dataset and after changing it to json format, kept [it](src\pages\wine.json) in the [src/pages](src\pages) folder.
2. built [bar.js](src\pages\bar.js), [bar_responsive.js](src\pages\bar_responsive.js) which is used according to screen size, for keeping the bar graph component, which I have built with Echarts for React and customized as well.
3. built [scatter.js](src\pages\scatter.js), [scatter_responsive.js](src\pages\scatter_responsive.js), [scatter_responsive_ipad.js](src\pages\scatter_responsive_ipad.js), which is used according to screen size, for keeping the scatter plot components with the help of react Echarts for React and customized it as well.
4. render the graph components in [App.js](src\App.js) . 