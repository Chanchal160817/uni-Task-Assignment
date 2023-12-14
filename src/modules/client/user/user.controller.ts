import { Controller, Post } from '@nestjs/common';
import { Body, Get, Req, UseGuards} from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserLogInDto, UserRegistrationDto } from './dto/user-registration.dto';
import { AtGuard } from '../auth/guard/jwt-auth.guard';
import { GetUserSession } from 'src/shared/decorators/get-user-session.decorator';
import { UserSessionType } from 'src/shared/types/user-session.type';
import { AtStrategy } from '../auth/startegies/jwt.staartegy';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('User')
@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  async registerUser(@Body() userRegistrationDto: UserRegistrationDto) {
    return await this.userService.registerUser(userRegistrationDto);
  }
  @Post('login')
  @ApiOperation({ summary: 'Login User' })
  async loginUser(@Body() user: UserLogInDto) {
    return await this.userService.login(user);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('user/me')
  @ApiOperation({ summary: 'Get login user' })
  async User(@GetUserSession() sessionData: any,
  ) {    
    console.log(sessionData);
    
    return await this.userService.getMe({sessionData});
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('random-joke')
  @ApiOperation({ summary: 'Get login user' })
  async Joke() {        
    return await this.userService.joke();
  }
  @ApiBearerAuth()
  @UseGuards(AtGuard)
  @Get('logOut')
  @ApiOperation({ summary: 'User Logout' })
  async logout(@Req() request: any) {     
    const authHeader = request.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : null;   
    return await this.userService.logOut({token});
  }

  @Get('data')
  @ApiOperation({ summary: 'Test 2 result' })
  async data() {     
    return await this.userService.getMergedProducts();
  }

}
