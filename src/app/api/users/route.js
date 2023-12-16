import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";
//POST
export const POST=async(req,res)=>{
    const prisma=new PrismaClient();
    const result = await prisma.users.create({
        data: 
          {
            name: "aru ",
            email: "aru@gmail.com",
            password: "24dfRER",
            customers:{
                create:{
                    name: "aru ",
                    product: "Body Spray",
                    address: "Jessore",
                    engagement: 60,  
                }
            },
          }
      });
return NextResponse.json({message:"success",data:result});
}
//Find
export const GET=async(req,res)=>{
    const prisma=new PrismaClient();
    // const result=await prisma.users.findMany();
    // const result=await prisma.users.findMany({
    //     where:{name:{contains:"Sharin"}}
    // });
    // const result=await prisma.users.findMany({
    //     where:{name:{contains:"Sharin"}},
    //     select:{id:true}
    // });
    // const result=await prisma.users.findMany({
    //   orderBy:{id:"desc"},
    //   take :1
    // });
    // const result=await prisma.users.findMany({
    //     orderBy:{id:"asc"},
    //     take :1
    //   });
    // const result=await prisma.users.findMany({
    //     orderBy:{id:"asc"},
    //     skip:2,
    //     take:2
    //   });
    // const result=await prisma.users.findFirst({
    //     orderBy:{id:"desc"},
    //   });
    // const result=await prisma.users.findFirst();
    const result=await prisma.users.findMany({
        include:{
            customers:true
        }
    });

    return NextResponse.json({message:"success",data:result})
}


//update and delete
export const PUT=async(req,res)=>{
    const { searchParams  }=new URL(req.url);    
    const id =parseInt(searchParams.get("id"));
    const prisma=new PrismaClient();
    const result=await prisma.users.update({
        where:{id:id},
        data:{
            name:"arohi",
            email:"arohi@gmail.com",
            password:"arohi"
        }
    })


    return NextResponse.json({data:result})
}

