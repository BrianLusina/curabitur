/**
 * Winston Logger Module
 * Will configure app-wide logging of the application
 */

import { transports, createLogger, format } from 'winston';
import path from 'path';

const { combine, timestamp, label, prettyPrint, /*colorize*/ } = format;

const logger = createLogger({
    format: combine(
        // colorize(),
        label({ label: 'CS API' }),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        prettyPrint()
    ),
    transports: [
        new (transports.Console)(),
        new (transports.File)({
           filename: path.resolve(__dirname, "logs/debug.log"),
           level: "debug",
        }),
        new (transports.File)({
            filename: path.resolve(__dirname, 'logs/info.log'),
            level: 'info'
        }),
        new (transports.File)({
            filename: path.resolve(__dirname, 'logs/error.log'),
            level: 'error'
        }),
        new (transports.File)({
            filename: path.resolve(__dirname, 'logs/warn.log'),
            level: 'warn'
        })
    ],
    exceptionHandlers: [
        new (transports.File)({
            filename: path.resolve(__dirname, "logs/exceptions.log")
        })
    ],
    exitOnError: false
});

export default logger;