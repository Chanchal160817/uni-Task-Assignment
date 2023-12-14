"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 1400,
    database: {
        url: process.env.DB_URL ||
            'mysql://newProject:admin@123@localhost:3306/newProject',
    },
});
//# sourceMappingURL=configuration.js.map