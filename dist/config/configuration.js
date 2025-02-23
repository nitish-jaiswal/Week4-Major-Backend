"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(`${process.env.PORT}.env`, 10) || 3000,
    database: {
        uri: `${process.env.MONGODB_URI}` || 'mongodb://localhost:27017/task-manager',
    },
    jwt: {
        secret: `${process.env.JWT_SECRET}` || 'your-secret-key',
        expiresIn: '1d',
    },
});
//# sourceMappingURL=configuration.js.map