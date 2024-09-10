Here's the updated README with the new repository link:

---

# Full Stack E-Commerce

## Project Overview
This project is a fully functional e-commerce store built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes user authentication, product browsing, a shopping cart, and payment processing.

## Features
- **MongoDB** for database management
- **Express.js** for server-side operations and API management
- **React.js** for the front-end user interface
- **Node.js** as the runtime environment for the server
- **JWT (JSON Web Tokens)** for secure authentication
- **Bcrypt** for password encryption
- **Redux** for state management on the client-side
- **Stripe API** for payment gateway integration
- **Cloudinary** for image storage and handling
- **Framer Motion** for animations
- **React Three Fiber** for 3D visuals (if applicable)

## Prerequisites
Ensure that you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version)
- [MongoDB](https://www.mongodb.com/)
- A [Stripe Account](https://stripe.com) for payment integration

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/akarshan2602/full-stack-ecommerce.git
   cd full-stack-ecommerce
   ```

2. **Install Dependencies**
   Navigate to both the `client` and `server` directories and install dependencies.
   - For the server:
     ```bash
     cd server
     npm install
     ```
   - For the client:
     ```bash
     cd ../client
     npm install
     ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `server` folder and provide the following environment variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongoDB_URI
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the Application**
   - For the server:
     ```bash
     npm run dev
     ```
   - For the client:
     ```bash
     cd ../client
     npm start
     ```

   By default, the server will run on `http://localhost:5000` and the client will run on `http://localhost:3000`.

## Features Breakdown
1. **User Authentication**: User login and signup with JWT for session management.
2. **Shopping Cart**: Users can add products to the cart and adjust quantities.
3. **Payment Integration**: The app uses the Stripe API for secure payments.
4. **Product Management**: Admins can manage product listings, including uploading images via Cloudinary.
5. **Order Management**: Users can track their order history and view order details.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Redux, CSS3, Framer Motion, React Three Fiber
- **Authentication**: JWT, Bcrypt
- **Payment**: Stripe API
- **Image Handling**: Cloudinary
- **Version Control**: Git

## How to Run Locally
1. Clone the repository
2. Install dependencies in both client and server directories
3. Configure environment variables
4. Run the client and server concurrently

## Future Improvements
- **Additional Payment Methods**: Integrating PayPal or other gateways.
- **Product Reviews and Ratings**: Allowing users to leave feedback.
- **Search and Filtering**: Implementing a more robust product search and filtering system.

## Difficulties Faced
1. **Stripe Payment Integration**: Initial challenges with handling test environments and ensuring secure transactions.
2. **JWT Token Management**: Handling token expiry and refresh for seamless user experience.
3. **Image Uploads**: Configuring Cloudinary correctly to handle various image formats and sizes.
4. **State Management**: Redux setup for managing complex states in the client-side efficiently.
5. **Deployment**: Setting up CI/CD for deploying the application on platforms like Heroku, Vercel, or AWS.

---

Feel free to adjust any details or add more information based on your project specifics!
