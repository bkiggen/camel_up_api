import { createParamDecorator, ExecutionContext } from '@nextjs/common';
import {User} from './user.entity';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext))