import winston from 'winston'
import expressWinston from 'express-winston'

export const logger = expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
});

export const errorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
})