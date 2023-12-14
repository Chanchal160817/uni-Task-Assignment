"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHelperService = void 0;
const axios_1 = require("axios");
class AxiosHelperService {
    async getTimeZoneFromLocation(lat, lng) {
        try {
            const timestamp = Date.now();
            const response = await axios_1.default.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(timestamp / 1000)}&key=${process.env['GOOGLE_API_KEY']}`);
            if (response.data) {
                if (response.data.timeZoneId) {
                    return response.data.timeZoneId.toLowerCase();
                }
            }
            return null;
        }
        catch (error) {
            console.log('failed:');
            console.log(error);
            return null;
        }
    }
}
exports.AxiosHelperService = AxiosHelperService;
//# sourceMappingURL=axios-service.js.map