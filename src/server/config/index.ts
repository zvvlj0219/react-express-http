const isDelopment = process.env.NODE_ENV !== 'production'

export const corsOptions = {
    origin: isDelopment
    ? process.env.CLIENT_ORIGIN_DEVELOPMENT
    : process.env.CLIENT_ORIGIN_PRODUCTION,
    optionsSuccessStatus: 200
}

export const apiRoute = '/api'

export const baseUrl = isDelopment 
    ? process.env.SERVER_BASEURL_DEVELOPMENT
    : process.env.SERVER_BASEURL_PRODUCTION
