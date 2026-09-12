const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const pinoHttp = require("pino-http");
const rateLimit = require("express-rate-limit");

const productRoutes = require("./routes/product.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(helmet());

app.use(cors());

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(pinoHttp());

app.use("/api", limiter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/products", productRoutes);

app.use(errorHandler);

module.exports = app;