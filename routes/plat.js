// aston-express/routes

// Public
// http://localhost:8080/lunchtime/menu
// http://localhost:8080/lunchtime/login
// http://localhost:8080/lunchtime/register

// Private
// http://localhost:8080/lunchtime/user/findall
// http://localhost:8080/lunchtime/order/cancel

const controllers = require('../controllers/plat');

// http://localhost:8000/lunchtime/
lunchtime.get('/plat/findall', controllers.home);
lunchtime.get('/plat/find/:id', controllers.platId)
lunchtime.post('/plat/add', controllers.addPlat)
lunchtime.put('/plat/update/:id', controllers.update)
lunchtime.delete('/plat/delete/:id', controllers.delete)

// http://localhost:8000/hello
app.get('/hello', controllers.hello);

// Others
require('./user');