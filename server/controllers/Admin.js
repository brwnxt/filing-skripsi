import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAdmin = async(req,res)=>{
    try{
        const admin = await Admin.findAll({
            attributes:['id','username']
        });
        res.json(admin);
    } catch (error){
        console.error(error);
    }
}

export const Register = async(req, res)=> {
    const{username, password, confPassword} = req. body;
    if(password !== confPassword) return res.status(400).json({msg:"Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{
        await Admin.create({
            username:username,
            password:hashPassword
        });
        res.json({msg:"Regsiter Berhasil"});
    }catch (error){
        console.log(error);
    }
}

export const Login = async(req,res) => {
try{
    const admin = await Admin.findAll({
        where:{
            username: req.body.username
        }
    });
    const match = await bcrypt.compare(req.body.password, admin[0].password);
    if(!match) return res.status(400).json({msg: "Wrong Passsword"});
    const adminId = admin[0].id;
    const username = admin[0].username;
    const accessToken = jwt.sign({adminId, username}, process.env.ACCESS_TOKEN_SECRET,{expiresIn:`20s`});
    const refreshToken = jwt.sign({adminId, username}, process.env.REFRESH_TOKEN_SECRET ,{expiresIn:`1s`});
    await Admin.update({refresh_token:refreshToken},{
        where:{
            id:adminId
        }
    });
    res.cookie('refreshToken', refreshToken,{
        httpOnly:true,
        maxAge: 24*60*60*1000
    });
    res.json({accessToken});
} catch (error){
    res.status(404).json({msg:"Username tidak ditemukan"});
}
}

export const Logout = async(req,res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findAll({
        where:{
            refresh_token:refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const adminId = admin[0].id;
    await Admin.update({refresh_token:null}, {where:{
        id:adminId
    }
});
res.clearCookie('refreshToken');
return res.sendStatus(200);
}