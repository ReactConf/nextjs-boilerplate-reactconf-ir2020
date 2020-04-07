const cssLoaderConfig = require("@zeit/next-css/css-loader-config");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
	fs.readFileSync(path.resolve(__dirname, "./antd.less"), "utf8")
);

module.exports = (nextConfig = {}) => ({
	...nextConfig,
	...{
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
					"This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
				);
			}

			const { dev, isServer } = options;
			const {
				cssModules,
				cssLoaderOptions,
				postcssLoaderOptions,
				lessLoaderOptions = {}
			} = nextConfig;

			// for all less in clint
			const baseLessConfig = {
				extensions: ["less"],
				cssModules,
				cssLoaderOptions,
				postcssLoaderOptions,
				dev,
				isServer,
				loaders: [
					{
						loader: "less-loader",
						options: {
							...lessLoaderOptions,
							javascriptEnabled: true,
							modifyVars: themeVariables // make your antd custom effective
						}
					}
				]
			};

			config.module.rules.push({
				test: /\.less$/,
				exclude: /node_modules/,
				use: cssLoaderConfig(config, baseLessConfig)
			});

			// for antd less in client
			// disable antd css module
			const antdLessConfig = {
				...baseLessConfig,
				...{
					cssModules: false,
					cssLoaderOptions: {},
					postcssLoaderOptions: {}
				}
			};
			config.module.rules.push({
				test: /\.less$/,
				include: /node_modules/,
				use: cssLoaderConfig(config, antdLessConfig)
			});

			// for antd less in server (yarn build)
			if (isServer) {
				const antStyles = /antd\/.*?\/style.*?/;
				const origExternals = [...config.externals];
				config.externals = [
					(context, request, callback) => {
						if (request.match(antStyles)) return callback();
						if (typeof origExternals[0] === "function") {
							origExternals[0](context, request, callback);
						} else {
							callback();
						}
					},
					...(typeof origExternals[0] === "function"
						? []
						: origExternals)
				];

				config.module.rules.unshift({
					test: antStyles,
					use: "null-loader"
				});
			}

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options);
			}

			return config;
		}
	}
});
