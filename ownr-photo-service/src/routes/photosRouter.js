import express from "express";
const router = express.Router();
import { sharksList, catsList } from "../data/photoList.js";
import { shuffleArray } from "../utilities/arrayUtil.js";

const PHOTO_CATEGORY = {
  CATS: "cats",
  SHARKS: "sharks",
};

router.get("/photos", (req, res) => {
  let photos = sharksList.concat(catsList);
  photos = shuffleArray(photos);
  res.send({ photos });
});

router.get("/photos/:category", (req, res) => {
  const category = req.sanitize(req.params.category);
  let photos = null;
  switch (category.toLowerCase()) {
    case PHOTO_CATEGORY.CATS:
      photos = catsList;
      break;
    case PHOTO_CATEGORY.SHARKS:
      photos = sharksList;
      break;
    default:
      break;
  }

  if (photos) {
    res.send({ photos });
  } else {
    res.status(400).send({ error: "Invalid Category" });
  }
});

export default router;
