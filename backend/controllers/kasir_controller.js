import { PrismaClient } from "@prisma/client";
import md5 from "md5";

const prisma = new PrismaClient();

export const getAllKasir = async (req, res) => {
    try {
     const response = await prisma.kasir.findMany()
     res.status(200).json(response)
    } catch (error) {
     res.status(500).json({msg: error.message})
     }
 }
 
 
 export const getKasirById = async (req, res) => {
    try {
     const result = await prisma.kasir.findUnique({
         where:{
             id_kasir: Number(req.params.id)
         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const addKasir = async (req, res) => {
    try {
     const {nama_kasir, password, email, phone} = req.body
     const result = await prisma.kasir.create({
         data: {
             nama_kasir: nama_kasir,
             password: md5(password),
             email : email,
             phone : phone
         }
     })
     res.status(200).json(result)
    } catch (error) {
     console.log(error)
     res.status(400).json({msg: error.message})
    }
 }
 
 export const updateKasir = async (req, res) => {
    try {
     const {nama_kasir, password, email, phone} = req.body
     const result = await prisma.kasir.update({
         where:{
             id_kasir: Number(req.params.id)
         },
         data: {
            nama_kasir: nama_kasir,
            password: md5(password),
            email : email,
            phone : phone
         }
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 
 export const deleteKasir = async (req, res) => {
    try {
     const result = await prisma.kasir.delete({
         where: {
             id_kasir: Number(req.params.id)
         },
     })
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json({msg: error.message})
    }
 }
 