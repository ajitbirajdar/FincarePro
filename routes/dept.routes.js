const express=require('express');
const router=express.Router();

const deptController =require('../controllers/dept.controllers')

router.get('/',deptController.getAll);
router.get('/search/:id',deptController.searchDept);
router.post('/create',deptController.createDept);

router.post('/update/:id',deptController.updateDept);
router.post('/ActiveDeactive/:id',deptController.ActiveORdeactiveDept);

module.exports=router;