import express from 'express';

import {
    getAllBarang,
    getBarangById,
    updateBarang,
    addBarang,
    deleteBarang
} from '../controllers/barang_controller.js';

const app = express();
app.use(express.json());

app.get('/',getAllBarang)
app.get('/:id', getBarangById)
app.post('/', addBarang)
app.put('/:id', updateBarang)
app.delete('/:id', deleteBarang)


export default app