const {login,signup,getmydata}=require("../Resolver/authresolver")
const resolvers={
    Query:{
        getmydata
          },
    Mutation:{
        login,
        signup

    }
}
module.exports=resolvers