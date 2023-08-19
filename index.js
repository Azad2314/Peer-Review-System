const express= require('express');


const route= require('./routes/adminRoutes');
const routes = require('./routes/empRoutes');


const swaggerUi= require('swagger-ui-express');


const definition =require('./utils/swagger');


const app = express();
app.use('/api-docs', swaggerUi.serve, (...args) => swaggerUi.setup(definition)(...args));
app.use(express.json()); 


app.use('/admin',route);
app.use('/emp',routes);

app.listen(8500,() => {
    
    console.log('Application started on port 8500')
});