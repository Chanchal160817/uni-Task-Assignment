"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_core_service_1 = require("../../../core/user-core/user-core.service");
const bcrypt = require("bcrypt");
const user_keys_1 = require("../../../shared/keys/user.keys");
const jwt_1 = require("@nestjs/jwt");
const axios_1 = require("axios");
let UserService = class UserService {
    constructor(userCoreService, jwtService) {
        this.userCoreService = userCoreService;
        this.jwtService = jwtService;
    }
    async registerUser(userRegistrationDto) {
        const hashedPassword = await hashPassword(userRegistrationDto.password);
        return await this.userCoreService.create({
            data: {
                email: userRegistrationDto.email,
                password: hashedPassword,
                name: userRegistrationDto.name,
            },
        });
    }
    async login(user) {
        const existingUser = await this.userCoreService.findFirst({
            where: {
                email: user.email,
            },
        });
        if (!existingUser) {
            throw new common_1.BadRequestException(user_keys_1.UserMessages.NOT_FOUND);
        }
        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException(user_keys_1.UserMessages.NOT_FOUND);
        }
        const payload = { sub: existingUser.id, email: existingUser.email };
        const access_token = this.jwtService.sign(payload);
        console.log(payload.sub);
        console.log(payload.email);
        return {
            user: existingUser,
            access_token,
        };
    }
    async getMe(param) {
        const { sessionData } = param;
        console.log(sessionData);
        const user = await this.userCoreService.findFirst({
            where: {
                id: sessionData.sub,
                isDeleted: false,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException(user_keys_1.UserMessages.NOT_FOUND);
        }
        return user;
    }
    async joke() {
        const response = await axios_1.default.get('https://api.chucknorris.io/jokes/random');
        return response.data;
    }
    async logOut(param) {
        const { token } = param;
        const tokenBlacklist = new Set();
        const a = tokenBlacklist.add(token);
        return user_keys_1.UserMessages.LOGOUT;
    }
    async getMergedProducts() {
        const productsArray = [
            { id: 1, sku: 'abc', productName: 'name 1', category: 1 },
            { id: 2, sku: 'def', productName: 'name 2', category: 2 },
            { id: 3, sku: 'ghi', productName: 'name 1', category: 2 },
            { id: 4, sku: 'klm', productName: 'name 1', category: 3 },
            { id: 5, sku: 'xyz', productName: 'name 1', category: 1 },
        ];
        const pricingArray = [
            { sku: 'abc', price: 10 },
            { sku: 'def', price: 20 },
            { sku: 'ghi', price: 30 },
            { sku: 'klm', price: 40 },
            { sku: 'xyz', price: 50 },
        ];
        const categoriesArray = [
            { id: 1, name: 'category 1' },
            { id: 2, name: 'category 2' },
            { id: 3, name: 'category 3' },
            { id: 4, name: 'category 4' },
            { id: 5, name: 'category 5' },
        ];
        const categoryMap = new Map(categoriesArray.map(category => [category.id, category.name]));
        const pricingMap = new Map(pricingArray.map(item => [item.sku, item.price]));
        const mergedProducts = productsArray.map(product => {
            const { id, sku, productName, category } = product;
            return {
                id,
                sku,
                productName,
                category,
                price: pricingMap.get(sku) || 0,
            };
        });
        return mergedProducts;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_core_service_1.UserCoreService,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);
        return bcryptPassword;
    }
    catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}
//# sourceMappingURL=user.service.js.map