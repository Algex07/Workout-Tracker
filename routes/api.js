
const router = require("express").Router();
const Workout = require("../models/workout.js");



router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((Workout) => {
      Workout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.post("/api/workouts", (req, res) => {
   Workout.create({})
     .then((dbWorkout) => {
       res.json(dbWorkout);
     })
     .catch((err) => {
       res.json(err);
     });
   });


router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((Workout) => {
      console.log("WORKOUTS");
      console.log(Workout);

      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
router.get("/", async (req, res) => {
   try {
     const workout = await Workout.aggregate([
       { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
     ])
     res.status(200).json(workout);
   } catch (error) {
     res.status(500).json(error);
   }
 });



module.exports = router;