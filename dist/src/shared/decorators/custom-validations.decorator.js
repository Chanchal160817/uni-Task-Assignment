"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPastDateTime = exports.IsGreaterThanDateTime = exports.IsFutureDateTime = exports.ValidateCountryCode = exports.ValidatePhone = exports.ValidateDateTime = void 0;
const class_validator_1 = require("class-validator");
const luxon_1 = require("luxon");
const keys_1 = require("../../keys");
function ValidateDateTime(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'validateDateTime',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [property] = args.constraints;
                    let isValid = true;
                    if (value) {
                        isValid = false;
                        const format = (property === null || property === void 0 ? void 0 : property.format)
                            ? property === null || property === void 0 ? void 0 : property.format
                            : keys_1.DATE_SETTINGS.DATE_TIME_FORMAT;
                        const tmpVal = luxon_1.DateTime.fromFormat(value, format);
                        isValid = tmpVal.isValid;
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.ValidateDateTime = ValidateDateTime;
function ValidatePhone(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'ValidatePhone',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    let isValid = true;
                    if (value) {
                        if (value.length <= 10) {
                            const pattern = /^\d{10}$/;
                            isValid = pattern.test(value);
                        }
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.ValidatePhone = ValidatePhone;
function ValidateCountryCode(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'ValidateCountryCode',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    let isValid = true;
                    if (value !== '') {
                        const pattern = /^(\+?\d{1,3}|\d{1,4})$/;
                        isValid = pattern.test(value);
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.ValidateCountryCode = ValidateCountryCode;
function IsFutureDateTime(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isFutureDateTime',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [property] = args.constraints;
                    let isValid = true;
                    if (value) {
                        isValid = false;
                        const format = (property === null || property === void 0 ? void 0 : property.format)
                            ? property === null || property === void 0 ? void 0 : property.format
                            : keys_1.DATE_SETTINGS.DATE_TIME_FORMAT;
                        const tmpVal = luxon_1.DateTime.fromFormat(value, format);
                        const nowVal = luxon_1.DateTime.fromFormat(luxon_1.DateTime.utc().toFormat(format), format);
                        if (tmpVal.isValid) {
                            isValid = tmpVal.toMillis() >= nowVal.toMillis();
                        }
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.IsFutureDateTime = IsFutureDateTime;
function IsGreaterThanDateTime(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isGreaterThanDateTime',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [property] = args.constraints;
                    let isValid = true;
                    if (value) {
                        isValid = false;
                        const format = (property === null || property === void 0 ? void 0 : property.format)
                            ? property === null || property === void 0 ? void 0 : property.format
                            : keys_1.DATE_SETTINGS.DATE_TIME_FORMAT;
                        const relatedValue = args.object[property.field];
                        if (relatedValue) {
                            const tmpVal1 = luxon_1.DateTime.fromFormat(value, format);
                            const tmpVal2 = luxon_1.DateTime.fromFormat(relatedValue, format);
                            if (tmpVal1.isValid && tmpVal2.isValid) {
                                isValid = tmpVal1.toMillis() >= tmpVal2.toMillis();
                            }
                        }
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.IsGreaterThanDateTime = IsGreaterThanDateTime;
function IsPastDateTime(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isPastDateTime',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [property] = args.constraints;
                    let isValid = true;
                    if (value) {
                        isValid = false;
                        const format = (property === null || property === void 0 ? void 0 : property.format)
                            ? property === null || property === void 0 ? void 0 : property.format
                            : keys_1.DATE_SETTINGS.DATE_TIME_FORMAT;
                        const tmpVal = luxon_1.DateTime.fromFormat(value, format);
                        const nowVal = luxon_1.DateTime.fromFormat(luxon_1.DateTime.utc().toFormat(format), format);
                        if (tmpVal.isValid) {
                            isValid = tmpVal.toMillis() <= nowVal.toMillis();
                        }
                    }
                    return isValid;
                },
                defaultMessage(args) {
                    return keys_1.DATE_SETTINGS.INVALID_DATE_TIME;
                },
            },
        });
    };
}
exports.IsPastDateTime = IsPastDateTime;
//# sourceMappingURL=custom-validations.decorator.js.map