const {createLogger,transports,format}=require('winston')

const logger =createLogger({
    transports:[
        new transports.File({
            level:"info",
            filename:'organization-info.log',
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            level:"error",
            filename:'organization-error.log',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
})

module.exports={
    logger
}