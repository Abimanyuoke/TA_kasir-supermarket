import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBarang = async (req, res) => {
    try {
     const response = await prisma.barang.findMany()
     res.status(200).json(response)
    } catch (error) {
     res.status(500).json({msg: error.message})
     }
 }
 
 
 export const getBarangById = async (req, res) => {
    try {
     const result = await prisma.barang.findUnique({
         where:{
             id_barang: Number(req.params.id)
         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const addBarang = async (req, res) => {
    try {
     const {nama_barang, jenis_barang, deskripsi, harga, stok, id_suplier, image} = req.body
     const result = await prisma.barang.create({
         data: {
             nama_barang: nama_barang,
             jenis_barang: jenis_barang ,
             deskripsi : deskripsi,
             harga : harga,
             stok : stok,
             id_suplier : id_suplier,
             image : image
         }
     })
     res.status(200).json(result)
    } catch (error) {
     console.log(error)
     res.status(400).json({msg: error.message})
    }
 }
 
 export const updateBarang = async (req, res) => {
    try {
     const {nama_barang, jenis_barang, deskripsi, harga, stok, id_suplier, image} = req.body
     const result = await prisma.barang.update({
         where:{
             id_barang: Number(req.params.id)
         },
         data: {
            nama_barang: nama_barang,
            jenis_barang: jenis_barang ,
            deskripsi : deskripsi,
            harga : harga,
            stok : stok,
            id_suplier : id_suplier,
            image : image
         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const deleteBarang = async (req, res) => {
    try {
     const result = await prisma.barang.delete({
         where: {
             id_barang: Number(req.params.id)
         },
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
