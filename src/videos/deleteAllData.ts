import {Request, Response} from 'express'
 
export const deleteAllData = (req: Request, res: Response<any /*OutputVideoType[]*/>) => {
  // db.videos = []
  res.sendStatus(204)
}