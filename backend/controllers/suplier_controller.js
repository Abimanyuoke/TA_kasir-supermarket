import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllSuplier = async (req, res) => {
    try {
     const response = await prisma.suplier.findMany()
     res.status(200).json(response)
    } catch (error) {
     res.status(500).json({msg: error.message})
     }
 }
 
 
 export const getSuplierById = async (req, res) => {
    try {
     const result = await prisma.suplier.findUnique({
         where:{
             id_suplier: Number(req.params.id)
         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const addSuplier = async (req, res) => {
    try {
     const {nama_suplier, phone_suplier, alamat_suplier} = req.body
     const result = await prisma.suplier.create({
         data: {
             nama_suplier : nama_suplier,
             phone_suplier : phone_suplier,
             alamat_suplier : alamat_suplier


         }
     })
     res.status(200).json(result)
    } catch (error) {
     console.log(error)
     res.status(400).json({msg: error.message})
    }
 }
 
 export const updateSuplier = async (req, res) => {
    try {
     const {nama_suplier, phone_suplier, alamat_suplier} = req.body
     const result = await prisma.suplier.update({
         where:{
             id_suplier: Number(req.params.id)
         },
         data: {
            nama_suplier : nama_suplier,
            phone_suplier : phone_suplier,
            alamat_suplier : alamat_suplier

         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const deleteSuplier = async (req, res) => {
    try {
     const result = await prisma.suplier.delete({
         where: {
             id_suplier: Number(req.params.id)
         },
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }