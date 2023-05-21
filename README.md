# Sun Haven E-commerce Store - Backend

This repository contains the backend code for the Sun Haven E-commerce Store. It is built using Node.js, Express.js, and utilizes various tools such as the Stripe API for cart purchases, PostgreSQL (PSQL) for the database, and Render for backend deployment.

## Getting Started

To set up the backend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/aalnamer/SunHavenBackend/tree/b2388ef0efe571e36dfbf76f312404b95e819232`
2. Navigate to the `ecommerce-backend` folder: `cd ecommerce-backend`
3. Install dependencies: `npm install`
4. Set up the database: Ensure you have PostgreSQL installed and running. Create a new PostgreSQL database and update the database connection configuration in `config/database.js`.
5. Set up environment variables: Create a `.env` file in the root of the `ecommerce-backend` directory and define the required environment variables. For example:

PORT=8080
STRIPE_SECRET_KEY=your_stripe_secret_key
DATABASE_URL=your_database_url

6. Start the server: `npm start`

## Deployment

The backend can be deployed using Render, a hosting and scaling platform. To deploy the backend:

1. Create an account on Render (https://render.com/) if you don't have one.
2. Create a new web service on Render and link it to your GitHub repository.
3. Configure the necessary environment variables on Render, such as `PORT`, `STRIPE_SECRET_KEY`, and `DATABASE_URL`.
4. Deploy the backend using the Render platform.

## Contributing

If you would like to contribute to the backend of the Sun Haven E-commerce Store, please follow the general guidelines outlined in the repository's CONTRIBUTING.md file.

## License

The Sun Haven E-commerce Store backend is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact

If you have any questions, suggestions, or feedback, please contact the project maintainers at [collaymen.alnamer@gmail.com](mailto:collaymen.alnamer@gmail.com).
