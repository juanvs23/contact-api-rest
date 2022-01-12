const connectionDB = require('../configs/connect');
class Server {
    constructor(express) {
      this.app = express();
      this.uses(express.static("public"));
      this.connection()
    }
    async connection() {
      await connectionDB();
    }
    uses(element) {
      this.app.use(element);
    }
    sets(key, value) {
      this.app.set(key, value);
    }
    routes(endpoint, router) {
      this.app.use(endpoint, router);
    }
    listen(port) {
      this.app.listen(port, () => {
        console.log(`running at ${port} port`);
      });
    }
  }
  
  module.exports = {
    Server,
  }; 
  