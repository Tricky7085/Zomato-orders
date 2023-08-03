
const con = require('./connector')
const data = require('./data')


const createDatabase = async () => {
    try {
      await con.query('DROP TABLE IF EXISTS orders');
      await con.query(`
        CREATE TABLE orders (
          _id VARCHAR(200),
          title VARCHAR(100),
          description VARCHAR(1000)
        )
      `);
  
      for (const order of data) {
        await con.query(
          `INSERT INTO orders (_id, title, description) VALUES (?, ?, ?)`,
          [order._id, order.title, order.description]
        );
      }
  
      console.log('Database setup complete.');
    } catch (error) {
      console.error('Error setting up database:', error);
    } finally {
      con.end();
    }
  };
  
  createDatabase();