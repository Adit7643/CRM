export const login = async (req, res)=>{
    try{
        res.render("login");
    }catch(error){
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}