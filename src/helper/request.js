export const GetData = async (url, statusCode, token, callback) => {
    let response = await fetch(url, {
      method: "GET",
    
    })

    if (response.status != statusCode) {
        console.log(
            "Looks like there was a problem. Status Code: " + response.status
        );
        try {
            response = await response.json();
        } catch (e) {
            console.log("Server Error => ", e);
            return response;
        }
    }
    else response = await response.json();

    if(callback)
    {
        // console.log(response);
        callback(response);
    }
    
    return response
  };
// module.exports = { GetData };
  