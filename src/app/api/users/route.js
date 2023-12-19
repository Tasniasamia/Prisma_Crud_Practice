import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";
//POST
export const POST=async(req,res)=>{
    const prisma=new PrismaClient();
//     const result = await prisma.users.create({
//         data: 
//           {
//             name: "aru ",
//             email: "aru@gmail.com",
//             password: "24dfRER",
//             customers:{
//                 create:{
//                     name: "aru ",
//                     product: "Body Spray",
//                     address: "Jessore",
//                     engagement: 60,  
//                 }
//             },
//           }
//       });
// return NextResponse.json({message:"success",data:result});
const result = await prisma.$transaction([
    prisma.users.create({
        data: {
            name: "abhira",
            email: "abhira@gmail.com",
            password: "abhira",
            customers: {
                create: {
                    name: "abhira",
                    product: "guitter",
                    address: "Borguna",
                    engagement: 125
                }
            }
        }
    }),
    prisma.customers.delete({
        where: { id: 8 }
    })
]);
  return NextResponse.json({ message: "success", data: result });
}
//Find
export const GET=async(req,res)=>{
    //_____find and findMany()
    // const prisma=new PrismaClient();
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
    // const result=await prisma.users.findMany({
    //     include:{
    //         customers:true
    //     }
    // });
  

    // _____aggregate
    // const result=await prisma.users.aggregate({
    //     _count:{name:true},
    //     _sum:{id:true},
    //     _avg:{id:true},
    //     _max:{id:true},
    //     _min:{name:true}
    // })
    //_______groupBy
    // const result=await prisma.users.groupBy({
    //     by:["name"],
    //     _count:{id:true}
    // })
    // const result=await prisma.users.groupBy({
    //     by:["name"],
    //     _count:{name:true},
    //     having:{name:"Tahsan Sharin"}
    // })

   // return NextResponse.json({message:"success",data:result})


    //____performance time count
    // const prisma=new PrismaClient({log:['query','info','warn', 'error']})  //for getting log info
// const prisma=new PrismaClient();
// const start=Date.now();
// const result=await prisma.users.findMany();
// const end=Date.now()-start +" "+"miliseconds"
// return NextResponse.json({execute_time:end,data:result})


////____comparison Operator

const prisma = new PrismaClient();
// const data = await prisma.users.findMany({
//     where:{id:{lt:30}}
// });
// const data = await prisma.users.findMany({
//     where:{id:{gte:30,lte:40}}
// });

// const data = await prisma.users.findMany({
//     where:{id:{in:[30,33]}}
// });

const data = await prisma.users.findMany({
    where:{id:{notIn:[30,33]}}
});
return NextResponse.json({data:data})
 
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

