## <p align='center'> CALIFORNIA - A Ecommerce website - MERN </p>

<img src='https://i.ibb.co/wyvjdHX/screely-1666040032945.png' width="100%"  />


<table align="center">
  <tbody>
    <tr>
      <td>🌐Live site </td>
      <td><a href="https://california-ecommerce.onrender.com/"><b>https://california-ecommerce.onrender.com/</b></a></td>
    </tr>
    <tr>
      <td>🌐Admin Dashboard</td>
      <td><a href="https://california-ecommerce.onrender.com/"><b>https://california-ecommerce.onrender.com/</b></a></td>
    </tr>
    <tr>
      <td>👨‍💻Admin Dashboard Github repo</td>
      <td><a href="https://github.com/chathurperera/MERN-Ecommerce-Admin/"><b>https://github.com/chathurperera/MERN-Ecommerce-Admin/</b></a></td>
    </tr>
      <tr>
      <td>👨‍💻Backend Github repo</td>
      <td><a href="https://github.com/chathurperera/MERN-Ecommerce-Backend/"><b>https://github.com/chathurperera/MERN-Ecommerce-Backend/</b></a></td>
    </tr>
  </tbody>
</table>

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux Toolkit w/ useDispatch & useSelector hooks](https://redux.js.org/) - For state management
- [Redux Persist](https://www.npmjs.com/package/redux-persist) - For persisting the state
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [Material-UI](https://material-ui.com/) - UI library
- [Axios](https://axios-http.com/) - For data fetching

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [AWS S3](https://aws.amazon.com/s3/) - For storing images 
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Features

- Authentication (login/register with username-password)
- Sorting of product on basis of latest,price low to high or high to low.
- Password reset
- Cart Add/Remove Items | Update Quantities
- Storing images programmatically in a S3 bucket
- Products Pagination (Default 12 Products Per Page)
- Product Filters Based on Category/Gender/Price
- Persisting cart in the local storage
- Error management to prevent app crashes
- Sort products by latest, highest price, lowest pric.
- Order Details of All Ordered Item
- Toast notifications for actions: adding posts, deleting comments etc.
- Skeleton Loader for relevant fetching processes
- Responsive UI 
- Stock Management: Decrease stock of product when shipped
- Admin: Add/Update Products
- Admin: Update Order Status | Delete Order
- Admin: Dashboard access to only admin roles

## Usage

Notes:

#### Env variable:

Create .env file in server directory and add the following:

```
MONGO_URI = "Your Mongo URI"
JWT_SECRET = "Your JWT secret"
BUCKET_NAME = "Bucket Name"
BUCKET_REGION = "Bucket Region"
ACCESS_KEY = "Bucket Access Key"
SECRET_ACCESS_KEY = "Bucket Secret key"
```

#### Client:

```
cd client
npm install
npm start
```

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm start
```
