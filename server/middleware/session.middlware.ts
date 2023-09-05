import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../../src/utils/jwt_token';
import { RequestExt } from '../interface/req.interface';

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
   try {
      const jwtByUser = req.headers.authorization || '';
      const jwt = jwtByUser.split(' ').pop();
      if (!jwt) {
         res.status(401).send({ message: 'Unauthorized Access' });
      }

      const isUser = verifyToken(`${jwt}`);
      if (!isUser) {
         res.status(401).send({ message: 'Unauthorized Access' });
      } else {
         req.user = isUser;
         next();
      }
   } catch (e) {
      res.status(401).send({ message: 'Unauthorized Access' });
   }
};

export { checkJwt };