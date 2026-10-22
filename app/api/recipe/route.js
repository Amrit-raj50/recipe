import ClientPromise from '@/lib/mongodb';


export async function POST(req){
    try{
        const body = await req.json();
        const {name , description ,  category , image ,rating} = body;
        if(!name || !description ||  !category){
            return Response.json({
                message : "fill all the fields"  
            },
        {status : 400})
        }

        const client = await ClientPromise;
        const db = client.db("recipe");

        const item = {
            name  : name.trim(),
            description : description.trim(),
            category : category.trim(),
            rating : Number(rating),
            image : image,
            createdAt : new Date(),
        }

        const result = await db
        .collection("recipe")
        .insertOne(item);

        return Response.json({
            message : "recipe created successfully",
            item : item,
            result : result
        },{status : 201})
    }catch(error){
        return Response.json({
            message : error
        },{status : 500})

        // console.log(error)
    }
}

export async function GET(){
    try{
        const client = await ClientPromise;
        // console.log("after : " ,client);
        // console.log("client" , client);
        const db = client.db("recipe");
        // console.log("db",db);

        const item = await db.collection("recipe").find({}).toArray();
        // console.log("user0" , user)

        return Response.json({
            message : "all users",
            result : item
        },{status : 200})
    }catch(error){
        return Response.json({
            message : error
        },{status : 500})

        // console.log(error);
    }
}

// export default postName