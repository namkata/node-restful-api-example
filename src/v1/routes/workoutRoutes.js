// In src/v1/routes/workoutRoutes.js
const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

router.get("/getAllWorkouts", workoutController.getAllWorkouts);

router.get("/getWorkoutById/:workoutId", workoutController.getOneWorkout);

router.post("/createWorkout", workoutController.createNewWorkout);

router.patch("/updateWorkout/:workoutId", workoutController.updateOneWorkout);

router.delete("/deleteWorkout/:workoutId", workoutController.deleteOneWorkout);

router.get(
  "/getWorkoutById/:workoutId/records",
  recordController.getRecordForWorkout
);

module.exports = router;
