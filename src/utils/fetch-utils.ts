export const FetchUtils = {

    getUserData : async ({pageParam} : {pageParam : number}) => {
        const limit = 10
        const skip = pageParam * limit;
       
       const data = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);

       
       const jsonData = await data.json();

       
   
       return jsonData?.users;
    },

    getSingleUserData : async(id : string) => {
        const data = await fetch(`https://dummyjson.com/users/${id}`);
        
        
        const jsonData = await data.json(); 
        
        return jsonData;
        
    },

    getImagesData : async() => {
        const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
        
        
        const jsonData = await data.json(); 
        
        return jsonData;
        
    }
}

