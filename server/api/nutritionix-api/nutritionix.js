class Nutritionix {

    enableNutritionix(app){
        console.log("Nutritionix-api enabled!");
        
        //Registers routes
        this.routes(app);
    }

    routes(app){
        app.post("/test", (req,res)=>{
            console.log("Hey");
        })
    }

    getItemId(item){
        console.log("Hello");
    }
}

export default new Nutritionix();