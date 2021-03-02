const path= require("path");
const common = require("./webpack.common");
const {merge} = require ("webpack-merge");
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports= merge(common,{
    mode:"development",
    output:{
        filename:"main.js",
        path: path.resolve(__dirname,"dist")

    },
    plugins:[new HtmlWebpackPlugin({
        template:"./src/parts/template.html"
    })],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use: [{ loader: "style-loader" }, 
                { loader: "css-loader" },
                { loader: "sass-loader" },
                
               ],
            }
        ]
    }

    
    
});