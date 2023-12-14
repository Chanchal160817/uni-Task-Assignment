import { ValidationOptions } from 'class-validator';
export declare function ValidateDateTime(property?: {
    format?: string;
}, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function ValidatePhone(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function ValidateCountryCode(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsFutureDateTime(property?: {
    format?: string;
}, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsGreaterThanDateTime(property?: {
    field: string;
    format?: string;
}, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsPastDateTime(property?: {
    format?: string;
}, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
