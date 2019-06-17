const path = require("path")
const exec = require("child_process").exec

const postBuildCommand = {
	apply: (compiler) => {
		compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
			exec(`node ${ path.resolve(__dirname, "dist/bundle.js") }`, (err, stdout, stderr) => {
				if(stdout)
					process.stdout.write(stdout)
				if(stderr)
					process.stderr.write(stderr)
			})
		})
	}
}

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [postBuildCommand]
}
