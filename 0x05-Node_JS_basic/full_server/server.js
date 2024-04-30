// the application server
import express from 'express';
import router from './routes/index';

const app = express();
const indexRoutes = router;

app.use(indexRoutes);
app.listen(1245);

export default app;
