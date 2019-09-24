import { Router } from 'express';
import equationRouter from'./equation';

const apiRouter = new Router();

apiRouter.use('/equation', equationRouter);

export default apiRouter;