const logger = {
    info: (message, context = {}) => {
        console.log(`[${new Date().toISOString()}] INFO: ${message}`, Object.keys(context).length ? context : '');
    },
    error: (message, error = {}, context = {}) => {
        console.error(`[${new Date().toISOString()}] ERROR: ${message}`, {
            error: error.message || error,
            stack: error.stack,
            ...context
        });
    },
    warn: (message, context = {}) => {
        console.warn(`[${new Date().toISOString()}] WARN: ${message}`, Object.keys(context).length ? context : '');
    },
    debug: (message, context = {}) => {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(`[${new Date().toISOString()}] DEBUG: ${message}`, Object.keys(context).length ? context : '');
        }
    }
};

module.exports = logger;
