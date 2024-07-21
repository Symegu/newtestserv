import {Request, Response} from 'express'
import {db} from '../db/db'
import { ErrorsType } from './some'
import { AvailableResolutions } from './some'
 
export const createVideoController = (req: Request, res: Response<any /*OutputVideoType[]*/>) => {
    const errors:ErrorsType = {
        errorsMessages: []
    }

    let {title, author, availableResolutions} = req.body
    
    if (title.trim().length > 40 || !title || title.typeof !== 'string' || !title.trim()) {
        errors.errorsMessages.push(
            {message: 'incorrect title', field: 'title'}
        )
    }
    if (author.trim().length > 20 || !author || author.typeof !== 'string' || !author.trim()) {
        errors.errorsMessages.push(
            {message: 'incorrect author', field: 'author'}
        )
    }
    if (availableResolutions && availableResolutions instanceof Array) {
        availableResolutions.forEach((resolution) => {
            !AvailableResolutions.includes(resolution) &&
            errors.errorsMessages.push(
                {
                    message: 'Incorrect availableResolutions!',
                    field: 'availableResolutions'
                });
        })
    } else {
        availableResolutions = [];

    }

    if (errors.errorsMessages.length) {
        return res.status(400).send(errors)
        
    }

    const createdAt = new Date();
    const publicationDate = new Date(createdAt);
    const newVideo = {
        id: +(new Date()),
        title,
        author,
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: createdAt.toISOString,
        publicationDate: publicationDate.toISOString,
        availableResolutions
    }

    db.videos.push(newVideo)
    return res.status(201).send(newVideo)

    
}