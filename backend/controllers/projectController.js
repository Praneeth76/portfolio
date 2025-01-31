// /controllers/projectController.js
const Project = require('../models/projectModel');
const ErrorResponse = require('../utils/errorResponse');

// Create a new project
exports.createProject = async (req, res, next) => {
  const { title, description, githubLink, demoLink, technologies } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      githubLink,
      demoLink,
      technologies,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      data: newProject,
    });
  } catch (error) {
    next(new ErrorResponse('Failed to create project', 400));
  }
};

// Get all projects
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    next(new ErrorResponse('Failed to get projects', 500));
  }
};
