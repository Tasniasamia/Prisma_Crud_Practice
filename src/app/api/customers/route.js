import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export const GET=async(req,res)=>{
    return NextResponse.json({message:"The route is created"})
}

export const POST=async(req,res)=>{
const prisma=new PrismaClient();
const data=await prisma.customers.createMany({data:[ {
    name: "Tansia Sharin",
    product: "chosma",
    address: "Khulna",
    engagement: 12,
    products: {
      create: {
        product_name: "chashma",
        price: 1200,
        rate: 4.5,
      },
    },
  },
  {
    name: "Tansia Arham",
    product: "ghori",
    address: "Dhaka",
    engagement: 24,
    products: {
      create: {
        product_name: "court",
        price: 700,
        rate: 4.5,
      },
    },
  },
{
    name:"Tansia Jerin",
    product:"lipstick",
    address:"Jessore",
    engagement:50,
    products:{
        create:{
            product_name:"kamiz",
            price:700,
            rate:4.5,

            
        },
    },
    
},
{
    name:"Tasnnim Jerin",
    product:"eyeliner",
    address:"Barishal",
    engagement:20,
    products:{
        create:{
            product_name:"gown",
            price:700,
            rate:4.5,

            
        },
    },
    
}

]})  
    return NextResponse.json({message:"success", data:data})
}