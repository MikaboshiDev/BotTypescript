import { Router, Request, Response, NextFunction } from 'express';
import { logWithLabel } from './console';
const router = Router();
import fs from 'fs';

fs.readdirSync('./server/routes').filter((file) => {
   const filterTS = file.endsWith('.routes.ts');
   if (filterTS) {
      import(`../../server/routes/${file}`).then((modules) => {
         router.use(modules.router);
         logWithLabel('express', `Loading route Api. . . ${file}`);
      });
   }
});

export { router }


