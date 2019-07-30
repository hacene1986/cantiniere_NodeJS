// routes/user.js

const controllers = require('../controllers/user');

user = express.Router();
user.use(cors());
user.use(bodyParser.urlencoded({ extended: true }));
user.use(bodyParser.json());

const jwt = require('../middlewares/jwt-middleware');
user.use(jwt);

lunchtime.use('/user', user);

// http://localhost:8000/lunchtime/login
lunchtime.post('/login', controllers.login);

// http://localhost:8000/lunchtime/register
lunchtime.post('/register', controllers.register);
