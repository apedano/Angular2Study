/**
 * Created by Alex on 13/02/2017.
 */
//il punto dal quale webpack analizza gli import dei vari file
//in quello inseirito parte da angular core e prosegue
//To tell Webpack what belongs in the vendor bundle, add a vendor.ts file
// that only imports the application's third-party modules:
entry: {
    app: 'src/app.ts',
        vendor: 'src/vendor.ts'
},

//This app.js output bundle is a single JavaScript file that contains the application source and its dependencies.
// You'll load it later with a <script> tag in the index.html
//Webpack constructs two separate dependency graphs and emits two bundle files, one called app.js
// containing only the application code and another called vendor.js with all the vendor dependencies.
output: {
    filename: '[name].js'
}




