## Adding Design, Styles and Themes

There is a list of [16 best React Component Libraries](https://technostacks.com/blog/react-component-libraries). 

These may be very helpful, however in our case, we are trying to find not only component libraries but also templates that leverage these component libraries so that we can easily plug in and go.

### 1. Choose a Design Library and Template

The following are suggested. Since Creative Tim has done the honor of creating these as already built react-apps, I highly recomend using his:


| Component Library | Template List   |
| ----------------- | ----------- |
| [React Strap Component Library](https://www.creative-tim.com/templates/react)            | [Creative Tim's Templates](https://www.creative-tim.com/templates/react)       |
| [Material UI](https://mui.com/getting-started/usage/)         | [Templates](https://material-ui.com/store/)        |



### 2. Download the source code

![Creative Tim's example](images/DOWNLOAD.png)

### 3. Leverage Stylesheets

Navigate to the index.html file of the source code, and copy the stylesheets found in the ```head``` tag unto your code. It will look something like this:

             <link
              rel="stylesheet"
              type="text/css"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
            />
            <link
              href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
              rel="stylesheet"
            />


### 4. Manage Dependencies

Navigate to the package.json file of the source code, and append the dependencies and devDependencies into your package.json file. 

Remove any duplicates but ensure that react-router-dom is greater than version 6.0.2 in order to have access to ```Routes``` components that we use instead of ```Switch``` in older versions

        "react-router-dom": "^6.0.2",
        
Add eslint config to avoid [create-react-app bug](https://stackoverflow.com/questions/63912721/failed-to-load-config-react-to-extend-from)

        yarn add eslint-config-react-app -D
        
If you are using Creative Tim's project, ensure to add a jsconfig.json file at the root directory with the follwing content. This is because he leverages relative imports and we would need to configure that.

        {
          "compilerOptions": {
            "baseUrl": "src",
            "paths": {
              "*": ["src/*"]
            }
          }
        }
        
Run the following:

        npm install
        

### 5. Leverage Code

Use the code already written for pages and components. To get more components, import them based on the component documentation. An example is:

        import { Button } from '@material/ui';
