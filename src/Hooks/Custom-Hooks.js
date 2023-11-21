import baseURL from "../Api/baseURL";

const getAllCategoriesHook =  async (url,params) => {

    const res =  await baseURL.get(url,params);
    return res
}

export default getAllCategoriesHook