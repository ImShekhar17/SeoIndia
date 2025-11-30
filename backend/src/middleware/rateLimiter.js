const rateLimit = require('express-rate-limit');

// Simple limiter for general API access
exports.apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        success: false,
        error: "Too many requests from this IP, please try again after 15 minutes",
        status: 429
    }
});

// Stricter limiter for authentication (prevent brute force)
exports.authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 login/signup attempts per hour
    message: {
        success: false,
        error: "Too many authentication attempts, please try again later",
        status: 429
    }
});

// Limiter for heavy audit requests
exports.auditLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // Limit each IP to 5 audit requests per hour to prevent server overload
    message: {
        success: false,
        error: "Audit limit reached for this hour. Please wait or upgrade to premium.",
        status: 429
    }
});
