import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { FilterQuery, Model, UpdateQuery } from 'mongoose';
  import { ProviderDto } from 'src/dto/provider.dto';
  import { Provider } from 'src/entities/provider.entity';
  import { TEXT_TO_VALIDATE_MONGO_DUPLICATES } from 'src/utils/constants';
  import { generalMessages, providerMessages } from 'src/utils/friendlyMessage';

  import { util } from 'src/utils/util';

  @Injectable()
  export class ProviderService {
    constructor(
      @InjectModel(Provider.name)
      private providerModel: Model<Provider>,
    ) {}

    ping() {
      return '*********Provider Service Works*************';
    }

    // async create(provider: ProviderDto) {
    //   try {
    //     const providerDocument = {
    //       ...provider,
    //       providerId: util.getShortId(),
    //     };
    //     console.log("***provider***");
    //     console.log(providerDocument);
    //     return await new this.providerModel(providerDocument).save();
    //   } catch (error) {
    //     const hasDuplicateKeyText = (error.message || '')
    //       .toString()
    //       .includes(TEXT_TO_VALIDATE_MONGO_DUPLICATES);
    //     if (hasDuplicateKeyText)
    //       throw new ConflictException(providerMessages.duplicate);
    //     throw new InternalServerErrorException(providerMessages.saveError);
    //   }
    // }

    async create(provider: ProviderDto) {
      try {
        const providerDocument = {
          ...provider,
          providerId: util.getShortId(),
        };
        console.log(providerDocument);
        return await new this.providerModel(providerDocument).save();
      } catch (error) {
        const hasDuplicateKeyText = (error.message || '')
          .toString()
          .includes(TEXT_TO_VALIDATE_MONGO_DUPLICATES);
        if (hasDuplicateKeyText)
          throw new ConflictException(providerMessages.duplicate);
        throw new InternalServerErrorException(providerMessages.saveError);
      }
    }


    async getProviders(type = '') {
      let filter: FilterQuery<Provider>;
      if (type !== '') filter = { type };
      const providers = await this.providerModel
        .find(filter)
        .sort({ name: 1 })
        .catch((error) => {
          throw new InternalServerErrorException(
            generalMessages.findMongoDocuments,
            error.message,
          );
        })
        .then((data) => data);
      return providers;
    }

    async getProviderById(providerId: string) {
      const filter: FilterQuery<Provider> = { providerId };
      const savedProvider = await this.providerModel.findOne(filter).exec();
      if (!savedProvider) throw new NotFoundException(generalMessages.notFoundItem);
      return savedProvider;
    }

    async update(providerId: string, provider: ProviderDto) {
      const savedProvider = await this.getProviderById(providerId);
      return this.providerModel.findByIdAndUpdate(savedProvider._id, provider, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });
    }

    async delete(providerId: string) {
      const savedProvider = await this.getProviderById(providerId);
      return this.providerModel.findByIdAndRemove(savedProvider._id);
    }
  }
