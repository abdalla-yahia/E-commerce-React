import getAllSubCategory from "../../Redux/Actions/SubCategoryActions";
import getAllCategories from "../../Redux/Actions/CategoryActions";
import getAllBrandsHook from "../../Redux/Actions/BrandsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct, updateProduct } from "../../Redux/Actions/ProductsActions";
import { notify } from "../../Components";
import { useParams } from "react-router-dom";


function UpdateAspecificProductHook() {
  const {id} =useParams()
  const product = useSelector(state => state.products.oneProduct)
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getProduct(id))
  },[dispatch,id]);
  
  
  const [ID, setID] = useState('');
  const [brand, setBrand] = useState('');
  const [subcategory, setSubCategor] = useState([]);
  const [images, setImages] = useState({});
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [netPrice, setNetPrice] = useState('');
  const [quantity, setQuantaty] = useState('');
  const [colors, setColors] = useState([]);
  const [showColors, setShowColors] = useState(false);
  
  useEffect(()=>{
      if(product){
    let pr=product.data
  if(pr){
      setName(pr.title);
      setID(pr.category);
      // setSubCategor(pr.subcategory);
      setBrand(pr.brand);
      setImages(pr.images);
      setDesc(pr.description);
      setTotalPrice(pr.totalPrice);
      setNetPrice(pr.price);
      setQuantaty(pr.quantity);
      setColors(pr.availableColors);
      setShowColors("");
      
    }}
  },[id,product,dispatch])
  //Convert An Object Of Multy Images Selected To An Array
  let newImages = [];
  if (images) {
    for (let i in images) {
      newImages.push(images[i]);
    }
  } else console.log("not found images");

  //Get Categories And Brands And Sub Categories
  const categories = useSelector((state) => state.categories.categories);
  const brands = useSelector((state) => state.brands.brands);
  const subCat = useSelector((state) => state.subCategories.subCategories);

  // Set Sub Categories
  const state = {
    options: [],
  };
  if (subCat.data) {
    state.options = subCat.data.map((e) => ({ name: e.name, id: e._id }));
  }

  //Functions to Convert Url to base 64
    const getBase64Image = async (url) => {
      
        const response = await fetch(url,{mode:'cors'});
        const blob = await response.blob();
        const ext = url.split('.').pop();
        const filename = url.split('/').pop();
        const metadata = {type: `image/${ext}`}
        // Create a File object from the Blob
        return new File([blob], Math.random(), metadata);
    };
  // Function To Convert base 64 Images To Files
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // When Select sub category is selected
  const onSelect = (selectedList, selectedItem) => {
    setSubCategor([...subcategory, selectedItem.id]);
    
  };

  // When Remove sub category is selected
  const onRemove = (selectedList, removedItem) => {
    setSubCategor([...subcategory.filter((item) => item !== removedItem.id)]);
  };

//#######  Send Data Of Product to the server #############################
//########################################################################
  const updateHandellerSubmit = async () => {
    let ImgCover=''
    if (
      Object.keys(images).length !== 0&&
      name !== "" &&
      description !== "" && description.length >=50 &&
      netPrice !== 0 &&
      quantity !== 0&& 
      ID !== "" &&
      ID !== 'none' &&
      brand !== "" && 
      brand !== 'none'
      ) {
        
        if(images[0].length >= 1000){
          ImgCover = dataURLtoFile(newImages[0], Math.random() + ".png");
          }else{
          ImgCover =await getBase64Image(images[0]).then(res=>res);
          }
        console.log(images)

        //Create a new FormDAta
        const formdata = new FormData();
        for(let i in images){ 
        if(images[i].length >= 1000){
          // ImgCover = dataURLtoFile(newImages[0], Math.random() + ".png");

          // newImages.map((e) =>
          formdata.append("images",await dataURLtoFile(images[i], Math.random() + ".png"))
          // );
        }else{
          // ImgCover =await getBase64Image(images[0]).then(res=>res);
          // console.log('Two',ImgCover)

          // for(let i in images){
            formdata.append("images",await getBase64Image(images[i]).then(res=>res))
          // }
        }
        }
        //Set Data In Form Data
      await formdata.append("imageCover", ImgCover);
      await formdata.append("title", name);
      await formdata.append("category", ID);
      await formdata.append("brand", brand);
      await formdata.append("price", netPrice);
      await formdata.append("discount", totalPrice);
      await formdata.append("description", description);
      await formdata.append("quantity", quantity);
      
      colors.map((e) => formdata.append("availableColors", e));
      subcategory.map((e) => formdata.append("subcategory", e));

      dispatch(updateProduct(id,formdata));
      
      notify("success",'تم تعديل المنتج بنجاح 👍');

      setID("");
      setSubCategor([]);
      setBrand("");
      setImages([]);
      setName("");
      setDesc("");
      setTotalPrice("");
      setNetPrice("");
      setQuantaty("");
      setColors([]);
      setShowColors("");
      state.options = [];
     
    } else {
      let msg = Object.keys(images).length ===0 ? 'من فضلك إختر صورة المنتج':
      name === "" ? 'من فضلك أكتب اسم المنتج' :
      description === "" ? 'من فضلك اكتب وصف للمنتج':
      description.length < 50 ? ' من فضلك اكتب وصف كبير  للمنتج لا يقل عن 50 حرف':
      netPrice === '' || netPrice === 0 ? 'من فضلك اكتب سعر المنتج' :
      quantity === '' ? 'اكتب الكمية المتاحة للبيع' :
      (ID === "" || ID === undefined ||ID === 'none') ?'يجب اختيار تصنيف للمنتج':
      (brand === "" || brand === undefined ||brand === 'none') ?"يجب اختيار ماركة المنتج" :null
      notify("warning",msg);
    }
  };

    
    

 // Calling the dispatcher
  useEffect(() => {
    if (ID) {
      dispatch(getAllSubCategory(ID));
    }
    dispatch(getAllCategories());
    dispatch(getAllBrandsHook());
  }, [ID,dispatch]);


  return [
    setID,
    setBrand,
    images,
    setImages,
    name,
    setName,
    description,
    setDesc,
    totalPrice,
    setTotalPrice,
    netPrice,
    setNetPrice,
    quantity,
    setQuantaty,
    colors,
    setColors,
    showColors,
    setShowColors,
    categories,
    brands,
    state,
    onSelect,
    onRemove,
    updateHandellerSubmit,
    ID,
    brand,
    
  ];
}

export default UpdateAspecificProductHook;

