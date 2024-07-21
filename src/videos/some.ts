import {Request, Response} from 'express'

export const AvailableResolutions:string[] = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];

export type ParamType = {
    id: string
}
 
export type CreateInputModel = {
    title: string
    author:	string
    availableResolutions: typeof AvailableResolutions
}
 
export type QueryType = {
    search?: string
}
 
export type OutputType = void /*| OutputErrorsType | OutputVideoType*/


export type ErrorsMessageType = {
    field: string
    message: string
}

export type ErrorsType = {
    errorsMessages: ErrorsMessageType[]
}

export const someController = (
    req: Request<ParamType, OutputType, CreateInputModel, QueryType>,
    res: Response<OutputType>
) => {
 
}