import { BaseQueryCoreDto, CoreIncludesDto } from 'src/core/base-query-core/dto/base-query-core.dto';
declare type ErrorMessageType = 'NOT_FOUND' | 'DELETED';
export declare type ServiceErrorMessage = {
    [key in ErrorMessageType]: string;
};
export declare abstract class PrismaBaseRepository<ModelEntity, ModelPaginate, CreateArgs, UpdateArgs extends {
    where: Record<string, any>;
}, UpdateManyArgs extends {
    where?: Record<string, any>;
}, FindUniqueArgs extends {
    where: Record<string, any>;
}, FindFirstArgs extends {
    where?: Record<string, any>;
}, FindManyArgs extends {
    where?: Record<string, any>;
    skip?: number;
    take?: number;
}, DeleteArgs extends {
    where: Record<string, any>;
}, DeleteManyArgs extends {
    where?: Record<string, any>;
}, CountArgs extends {
    where?: Record<string, any>;
}> {
    private readonly repo;
    errorMessage: ServiceErrorMessage;
    baseQueryCoreService: any;
    constructor(repo: any, errorMessage: ServiceErrorMessage, baseQueryCoreService?: any);
    findPaginate(query: BaseQueryCoreDto, baseWhere?: {}): Promise<ModelPaginate | any>;
    checkId(params: {
        where: any;
    }): Promise<ModelEntity>;
    create(params: CreateArgs): Promise<ModelEntity>;
    getCount(params: CountArgs): Promise<any>;
    update(params: UpdateArgs): Promise<ModelEntity>;
    updateMany(params: UpdateManyArgs): Promise<void>;
    findUnique(params: FindUniqueArgs): Promise<ModelEntity>;
    findFirst(params: FindFirstArgs): Promise<ModelEntity>;
    findMany(params: FindManyArgs): Promise<ModelEntity[]>;
    deleteMany(params: DeleteManyArgs): Promise<void>;
    delete(params: DeleteArgs): Promise<ModelEntity>;
    findUniqueIncludes(params: FindUniqueArgs, query: CoreIncludesDto): Promise<ModelEntity>;
}
export {};
