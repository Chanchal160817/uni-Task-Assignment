"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSection = exports.MomentCategory = exports.AppclipTicketDollar = exports.COMMON_DEFAULT_DATA = exports.COMMON_ERROR_MESSAGES = exports.DATE_SETTINGS = exports.MAX_FIND_ALL_LIMIT = exports.ADMIN_DATE_FORMAT = exports.ADMIN_TIMEZONE = exports.RESET_DATA_PIN = exports.REQUIRE_LOGIN_OTP = exports.SEND_OTP = exports.DEFAULT_OTP = void 0;
exports.DEFAULT_OTP = '123456';
exports.SEND_OTP = false;
exports.REQUIRE_LOGIN_OTP = false;
exports.RESET_DATA_PIN = '998877';
exports.ADMIN_TIMEZONE = `GMT`;
exports.ADMIN_DATE_FORMAT = `dd-MM-yyyy`;
exports.MAX_FIND_ALL_LIMIT = 50;
exports.DATE_SETTINGS = {
    DEFAULT_TZ: 'america/chicago',
    DEFAULT_START_TIME: '08:00:00',
    DATE_FORMAT: 'yyyy-MM-dd',
    TIME_FORMAT: 'HH:mm:ss',
    DATE_TIME_FORMAT: 'yyyy-MM-dd HH:mm:ss',
    DATE: '2022-12-31',
    TIME: '23:59:59',
    DATE_TIME: '2022-12-31 23:59:59',
    INVALID_DATE: 'Invalid Date',
    INVALID_TIME: 'Invalid Time',
    INVALID_DATE_TIME: 'Invalid Date Time',
    COMPARE_TIME: 'From time can not be grater than to time',
    COMPARE_DATE: 'From date can not be grater than to date',
    FUTURE_DATE: 'Event date must be a future date',
    SHIFT_FUTURE_DATE: 'Shift date time must be a future',
    FUTURE_TIME: 'Event time must be a future time',
    SHIFT_FUTURE_TIME: 'Shift date time must be a future',
    PAST_DATE: 'DOB date must be a past date',
    FUTURE: 'Please enter future date',
    COMPARE_DATE_TIME: 'From date time can not be grater than to date time',
    DATE_TIME_MONTH: 'LLL dd hh:mm a',
    DATE_TIME_: 'hh:mm a',
};
exports.COMMON_ERROR_MESSAGES = {
    NOT_FOUND: 'Not Found',
    INVALID_DATE: 'Invalid Date',
    INVALID_START_DATE: 'Invalid Start Date',
    INVALID_END_DATE: 'Invalid End Date',
    INVALID_OTP_REFERENCE: 'invalid OTP reference.',
    INVALID_COUNTRY_CODE: 'Invalid Country Code.',
    INVALID_PHONE: 'Invalid Phone Number.',
    COUNTRY_CODE_REQUIRED: 'Country Code can not be blank.',
    PHONE_REQUIRED: 'Phone Number can not be blank.',
    EMAIL_REQUIRED: 'Email can not be blank.',
    COUNTRY_CODE_LENGTH: 'Country Code can not be more than 3 digit.',
    PHONE_LENGTH: 'Phone Number can not be more than 10 digit.',
    PASSWORD_PATTERN_ERROR: 'Password must contain at least 1 uppercase letter 1 lowercase letter 1 digit and 1 special character.',
    INVALID_EMAIL: 'Invalid email address.',
    PASSWORD_MATCH_ERROR: 'Password and confirm password does not match.',
    TOKEN_IS_EXPIRED: 'Password reset link is expired. Please try again',
};
exports.COMMON_DEFAULT_DATA = {
    PHONE: '1234567890',
    CODE: '+91',
    PHONECODE: '+1',
    EMAIL: process.env.ENV !== 'PRODUCTION'
        ? 'squaretest0104@gmail.com'
        : 'contact@musicapp.com',
};
var AppclipTicketDollar;
(function (AppclipTicketDollar) {
    AppclipTicketDollar["HUNDERED"] = "100";
    AppclipTicketDollar["TWOHUNDERED"] = "200";
    AppclipTicketDollar["FIVEHUNDERED"] = "500";
    AppclipTicketDollar["FIFTY"] = "50";
    AppclipTicketDollar["TWENTY_NINE"] = "29";
})(AppclipTicketDollar = exports.AppclipTicketDollar || (exports.AppclipTicketDollar = {}));
exports.MomentCategory = {
    categories: [
        'Kids',
        'Sports',
        'Adventure',
        'Mindful',
        'Mini',
        'Grief',
        'Scenery',
        'Romance',
        'Sleep',
        'Calm',
    ],
    mood: [
        'Content',
        'Bored',
        'Angry',
        'Tired',
        'Anxious',
        'Grieving',
        'Sad',
        'Stressed',
    ],
    age: ['Adult', 'Big Kid', 'Little Kid'],
};
exports.AppSection = {
    AppSection: ['New Podcast', 'Audio Section', 'Artist'],
};
//# sourceMappingURL=keys.js.map