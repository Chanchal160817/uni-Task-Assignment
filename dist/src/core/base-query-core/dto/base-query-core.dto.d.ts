export declare class BaseQueryCoreDto {
    skip?: number;
    take?: number;
    orderBy?: string[];
    include?: string[];
    search_column?: string[];
    search?: string;
}
export declare class CoreIncludesDto {
    include?: string[];
}
export declare class CorePaginateDto {
    count: number;
    total: number;
    hasMany: boolean;
}
