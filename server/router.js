const { Router } = require('express')
const UserController = require('./controllers/user.controller')
const TaskController = require('./controllers/task.controller');
const { checkUser } = require('./middlewares/user.mv');
const { checkTask } = require('./middlewares/task.mv');
const router = Router()


// router.get('/test', ()=>{})

//users
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.patch('/users/:idUser', UserController.updateUser);
router.patch('/users/instance/:idUser', UserController.updateUserInstance);
router.delete('/users/:idUser', UserController.deleteUser);


// router.post('/users/:idUser/tasks', TaskController.createTask)
router.post('/users/:idUser/tasks', checkUser, TaskController.createTask);
router.get('/users/:idUser/tasks', checkUser, TaskController.getUserTasks);
// router.patch(
//   '/users/:idUser/tasks/:idTask',
//   checkUser,
//   TaskController.updateTask
// );
router.delete(
  '/users/:idUser/tasks/:idTask',
  checkUser,
  TaskController.deleteUserTask
);
// router.get(
//   '/users/:idUser/tasks/:idTask',
//   checkUser,
//   checkTask,
//   UserController.deleteUserTask
// );
module.exports = router