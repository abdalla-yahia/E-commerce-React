import baseURL from "../Api/baseURL";

// GET All Contents
const getAllHook =  async (url,params) => {

    const res =  await baseURL.get(url,params);
    return res
}

export default getAllHook


//Create a new hook
export const  CreateHook =async (url,params)  => {

    const res = await baseURL.post(url,params);
    return res
}