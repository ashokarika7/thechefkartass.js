    const express = require("express");
    const path = require("path");
    const { open } = require("sqlite");
    const sqlite3 = require("sqlite3");
    const app = express();

    app.use(express.json());
    
    const dbPath = process.env.NODE_ENV === "test" ? path.join(__dirname, "insta.test.db") : path.join(__dirname, "insta.db");


    let db = null;

    const initializeDBAndServer = async () => {
    try {
        db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
        });
        
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    } 
    };

    initializeDBAndServer();



    //GET POSTS API

    app.get("/posts/", async(request,response) => {
        const getpostsQuery= `
            SELECT * FROM posts;
        `;
        const postsResponse= await db.all(getpostsQuery);
        response.send(postsResponse);
    })

    //CREATE A NEW POST API 

    app.post('/posts', async(request,response) => {
        const {title,description,userId,images}= request.body
        const createPostQuery = `
        INSERT INTO posts (title, description, user_id, images)
        VALUES ('${title}','${description}',${userId},'${images}');
        `;
        
        try{
        
            const dbResponse = await db.run(createPostQuery);
        const id= dbResponse.lastID
        response.send({id:id})
        }catch(e){
            console.log(`Error:${e}`)
            
        }
        
    })

    //UPDATE A POST API 
    app.put('/posts/', async(request,response) => {
        const {title,description,images,userId}= request.body
        const updateUserQuery=`
        UPDATE posts SET
        title= '${title}',
        description= '${description}',
        images= '${images}'
        WHERE user_id=${userId};
        `;
        try{
            await db.run(updateUserQuery)
        response.send("post successfully updated")
        }
        catch (e){
            response.send(`Error:${e.message}`)
        }
        
    })

    //DELETE A POST API 
    app.delete('/posts/:id', async(request,response) => {
        const {id}= request.params 
        const deleteQuery= `
            DELETE FROM posts 
            WHERE id=${id};
        `;
        await db.run(deleteQuery);
        response.send('Post Deleted Successfully');
    })

    //GET ALL USERS API 
    app.get("/users/", async(request,response) => {
        const getusersQuery= `
            SELECT * FROM users;
        `;
        const usersResponse= await db.all(getusersQuery);
        response.send(usersResponse);
    })

    //GET ALL POSTS OF USERS API 
    app.get("/users/:id", async(request,response)=>{
        const {id}= request.params 
        const getPostsByIdQuery=`
            SELECT * FROM posts 
            WHERE user_id=${id};
        `;
        const postsResponse=await db.all(getPostsByIdQuery)
        
        response.send(postsResponse)
    })

    if (process.env.NODE_ENV !== "test") {
        // Only start the server in non-test environments
        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/");
        });
    }

    module.exports = app;