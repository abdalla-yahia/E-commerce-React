import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import * as Page from "../Pages";
import * as Comp from "../Components";

export const router = createBrowserRouter(
    createRoutesFromElements([

    <Route element={<Comp.NavbarMain />} > 

        <Route index element={<Page.HomePage />} errorElement={<Page.ErrorPage />}/>
        <Route index path="/login/" element={<Page.LoginPage/>} errorElement={<Page.ErrorPage />} />
        <Route path="/login/regester" element={<Page.RegesterPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allcategory" element={<Page.AllCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allbrands" element={<Page.Allbrands/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allproducts" element={<Page.ShopingProductsPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/allproducts/:id" element={<Page.ProductPageDetails/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/cartShoping" element={<Page.CartShooping/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/cartShoping/countinuSel" element={<Page.ContinuSelPage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage" element={<Page.AdminHomePage/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallorders" element={<Page.AdminAllOrders/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminproductsedit" element={<Page.AdminProductsEdit/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminbrandsedit" element={<Page.AdminBrandsEdit/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/admineditcategory" element={<Page.AdminCategoryEdit/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminesubcategory" element={<Page.AdminSubCategory/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/admineaddproducts" element={<Page.AdminAddProducts/>} errorElement={<Page.ErrorPage />}/>
        <Route path="/adminhomepage/adminallorders/order/32" element={<Page.AdminSingleOrder/>} errorElement={<Page.ErrorPage />}/>
        
        
        <Route path="*" element={<Page.Rongpath/>}/>
    </Route>
    ])
)