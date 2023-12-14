import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCoreService } from 'src/core/user-core/user-core.service';
import { UserLogInDto, UserRegistrationDto } from './dto/user-registration.dto';
import * as bcrypt from 'bcrypt';
import { UserMessages } from 'src/shared/keys/user.keys';
import { JwtService } from '@nestjs/jwt';
import { UserSessionType } from 'src/shared/types/user-session.type';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(private userCoreService: UserCoreService,
    private readonly jwtService: JwtService,
    ) {}


  async registerUser(userRegistrationDto: UserRegistrationDto) {
    const hashedPassword = await hashPassword(userRegistrationDto.password);

    return await this.userCoreService.create({
      data: {
        email: userRegistrationDto.email,
        password: hashedPassword,
        name: userRegistrationDto.name,
      },
    });
  }

  async login(user: UserLogInDto): Promise<{ user: UserLogInDto; access_token: string }> {
    const existingUser = await this.userCoreService.findFirst({
      where: {
        email: user.email,
      },
    });

    if (!existingUser) {
      throw new BadRequestException(UserMessages.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);

    if (!isPasswordValid) {
      throw new BadRequestException(UserMessages.NOT_FOUND);
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

  async getMe(param:{
    sessionData: any;
  }){
    const { sessionData } = param
      console.log(sessionData);
      
    const user = await this.userCoreService.findFirst({
      where:{
        id:sessionData.sub,
        isDeleted:false,
      },
    });

    if(!user) {
      throw new BadRequestException(UserMessages.NOT_FOUND);
    }
    return user
  }

  async joke (){
    const response = await axios.get('https://api.chucknorris.io/jokes/random');    
    return response.data
  }

  async logOut(param:{token: any}){
    const {token} = param
    const tokenBlacklist = new Set()
     const a= tokenBlacklist.add(token)     
      return UserMessages.LOGOUT
  }

  async getMergedProducts(): Promise<any[]> {
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

}
  


async function hashPassword(password: any) {
  try {
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    return bcryptPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}
