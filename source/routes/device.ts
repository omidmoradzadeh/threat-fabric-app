/** source/routes/posts.ts */
import express from 'express';
import deviceController from '../controllers/device';
import dashboardController from '../controllers/dashboard';
const router = express.Router();
router.get('/dashboard', dashboardController.getDashboard);
router.get('/dashboard/Statistic', dashboardController.getStatistic);
router.get('/dashboard/InfectedChart', dashboardController.getInfectedChart);
router.get('/dashboard/RootedChart', dashboardController.getRootedChart);
router.get('/dashboard/AbnormalChart', dashboardController.getAbnormalChart);
router.get('/device', deviceController.getDevices);
router.get('/device/:id', deviceController.getDeviceDetail);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);

export = router;