import {Router} from 'express';
import {deletePost, getPosts, createPost} from "../controllers/post.controller.js";

const router = Router();

router.route('/create').post(createPost);
router.route('/getPosts').post(getPosts);
router.route('/deletePost/:id').post(deletePost);

export default router;