const mongoose = require("mongoose");
const http = require("http");

const express = require("express");
const app = express();

// const admin = require("./routes/admin");
const vendor = require("./routes/vendor");

// const application = require("./routes/application");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
mongoose
  .connect(`mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/muruntauq`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

const server = http.createServer(app);

// app.use('/api/admin', admin)
app.use("/api/vendor", vendor);
// app.use('/api', application)

server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);
});
