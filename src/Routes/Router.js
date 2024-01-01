import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import * as Page from "../Pages";
import * as Comp from "../Components";
// import loader from '../Components/Utility/NavbarMain'
export const router = createBrowserRouter(
    createRoutesFromElements([

    <Route element={<Comp.NavbarMain />} > 

        <Route index element={<Page.HomePage />} errorElement={<Page.ErrorPage />}/>
        <Route index path="/login/" element={<Page.LoginPage/>} errorElement={<Page.ErrorPage />} />
        <Route index path="/login/forgetpassword" element={<Page.ForgetPassword/>} errorElement={<Page.ErrorPage />} />
        <Route index path="/login/verifycode" element={<Page.Verifyresetcode/>} errorElement={<Page.ErrorPage />} />
        <Route index path="/login/resetpassword" element={<Page.ResetPassword/>} errorElement={<Page.ErrorPage />} />
        <Route path="/login/regester" element={<Page.RegesterPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allcategory" element={<Page.AllCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allbrands" element={<Page.Allbrands/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allproducts" element={<Page.ShopingProductsPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allproducts/:id" element={<Page.ProductPageDetails/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/cartShoping" element={<Page.CartShooping/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/cartShoping/countinuSel" element={<Page.ContinuSelPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage" element={<Page.AdminHomePage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallorders" element={<Page.AdminAllOrders/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallbrands" element={<Page.AdminAllBrands/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallcategories" element={<Page.AdminAllCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminproductsedit" element={<Page.AdminProductsEdit/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminbrandsedit" element={<Page.AdminAddanewBrand/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/admineditcategory" element={<Page.AdminAddanewCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminesubcategory" element={<Page.AdminSubCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/admineaddproducts" element={<Page.AdminAddProducts/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/admineeditproduct/:id" element={<Page.AdminEditProductPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallorders/order/32" element={<Page.AdminSingleOrder/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage" element={<Page.UserHomePage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage/allorders" element={<Page.UserAllOrders/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage/favproducts" element={<Page.UserFAveProducts/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage/userAdresses" element={<Page.UserAddresses/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage/userAdresses/addnewadreess" element={<Page.UserEditeAddress/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/userhomepage/profile/:id" element={<Page.UserProfile/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/brands/:ID" element={<Page.AdminEditBrand/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/category/:ID" element={<Page.AdminEditCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/products/searchresults" element={<Page.SearchProductsPage/>} errorElement={<Page.ErrorPage />} />
        <Route path="/category/:id/products" element={<Page.ProductsCategory/>} errorElement={<Page.ErrorPage />} />
        <Route path="/brand/:id/products" element={<Page.ProductsOfBrand/>} errorElement={<Page.ErrorPage />} />
        
        
        <Route path="*" element={<Page.Rongpath/>}/>
    </Route>
    ])
)