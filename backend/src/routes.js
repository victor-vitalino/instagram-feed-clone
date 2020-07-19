import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';

import PostController from './controllers/PostController';
import LikeController from './controllers/LikeController';

const upload = multer(MulterConfig);
const routes = Router();

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

export default routes;
