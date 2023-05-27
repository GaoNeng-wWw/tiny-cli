import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // todo: init database connect
  // router.post('/v1/database/init');

  router.get('/v1/employee/getEmployee', controller.employee.getEmployee);

};