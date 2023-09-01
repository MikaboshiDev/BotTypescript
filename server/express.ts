import { logWithLabel } from '../src/utils/console';
import { router } from '../src/utils/request';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';

export class ExpressServer {
   app: any;
   constructor() {
      this.app = express();
      this.app.use(morgan('dev'));
      this.app.use(cookieParser());
   }

   private setMiddleware() {
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());
      this.app.use(router);
   }

   public start(port: number) {
      this.setMiddleware();
      this.app.listen(port, () => {
         logWithLabel('express', `Express server started on port ${port}`);
      });
   }
}
