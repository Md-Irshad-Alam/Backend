const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on("connected", () => console.log("Detabase is successfully connected!"))
db.on("error", (error) => console.log(`Detabase error ${error.toString()}`))
db.on("disconnected", () => console.log("Detabase is now disconnected !"))