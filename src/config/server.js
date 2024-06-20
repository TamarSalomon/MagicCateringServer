const app = require('./app'); 
const db = require('./database');

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
