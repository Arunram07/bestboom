import app from "./app.js";
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
