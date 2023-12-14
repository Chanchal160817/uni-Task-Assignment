"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBaseRepository = void 0;
const common_1 = require("@nestjs/common");
const base_query_core_service_1 = require("../../core/base-query-core/base-query-core.service");
class PrismaBaseRepository {
    constructor(repo, errorMessage, baseQueryCoreService = new base_query_core_service_1.BaseQueryCoreService()) {
        this.repo = repo;
        this.errorMessage = errorMessage;
        this.baseQueryCoreService = baseQueryCoreService;
    }
    async findPaginate(query, baseWhere = {}) {
        const updatedQuery = this.baseQueryCoreService.generatePrismaQuery(query);
        const { skip = 0, take = 10, where = {} } = updatedQuery, rest = __rest(updatedQuery, ["skip", "take", "where"]);
        let list = await this.repo.findMany(Object.assign({ skip, take: take + 1, where: Object.assign(Object.assign({}, where), baseWhere) }, rest));
        const total = await this.repo.count({
            where: Object.assign(Object.assign({}, where), baseWhere),
        });
        let hasMany = false;
        if (list.length > take) {
            hasMany = true;
            list = list.slice(0, -1);
        }
        return {
            total,
            list,
            hasMany,
            count: list.length,
        };
    }
    checkId(params) {
        return this.repo.findUnique({ where: params.where }).catch(() => {
            throw new common_1.NotFoundException(this.errorMessage.NOT_FOUND);
        });
    }
    create(params) {
        return this.repo.create(params);
    }
    async getCount(params) {
        return this.repo.count(params);
    }
    async update(params) {
        await this.checkId({ where: params.where });
        return this.repo.update(params);
    }
    updateMany(params) {
        return this.repo.updateMany(params);
    }
    async findUnique(params) {
        const returnData = await this.repo.findUnique(params).catch(() => {
            throw new common_1.NotFoundException(this.errorMessage.NOT_FOUND);
        });
        if (returnData === null || returnData === void 0 ? void 0 : returnData.isDeleted) {
            throw new common_1.NotFoundException(this.errorMessage.DELETED);
        }
        return returnData;
    }
    findFirst(params) {
        return this.repo.findFirst(params).catch(() => {
            throw new common_1.NotFoundException(this.errorMessage.NOT_FOUND);
        });
    }
    findMany(params) {
        return this.repo.findMany(params);
    }
    deleteMany(params) {
        return this.repo.deleteMany(params);
    }
    async delete(params) {
        await this.checkId({ where: params.where });
        return this.repo.delete(params);
    }
    async findUniqueIncludes(params, query) {
        const updatedQuery = this.baseQueryCoreService.generatePrismaQuery(query);
        const returnData = await this.repo
            .findUnique(Object.assign(Object.assign({}, params), updatedQuery))
            .catch(() => {
            throw new common_1.NotFoundException(this.errorMessage.NOT_FOUND);
        });
        if (returnData === null || returnData === void 0 ? void 0 : returnData.isDeleted) {
            throw new common_1.NotFoundException(this.errorMessage.DELETED);
        }
        return returnData;
    }
}
exports.PrismaBaseRepository = PrismaBaseRepository;
//# sourceMappingURL=prisma-base.repository.js.map