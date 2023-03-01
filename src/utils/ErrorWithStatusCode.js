const ERRORS = {
    notFound: 'Not Found',
    forbidden: 'Forbidden',
    unauthorized: 'Unauthorized',
    badRequest: 'Bad Request'
}

export class ErrorWithStatusCode extends Error {
    statusCode
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

export function notFound(message) {
    return new ErrorWithStatusCode(`${message} ${ERRORS.notFound}`, 404)
}

export function forbidden() {
    return new ErrorWithStatusCode(ERRORS.forbidden, 403)
}

export function unauthorized() {
    return new ErrorWithStatusCode(ERRORS.unauthorized, 401)
}

export function badRequest(message) {
    return new ErrorWithStatusCode(`${ERRORS.badRequest}: ${message}`, 400)
}