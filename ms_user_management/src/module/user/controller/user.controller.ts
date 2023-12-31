import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { Public } from 'src/decorator/public.decorator';

@ApiTags('user')
@Controller('user')
@Public()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }


  @Get('/getAllUsers')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/getById/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }
 
  @Get('username/:username')
  findByusername(@Param('username') username: string) {
    return this.userService.findByUsername(username);
  }

  @Put('UpdateUser/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete('/deleteuser/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
