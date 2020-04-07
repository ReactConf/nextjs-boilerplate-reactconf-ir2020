const express = require("express");
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();
	server.get("/", (req, res) => {
		return app.render(req, res, "/", req.query);
	});
	server.get("/en", (req, res) => {
		return app.render(req, res, "/", req.query);
	});
	server.use(handler);
	const port = process.env.PORT || 4000;
	server.listen(port, err => {
		if (err) throw err;
		console.log(
			`> Env ${process.env.NODE_ENV} Ready on http://localhost:${port}`
		); // eslint-disable-line no-console
	});
});
