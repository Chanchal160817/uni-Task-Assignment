import { BaseQueryCoreDto } from './dto/base-query-core.dto';
export declare class BaseQueryCoreService {
    generatePrismaQuery(query?: BaseQueryCoreDto): any;
    formatIncludeQueryArray(queryArr: any, baseVal?: any): {};
    formatSearchQueryArray(queryArr: any, baseVal: any): {
        OR: any[];
    };
    formatArray(qry: any, baseVal: any): {};
    getOrderByArray(fieldArr: any, sort: any): any;
    getIncludeArray(incArr: any): {
        include: {};
    };
}
