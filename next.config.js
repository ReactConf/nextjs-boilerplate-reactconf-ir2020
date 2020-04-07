const withSass = require("@zeit/next-sass");
const { withPlugins } = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");
const BrotliPlugin = require("brotli-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const withImages = require("next-images");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withAntd = require("./antd/antd-config");
require("dotenv").config();
const TerserPlugin = require("terser-webpack-plugin");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withENV = nextRuntimeDotenv({
	public: ["API_URL", "RANDOM_USER_LIMIT", "REACT_CONF_DATE"]
});
const {
	PHASE_PRODUCTION_BUILD,
	PHASE_PRODUCTION_SERVER,
	PHASE_EXPORT
} = require("next/constants");

const production = process.env.NODE_ENV === "production";
const nextConfig = {
	exportPathMap: () => ({
		"/": { page: "/" },
		"/en": { page: "/" }
	}),
	analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
	analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
	bundleAnalyzerConfig: {
		server: {
			analyzerMode: "static",
			reportFilename: "../bundles/server.html"
		},
		browser: {
			analyzerMode: "static",
			reportFilename: "../bundles/client.html"
		}
	},
	env: {
		API_URL: process.env.API_URL
	},
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		RANDOM_USER_LIMIT: process.env.RANDOM_USER_LIMIT,
		REACT_CONF_DATE: process.env.REACT_CONF_DATE
	},
	distDir: "_next", // used to define the name of build dir, we need it to be _next, for serving gzip files

	// next js caches pages in dev mode, this config is used to increase cache time to have better dev experience
	// https://github.com/zeit/next.js/issues/1939
	onDemandEntries: {
		// Make sure entries are not getting disposed.
		maxInactiveAge: 1000 * 60 * 60,
		// number of pages that should be kept simultaneously without being disposed
		pagesBufferLength: 5
	},
	// webpack config
	webpack: (config, { dev }) => {
		if (production) {
			config.devtool = false;
			config.optimization.minimizer = [
				new OptimizeCSSAssetsPlugin({}),
				new TerserPlugin({
					parallel: true,
					sourceMap: false,
					terserOptions: {
						ecma: undefined,
						warnings: false,
						parse: {},
						compress: {},
						mangle: true, // Note `mangle.properties` is `false` by default.
						module: false,
						output: null,
						toplevel: false,
						nameCache: null,
						ie8: false,
						keep_classnames: undefined,
						keep_fnames: false,
						safari10: false
					}
				})
			];
			for (const r of config.module.rules) {
				if (r.loader === "babel-loader") {
					r.options.sourceMaps = false;
				}
			}
		}
		!dev &&
			config.plugins.push(
				new BrotliPlugin({
					asset: "[path].br[query]",
					test: /\.js$|\.css$|\.html$/,
					threshold: 10240,
					minRatio: 0.7
				})
			);

		// Add gzip compression plugin
		!dev &&
			config.plugins.push(
				new CompressionPlugin({
					filename: "[path].gz[query]",
					algorithm: "gzip",
					test: /\.js$|\.css$|\.html$/,
					threshold: 10240,
					minRatio: 0.7
				})
			);
		return config;
	}
};

module.exports = withENV(
	withPlugins(
		[
			[withCss],
			[withSass],
			[withImages],
			[withAntd],
			[withBundleAnalyzer],
			[
				withOffline,
				{
					workboxOpts: {
						skipWaiting: true,
						runtimeCaching: [
							{
								urlPattern: /images/,
								handler: "CacheFirst"
							},
							{
								urlPattern: /fonts/,
								handler: "CacheFirst"
							},
							{
								urlPattern: /.*/,
								handler: "NetworkFirst"
							},
							{
								urlPattern: /api/,
								handler: "NetworkFirst",
								options: {
									cacheableResponse: {
										statuses: [0, 200],
										headers: {
											"x-test": "true"
										}
									}
								}
							}
						]
					}
				},
				[PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER, PHASE_EXPORT]
			]
		],
		nextConfig
	)
);
