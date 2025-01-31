// /models/projectModel.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    githubLink: {
      type: String,
      required: [true, 'GitHub link is required'],
    },
    demoLink: {
      type: String,
      required: false,
    },
    technologies: {
      type: [String],
      required: [true, 'Technologies are required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
