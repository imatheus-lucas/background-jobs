import express from 'express'
import userController from './app/controllers/userController';

const app = express();


app.post('/users', userController.store)
app.listen(3333 , () => {
    console.log('server started')
})