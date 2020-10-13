const db = require('./database')
const app = require('./app')

app.listen(app.get('port'));
console.log('server on port', 4000);