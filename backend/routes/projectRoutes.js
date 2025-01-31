// /routes/projectRoutes.js
const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');

const router = express.Router();

router.route('/').post(createProject).get(getProjects);

module.exports = router;
