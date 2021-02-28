import mongoose from 'mongoose';
import chalk from 'chalk';

export const connectDB = async () => {
    try {
        const uri = `${process.env.MONGO_URI}`;
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`\n`);
        console.log(chalk.green(`MongoDB connected: ${conn.connection.host}`));
    } catch (error) {
        console.log(`\n`);
        console.log(chalk.red(`Error connecting to MongoDB: ${error.message}`));
    }
};

export const gracefullyCloseConnection = () => {
    mongoose.connection.close(() => {
        console.log(chalk.black.bgYellow(`Closing mongoose connection...`));
        process.exit(0);
    });
};
