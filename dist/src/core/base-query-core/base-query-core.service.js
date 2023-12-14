"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQueryCoreService = void 0;
const common_1 = require("@nestjs/common");
const _ = require("lodash");
let BaseQueryCoreService = class BaseQueryCoreService {
    generatePrismaQuery(query = {}) {
        var _a, _b, _c, _d;
        const tempQuery = Object.assign({}, query);
        if (typeof (tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.orderBy) === 'string') {
            tempQuery.orderBy = [tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.orderBy];
        }
        if (typeof (tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.include) === 'string') {
            tempQuery.include = [tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.include];
        }
        if (typeof (tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search_column) === 'string') {
            tempQuery.search_column = [tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search_column];
        }
        if (((_a = tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.orderBy) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const orderBy = {};
            tempQuery.orderBy.forEach((ob) => {
                let sortField = ob.split('|')[0];
                sortField = sortField.split('.');
                if (sortField.length > 1) {
                    orderBy[sortField[0]] = this.getOrderByArray(sortField, ob.split('|')[1]);
                }
                else {
                    orderBy[sortField[0]] = ob.split('|')[1];
                }
            });
            tempQuery.orderBy = orderBy;
        }
        if (((_b = tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.include) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            const formattedQry = this.formatIncludeQueryArray(tempQuery.include.sort());
            const { include } = this.getIncludeArray(formattedQry);
            tempQuery.include = include;
        }
        if (((_c = tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search_column) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((_d = tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search) === null || _d === void 0 ? void 0 : _d.length) > 0) {
            const formattedSearchQry = this.formatSearchQueryArray(tempQuery.search_column.sort(), { contains: tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search });
            tempQuery['where'] = formattedSearchQry;
        }
        tempQuery === null || tempQuery === void 0 ? true : delete tempQuery.search_column;
        tempQuery === null || tempQuery === void 0 ? true : delete tempQuery.search;
        return tempQuery;
    }
    formatIncludeQueryArray(queryArr, baseVal = true) {
        let returnObj = {};
        queryArr.map((qry, i) => {
            const rslt = this.formatArray(qry, baseVal);
            if (i > 0) {
                returnObj = _.merge(returnObj, rslt);
            }
            else {
                returnObj = rslt;
            }
        });
        return returnObj;
    }
    formatSearchQueryArray(queryArr, baseVal) {
        const returnObj = [];
        queryArr.map((qry, i) => {
            returnObj[i] = this.formatArray(qry, baseVal);
        });
        return { OR: returnObj };
    }
    formatArray(qry, baseVal) {
        const returnObj = {};
        const qArr = qry.split('.');
        if (qArr.length > 1) {
            const ky = qArr[0];
            qArr.shift();
            if (typeof returnObj[ky] === 'undefined') {
                returnObj[ky] = this.formatArray(qArr.join('.'), baseVal);
            }
            else {
                returnObj[ky] = Object.assign(Object.assign({}, returnObj[ky]), this.formatArray(qArr.join('.'), baseVal));
            }
        }
        else {
            returnObj[qArr[0]] = baseVal;
        }
        return returnObj;
    }
    getOrderByArray(fieldArr, sort) {
        fieldArr.shift();
        const incO = {};
        incO[fieldArr[0]] =
            fieldArr.length > 1 ? this.getOrderByArray(fieldArr, sort) : sort;
        return incO;
    }
    getIncludeArray(incArr) {
        const include = {};
        for (const key in incArr) {
            if (incArr.hasOwnProperty(key)) {
                if (incArr[key] === true) {
                    include[key] = true;
                }
                else {
                    include[key] = this.getIncludeArray(incArr[key]);
                }
            }
        }
        return { include };
    }
};
BaseQueryCoreService = __decorate([
    (0, common_1.Injectable)()
], BaseQueryCoreService);
exports.BaseQueryCoreService = BaseQueryCoreService;
//# sourceMappingURL=base-query-core.service.js.map