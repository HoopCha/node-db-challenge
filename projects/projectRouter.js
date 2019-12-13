const express = require('express');

const Projects = require('./projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
      .then(recs => {
        res.status(200).json(recs)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
  })

  router.get('/:id', (req, res) => {
    const project_id = req.params.id;
    Projects.getProjectResources(project_id)
      .then(recs => {
        res.status(200).json(recs)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects resources' });
      });
  })  

router.post('/', (req, res) => {
const newProject = req.body;
Projects.addProject(newProject)
    .then(info => {
    res.status(201).json(info);
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to create project' });
    });
})

router.get('/resources', (req, res) => {
Projects.getResources()
    .then(recs => {
    res.status(200).json(recs)
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
    });
})

router.post('/resources', (req, res) => {
    const newResource = req.body;
    Projects.addResources(newResource)
      .then(info => {
        res.status(201).json(info)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
  })

router.get('/:id/tasks', (req, res) => {
const project_id = req.params.id;
Projects.getTasks(project_id)
    .then(recs => {
        const tasksMapped = recs.map(project => {
            return {...project, completed: project.completed === 0 ? false : true}
        })
    res.status(200).json(tasksMapped)
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks by that project id' });
    });
})  

router.post('/tasks', (req, res) => {
    const newTask = req.body;
    Projects.addTask(newTask)
      .then(info => {
        res.status(201).json(info);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create task' });
      });
  })

module.exports = router;