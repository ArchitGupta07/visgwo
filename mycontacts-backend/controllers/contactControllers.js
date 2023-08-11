//@desc Get all contacts
//@route GET /api/contacts
//@access public
const asyncHandler = require("exress-async-handler");

const Contact = require("../models/contactModel");

const getContacts = async (req,res)=>{

    const contacts = await Contact.find();
    // res.status(200).json({message:"Get all contacts"});
    res.status(200).json(contacts);
    
} 



//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = async (req,res)=>{
    console.log("The request Body is:" ,req.body);
    const {name,email,phone} = req.body;
    if( !name || !email || !phone){
        throw new Error("All fields are mandatory");
    }
    
    res.status(201).json({message:"Create Contact"});
} 


//@desc Get  contact
//@route GET /api/contacts/:id
//@access public

const getContact = async (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
    
} 


//@desc Update  contact
//@route PUT /api/contacts
//@access public

const updateContact =async (req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
} 



//@desc Delete contact
//@route DE;ETE /api/contacts
//@access public

const deleteContact =async (req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
} 


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};