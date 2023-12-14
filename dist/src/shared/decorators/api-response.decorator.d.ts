export declare function CustomApiResponse(params: {
    description: string;
    type: any;
    isCreated?: boolean;
    isBadRequest?: boolean;
    isAuthorization?: boolean;
}): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
