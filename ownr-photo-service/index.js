import express from "express";
import expressSanitizer from "express-sanitizer";
import cors from "cors";
import photosRouter from "./src/routes/photosRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// express-sanitizer middleware
app.use(expressSanitizer());
app.use(cors());

app.use(photosRouter);

const clientApp = path.join(__dirname, "../ownr-photo-ui/build");

// Static files
app.use(express.static(clientApp));

app.get("/client", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../ownr-photo-ui/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
