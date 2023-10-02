const { statics } = require("../../data/store");
const { GetData } = require("../request");

export async function getGlobalData(){
    
    let response = await GetData(statics.BaseUrl+`/website-page?id=1`,200,null);
    if(response.ResponseCode === "Success")
    {
      return response?.data?.rows?.[0];;
    }
    else return {}
}