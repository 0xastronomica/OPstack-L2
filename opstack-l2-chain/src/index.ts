import { createServer } from 'http';
import { config } from 'dotenv';
import { initializeApp } from './services/fee-processor';
import { setupBridges } from './deploy/deploy';

config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await initializeApp();
    await setupBridges();

    createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('L2 Chain is running with stablecoin fee payments.\n');
    }).listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
};

startServer().catch(err => {
    console.error('Error starting the server:', err);
});