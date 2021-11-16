import express from "express";
import cookieParser from "cookie-parser";

const router = express.Router();

router.use(cookieParser());

router.get("", async (req, res) => {
  res.render("index");
});
router.get("/farming", async (req, res) => {
  res.render("farming");
});
router.get("/staking", async (req, res) => {
  res.render("staking");
});
router.get("/faq", async (req, res) => {
  res.render("faq");
});
router.get("/bridge", async (req, res) => {
  res.render("bridge");
});

export default router;
