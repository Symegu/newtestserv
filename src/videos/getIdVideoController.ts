import {Request, Response} from 'express'
import {db} from '../db/db'

export const getIdVideoController = (req: Request, res: Response<any /*OutputVideoType[]*/>) => { 
  const {id} = req.params

  const video = db.videos.find(item => item.id === +id)

  console.log(video)
  if (!video) {

    res.sendStatus(404)
    return
  }

  res.status(200).send(video)
}