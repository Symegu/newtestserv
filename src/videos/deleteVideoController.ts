import {Request, Response} from 'express'
import {db} from '../db/db'
import { ErrorsType } from './some'
 
export const deleteVideoController = (req: Request, res: Response<any /*OutputVideoType[]*/>) => {
  const {id} = req.params

  const video = db.videos.filter(item => item.id !== +id)

  console.log(video)
  if (!video) {

    res.sendStatus(404)
    return
  }

  db.videos.push(video)
  res.status(200).send(video)
}