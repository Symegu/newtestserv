import {Router} from 'express'
import {getVideosController} from './getVideosController'
// import {createVideoController} from './createVideoController'
// import {findVideoController} from './findVideoController'
// import {deleteVideoController} from './deleteVideoController'
 
export const videosRouter = Router()
 
videosRouter.get('/', getVideosController)
// videosRouter.post('/', createVideoController)
// videosRouter.get('/:id', findVideoController)
// videosRouter.delete('/:id', deleteVideoController)
// ...
 
// не забудьте добавить роут в апп