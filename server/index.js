import express from 'express';
import e from 'cors';
import adminRoutes from './src/routes/admin.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import bhaiRoutes from './src/routes/bhai.routes.js';
import jobRoutes from './src/routes/job.routes.js';
import userRoutes from './src/routes/user.routes.js';
import whatsappRoutes from './src/routes/whatsapp.routes.js';
const app=express();
const PORT=3000;

app.use('/api/admin',adminRoutes);
app.use('/api/auth/user',authRoutes);
app.use('/api/auth/bhai',bhaiRoutes);
app.use('/api/job',jobRoutes);
app.use('/api/auth',userRoutes);
app.use('/api/whatsapp',whatsappRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
