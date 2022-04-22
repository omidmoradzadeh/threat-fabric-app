/** source/routes/posts.ts */
import express from 'express';
import deviceController from '../controllers/devices';
import dashboardController from '../controllers/dashboard';
const router = express.Router();
router.get('/api/dashboard', dashboardController.getDashboard);
router.get('/api/dashboard/Statistic', dashboardController.getStatistic);
router.get('/api/dashboard/InfectedChart', dashboardController.getInfectedChart);
router.get('/api/dashboard/RootedChart', dashboardController.getRootedChart);
router.get('/api/dashboard/AbnormalChart', dashboardController.getAbnormalChart);
router.get('/api/device', deviceController.getDevices);
router.get('/api/deviceDetail/:id', deviceController.getDevicesDetail);

export = router;