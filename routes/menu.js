// aston-express/routes

// Public
// http://localhost:8080/lunchtime/menu
// http://localhost:8080/lunchtime/login
// http://localhost:8080/lunchtime/register

// Private
// http://localhost:8080/lunchtime/user/findall
// http://localhost:8080/lunchtime/order/cancel

const controllers = require('../controllers/menu');

// http://localhost:8000/lunchtime/
lunchtime.get('/menu/findall', controllers.home);
lunchtime.get('/menu/find/:id', controllers.menuId)

// http://localhost:8000/hello
app.get('/hello', controllers.hello);

// Others
require('./user');
