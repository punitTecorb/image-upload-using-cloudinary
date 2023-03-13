import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { CREATED, OK } = StatusCodes;
import { success } from '@constants';

import userAuthController from '@controllers/user';
import upload from '@utils/multer'



// Constants
const router = Router();

// Paths
export const p = {
    signUp: '/sign-up',
    login: '/login'
  
} as const;

/**
 * User SignUp
 */
 router.post(p.signUp,upload.single('image'), async (req: any, res: Response) => {
    const data = await userAuthController.signUp(req.body ,req.file);
    return res.status(CREATED).send({ data, code: CREATED, message: success.en.signupSuccessful });
});

/**
 * User Login
 */
router.post(p.login,  async (req: Request, res: Response) => {
    const data = await userAuthController.login(req.body, req.headers);
    return res.status(OK).send({ data, code: OK, message: success.en.loginSuccessful });
});




// Export default
export default router;
