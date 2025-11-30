const { z } = require('zod');

const signupSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    })
});

const loginSchema = z.object({
    body: z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required"),
    })
});

const auditSchema = z.object({
    body: z.object({
        url: z.string().url("Invalid URL format").or(z.string().min(3, "URL is too short")),
    })
});

module.exports = {
    signupSchema,
    loginSchema,
    auditSchema
};
