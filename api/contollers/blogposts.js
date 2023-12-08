export const getPosts = (req,res)=>{
    const q = req.query.cat ? "SELECT * FROM blogposts WHERE cat=?" : "SELECT * FROM blogposts";
}

export const getPost = (req,res)=>{
    res.json("from controller")
}

export const addPost = (req,res)=>{
    res.json("from controller")
}

export const deletePost = (req,res)=>{
    res.json("from controller")
}
export const updatePost = (req,res)=>{
    res.json("from controller")
}