const { statics } = require("../../data/store");
const { GetData } = require("../request");

export async function getPageData(urlSlug){
    
    let response = await GetData(statics.BaseUrl+`/website-page?slug=${urlSlug}`,200,null);
    if(response.ResponseCode === "Success")
    {
      return response?.data?.rows?.[0];;
    }
    else return {}
}
