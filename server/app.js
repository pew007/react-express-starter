import express from 'express';

const app = express();

const router = express.Router();
router.get('/', (req, res) => {
    res.send('OK');
});

app.use(router);

app.listen(3000, () => {
    console.log('App started on port 3000');
});
