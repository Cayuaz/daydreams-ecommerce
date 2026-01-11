import { app } from "./index.js";

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log("Server started!"));
