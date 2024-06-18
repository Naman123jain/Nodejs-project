# Vendor Users API

## Description
This is a Node.js application with an Express.js API endpoint that fetches specific data from a relational database.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd vendor-users-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```dotenv
    DB_HOST=nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com
    DB_USER=candidate
    DB_PASS=NoTeDeSt^C10.6?SxwY882}
    DB_NAME=myphpAdmin
    DB_PORT=3306
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. The server will be running on `http://localhost:3000`.

## API Endpoint

### Get Vendor Users
- **Endpoint:** `/api/getVendorUsers`
- **Method:** `GET`
- **Query Parameters:**
  - `prId` (required)
  - `custOrgId` (required)
- **Response:**
  - Array of objects with fields `supplierId`, `UserName`, and `Name`

### Example Request

```http
GET /api/getVendorUsers?prId=1&custOrgId=2


![Uploading image.png…]()

