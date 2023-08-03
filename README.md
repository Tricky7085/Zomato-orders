# Zomato-orders
This project is a Node.js server that facilitates pagination for restaurant orders. It uses MySQL as a database to store and retrieve order data.

### Installing Dependencies

Clone this repository to your local machine:
git clone https://github.com/your-username/Zomato-orders.git

Navigate to the project directory:
cd Zomato-orders
Install the project dependencies:
npm install

### Setting Up the Database

Ensure you have a MySQL server running.
Configure your database credentials in the `src/connector.js` file.
Run the `createDatabase.js` script to set up the database and populate it with sample data:
node src/createDatabase.js

### Running the Server

Start the Node.js server:
npm run run
The server will be running at http://localhost:8080.

## API Endpoints

- **GET /api/orders**: Retrieve paginated restaurant orders.
- Parameters:
 - `limit` (optional): Number of records to retrieve per page (default: 10).
 - `offset` (optional): Offset for pagination (default: 0).
