import express from 'express';

import {
    getAllKasir,
    getKasirById,
    updateKasir,
    addKasir,
    deleteKasir
} from '../controllers/user_controller.js';

const app = express();
app.use(express.json());

app.get('/',getAllKasir)
app.get('/:id', getKasirById)
app.post('/', addKasir)
app.put('/:id', updateKasir)
app.delete('/:id', deleteKasir)


export default app