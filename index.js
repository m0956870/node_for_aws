const app = require("express")();
app.get("/", async (req, res) => res.json({ status: true, message: "homepage" }))
app.listen(8000, () => console.log("Server running at 8000"));