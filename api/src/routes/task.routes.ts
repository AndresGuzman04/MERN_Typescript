import {Router} from 'express'
const router = Router();

//import all controllers
import * as taskCtrl from './tareas.controllers'

router.get('/tasks', taskCtrl.getTasks);
router.get('/tasks/:id', taskCtrl.getTask);
router.post('/tasks', taskCtrl.createTask);
router.put('/tasks/:id', taskCtrl.updateTask);
router.delete('/tasks/:id', taskCtrl.deleteTask);


export default router