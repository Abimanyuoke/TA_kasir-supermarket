import express from 'express';

import {
    getAllSuplier,
    getSuplierById,
    updateSuplier,
    addSuplier,
    deleteSuplier
} from '../controllers/suplier_controller.js';

const app = express();
app.use(express.json());

app.get('/',getAllSuplier)
app.get('/:id', getSuplierById)
app.post('/', addSuplier)
app.put('/:id', updateSuplier)
app.delete('/:id', deleteSuplier)


export default app