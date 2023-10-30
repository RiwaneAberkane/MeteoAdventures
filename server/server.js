const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Port sur lequel le serveur écoutera

// Middleware, routes, et autres

app.get("/", (req, res) => {
  res.send("Hello, World!"); // Exemple de route de base
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀🚀🚀`);
});
