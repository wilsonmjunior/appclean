import { container } from 'tsyringe';

import { IUserService } from '../../app/user/IUserService';
import { UserService } from '../../infra/services/UserService';
import { IPlansService } from '../../app/plans/IPlansService';
import { PlansService } from '../../infra/services/plans/PlansService';

container.registerSingleton<IUserService>(
  'UserService',
  UserService,
)
container.registerSingleton<IPlansService>('PlansService', PlansService);
