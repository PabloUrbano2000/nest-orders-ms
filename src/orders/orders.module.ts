import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: PRODUCTS_SERVICE,
    //     // transport: Transport.TCP,
    //     transport: Transport.NATS,
    //     options: {
    //       // host: envs.productsMicroserviceHost,
    //       // port: envs.productsMicroservicePort,
    //     },
    //   },
    // ]),
    NatsModule,
  ],
})
export class OrdersModule {}
