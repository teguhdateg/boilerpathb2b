import express from "express";
import borrower from '../controllers/borrower'
import loan from '../controllers/loan'
import { CheckToken } from '../app/middleware/middleware'
const router = express.Router();

router.post('/borrower/register',borrower.register);
router.post('/borrower/login',borrower.login);
router.post('/borrower/validate',CheckToken,borrower.validate);
router.get('/borrower/profile',CheckToken,borrower.profile);
router.put('/borrower/changeprofile',CheckToken,borrower.changeprofile);
router.put('/borrower/changepassword',CheckToken,borrower.changepass);
router.delete('/borrower/delete/:id',CheckToken,borrower.deleteborrower);
router.delete('/borrower/logout',()=>{});
router.get('/borrower/get/all',CheckToken,borrower.getallborrower);

router.post('/loan/add',CheckToken,loan.addloan);
router.delete('/loan/delete/:id',CheckToken,loan.deleteloan);
router.get('/loan/get/all',CheckToken,loan.getallloan);
router.get('/loan/get/:id',()=>{});
router.put('/loan/update/:id',CheckToken,loan.updateloan);

export default router;


