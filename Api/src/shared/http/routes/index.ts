import Router from 'express';
import productsRouter from '@modules/encomendas/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouters from '@modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouters);

routes.get('/', (req, res) => {
    res.send('Foi');

    //res.json({ msg: 'abc' });
});

export default routes;
