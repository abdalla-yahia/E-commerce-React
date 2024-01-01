import baseURL from "../Api/baseURL";

let token=''
if(localStorage.getItem('token')){
    token =JSON.parse(localStorage.getItem('token'))
}
const config = {headers: { 
    'Content-Type':'multipart/form-data',
    Authorization: `Bearer ` +token
}}

// GET All Contents
const getAllHook =  async (url,params) => {

    const res =  await baseURL.get(url,params,config);
    return res
}

export default getAllHook


//Create a new hook
export const  CreateHook =async (url,params)  => {

    const res = await baseURL.post(url,params);
    return res
}
//Create a new hook
export const  CreateHookWithToken =async (url,params)  => {

    const res = await baseURL.post(url,params,config);
    return res
}

//Delete a Content hook
export const  DeleteteHook =async (url,params)  => {
  
    const res = await baseURL.delete(url,params,config);
    return res
}

//Update a Content hook

export const  UpdateHookWithToken =async (url,params)  => {

    const res = await baseURL.put(url,params,config);
    return res
}
//Update a Content hook

export const  UpdateHook =async (url,params)  => {

    const res = await baseURL.put(url,params);
    return res
}


