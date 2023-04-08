import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { FilterQuery, Model, UpdateQuery } from 'mongoose';
  import { UserDto } from 'src/dto/user.dto';
  import { User } from 'src/entities/user.entity';
  import { TEXT_TO_VALIDATE_MONGO_DUPLICATES } from 'src/utils/constants';
  import { generalMessages, userMessages } from 'src/utils/friendlyMessage';

  import { util } from 'src/utils/util';

  @Injectable()
  export class UserService {
    constructor(
      @InjectModel(User.name)
      private userModel: Model<User>,
    ) {}

    ping() {
      return '*********User Service Works*************';
    }

    async create(user: UserDto) {
      try {
        const userDocument = {
          ...user,
          aloId: util.getShortId(),
        };
        console.log(userDocument);
        return await new this.userModel(userDocument).save();
      } catch (error) {
        const hasDuplicateKeyText = (error.message || '')
          .toString()
          .includes(TEXT_TO_VALIDATE_MONGO_DUPLICATES);
        if (hasDuplicateKeyText)
          throw new ConflictException(userMessages.duplicate);
        throw new InternalServerErrorException(userMessages.saveError);
      }
    }

    async getUsers(type = '') {
      let filter: FilterQuery<User>;
      if (type !== '') filter = { type };
      const users = await this.userModel
        .find(filter)
        .sort({ name: 1 })
        .catch((error) => {
          throw new InternalServerErrorException(
            generalMessages.findMongoDocuments,
            error.message,
          );
        })
        .then((data) => data);
      return users;
    }

    async getUserById(aloId: string) {
      const filter: FilterQuery<User> = { aloId };
      const savedUser = await this.userModel.findOne(filter).exec();
      if (!savedUser) throw new NotFoundException(generalMessages.notFoundItem);
      return savedUser;
    }

    async update(aloId: string, user: UserDto) {
      const savedUser = await this.getUserById(aloId);
      return this.userModel.findByIdAndUpdate(savedUser._id, user, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    }

    async delete(aloId: string) {
      const savedUser = await this.getUserById(aloId);
      return this.userModel.findByIdAndRemove(savedUser._id);
    }
  }
