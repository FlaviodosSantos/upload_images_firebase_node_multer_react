const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { ref, uploadBytes, listAll, deleteObject } = require("firebase/storage");
const storage = require("./firebase");

const app = express();
app.use(cors());
app.use(express.json());

// multer
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

// add a picture

// get all pictures

// delete a picture

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});
