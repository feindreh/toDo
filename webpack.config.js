const path = require("path");

module.exports = {
	devtool: "cheap-module-source-map",
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: "file-loader"
			}
		],
		
	},
	watch: true,
};