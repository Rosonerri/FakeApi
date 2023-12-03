import {Router} from "express";
import { createUser, signInUser, verifyUser, getOneUser } from "../controller/userController";



const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/sign-in-user").post(signInUser);

router.route("/verify-user").patch(verifyUser);
router.route("/get-one-user/:userId").get(getOneUser)

export default router;