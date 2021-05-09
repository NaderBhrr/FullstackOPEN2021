import { config } from 'dotenv';

// Making the environment variables accessible
config();

export const PORT = process.env.PORT;

export const MONGODB_URI = process.env.MONGODB_URI;
