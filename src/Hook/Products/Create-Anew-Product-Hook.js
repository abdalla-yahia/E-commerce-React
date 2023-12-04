import getAllSubCategory from "../../Redux/Actions/SubCategoryActions";
import getAllCategories from "../../Redux/Actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProduct } from "../../Redux/Actions/ProductsActions";
import getAllBrandsHook from "../../Redux/Actions/BrandsActions";
import { notify } from "../../Components";

function CreateAnewProductHook() {
  const [ID, setID] = useState("");
  const [brand, setBrand] = useState("");
  const [subcategory, setSubCategor] = useState([]);
  const [images, setImages] = useState({});
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [netPrice, setNetPrice] = useState("");
  const [quantity, setQuantaty] = useState("");
  const [colors, setColors] = useState([]);
  const [showColors, setShowColors] = useState(false);

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
  const dispatch = useDispatch();

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

  // Send Data Of Produc to the server
  const sendDataHNDELLER = async () => {
    if (
      ID !== "" &&
      subcategory.length !== 0 &&
      name !== "" &&
      brand !== "" &&
      description !== "" &&
      netPrice !== 0 &&
      quantity !== 0 &&
      images.length !== 0
    ) {
      const ImgCover = dataURLtoFile(newImages[0], Math.random() + ".png");
      const formdata = new FormData();
      await formdata.append("imageCover", ImgCover);
      await formdata.append("title", name);
      await formdata.append("category", ID);
      await formdata.append("brand", brand);
      await formdata.append("price", netPrice);
      await formdata.append("discount", totalPrice);
      await formdata.append("description", description);
      await formdata.append("quantity", quantity);

      newImages.map((e) =>
        formdata.append("images", dataURLtoFile(e, Math.random() + ".png"))
      );
      colors.map((e) => formdata.append("availableColors", e));
      subcategory.map((e) => formdata.append("subcategory", e));

      dispatch(createProduct(formdata));
      notify("success");

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
      notify("warning");
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
    sendDataHNDELLER,
  ];
}

export default CreateAnewProductHook;
