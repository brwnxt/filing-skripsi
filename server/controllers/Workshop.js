import Workshop from "../models/WorkshopModel.js";
import path from "path";
import fs from "fs";

export const getWorkshop = async (req,res)=>{
    try {
        const response = await Workshop.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getWorkshopById = async(req,res)=>{
    try {
        const response = await Workshop.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveWorkshop = async (req,res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const desc = req.body.text;
    const tanggal = req.body.date;
    const jam = req.body.timestamp;
    const tempat = req.body.text;
    const harga = req.body.text;
    const mentor = req.body.text;
    const jabatan_mentor = req.body.text;
    const timeline = req.body.text;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({
                name: name, 
                desc: desc,
                tanggal:tanggal, 
                jam:jam, 
                tempat:tempat,
                harga:harga,
                mentor:mentor,
                jabatan_mentor:jabatan_mentor,
                timeline:timeline,
                image: fileName, 
                url: url});
            res.status(201).json({msg: "Workshop Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateWorkshop = async (req,res)=>{
    const workshop = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!workshop) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Workshop.update({
            name: name, 
            desc: desc,
            tanggal:tanggal, 
            jam:jam, 
            tempat:tempat,
            harga:harga,
            mentor:mentor,
            jabatan_mentor:jabatan_mentor,
            timeline:timeline,
            image: fileName, 
            url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteWorkshop = async (req,res)=>{
    const workshop = await Workshop.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!workshop) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Workshop.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}