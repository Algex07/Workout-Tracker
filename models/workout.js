const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
                
      },
      name: {
        type: String,
       
      },
      duration: {
        type: Number,
        
      },

      weight: {
        type: Number,
        
      },

      sets: {
        type: Number,
        
      },

      reps: {
        type: Number,
        
      },

      distance: {
        type: Number,
        
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;