import {Router} from 'express'
import {getVideosController} from './getVideosController'
import {createVideoController} from './createVideoController'
import {getIdVideoController} from './getIdVideoController'
import {deleteVideoController} from './deleteVideoController'
import {deleteAllData} from './deleteAllData'
 
export const videosRouter = Router()
 
videosRouter.get('/', getVideosController)
videosRouter.post('/', createVideoController)
videosRouter.get('/:id', getIdVideoController)
videosRouter.delete('/:id', deleteVideoController)
videosRouter.delete('/testing/all-data', deleteAllData)
 
// не забудьте добавить роут в апп
