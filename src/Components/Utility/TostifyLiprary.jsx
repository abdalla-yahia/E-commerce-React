import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type,msg) => {
    if(type=== 'error')
    toast.error(msg || "حدث خطأ أثناء العملية")
else if(type=== 'success')
    toast.success(msg || 'تمت العملية بنجاح 👍')
else if(type=== 'warning')
    toast.warn(msg || 'من فضلك أكمل البيانات ')
}
function TostifyLiprary() {
  return (
    <ToastContainer />
  )
}

export default TostifyLiprary