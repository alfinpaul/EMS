import axios from "axios";

const CommonApi = async (httprequest, url, reqBody) =>{
    const reqConfig ={
        method: httprequest,
        url,
        data: reqBody
    
    }
    return await axios(reqConfig).then(res =>
    {
        return res 
     }).catch(err => { 
            return err
        })
    }
    export default CommonApi
