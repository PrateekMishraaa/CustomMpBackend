import express from "express"
const router = express.Router()
import Query from "../models/QueryForm.js"

router.post("/form",async(req,res)=>{
    const {Name,Email,Phone,Message} = req.body;

    if(!Name || !Email || !Phone || !Message){
        res.status(400).json({message:"All fields are required"})
    }
    try{
            const newForm = await Query.create({
                Name,
                Email,
                Phone,
                Message
            })
            await newForm.save()
            console.log(newForm)
            res.status(200).json({message:"Form submitted Successfully",newForm})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error",error})
    }
})

router.delete("/delete-query",async(req,res)=>{
    try{
            const deleteQueries = await Query.deleteMany()
            console.log("All queries has been deleted",deleteQueries)
            res.status(200).json({message:"Queries has been deleted successfully"})
    }catch(error){
        console.log(error)
        res.status("Error in deleting queries")
    }
})



export default router