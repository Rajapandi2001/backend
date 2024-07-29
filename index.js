// all import
const app = require("./app");

// declaration
const PORT = 3434;

// listening server
app.listen(PORT, () => {
    console.log("my app is listening... " + PORT);
})