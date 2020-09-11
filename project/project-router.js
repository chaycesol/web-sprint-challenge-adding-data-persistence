const express = require('express');

// connection to database database
const Projects = require('./project-model.js');
// use Router
const router = express.Router();


/* GET REQUESTS */

// Get list of all Projects
router.get('/', (req, res) => {
   Projects.getProjects()
   .then(projects => {
       res.json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve projects' ,error: err.message })
    })
})

//Get Specific Project by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.findProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find a project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

// Get list of all Resources
router.get('/0/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources)
     })
     .catch(err => {
         res.status(500).json({message: 'Failed to retrieve resources' ,error: err.message })
     })
 })

 // Get list of all Tasks
 router.get('/0/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.json(tasks)
     })
     .catch(err => {
         res.status(500).json({message: 'Failed to retrieve resources' ,error: err.message })
     })
 })

//Get list of all tasks for a project
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for this project' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps', error: err.message });
    });
  });


/* POST REQUESTS */
// adds new project
router.post('/', (req, res) => {
    const projData = req.body;
  
    Projects.addProject(projData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project', error: err.message });
    });
  });

  // adds new resource
router.post('/0/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource', error: err.message });
    });
  });
  
  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Projects.findProjectById(id)
    .then(project => {
      if (project) {
        Projects.addTask(taskData, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find project with that id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task', error: err.message });
    });
  });


/* PUT REQUESTS */
//update project By ID
router.put('/:id', (req, res) =>{
   
});

/* DELETE REQUESTS */
//delete project By ID
router.delete('/:id', (req,res) => {
   
});
module.exports = router