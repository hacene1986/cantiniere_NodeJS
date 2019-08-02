
const controllers = require('../controllers/order');

// http://localhost:8000/lunchtime/
lunchtime.get('/order/findall', controllers.home);
// lunchtime.get('/plat/find/:id', controllers.platId)
// lunchtime.post('/plat/add', controllers.addPlat)
// lunchtime.put('/plat/update/:id', controllers.update)
// lunchtime.delete('/plat/delete/:id', controllers.delete)