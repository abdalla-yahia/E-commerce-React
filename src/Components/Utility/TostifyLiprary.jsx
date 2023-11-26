import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type) => {
    if(type=== 'error')
    toast.error("حدث خطأ أثناء العملية")
else if(type=== 'success')
    toast.success('تمت العملية بنجاح 👍')
else if(type=== 'warning')
    toast.warn('من فضلك أكمل البيانات ')
}
function TostifyLiprary() {
  return (
    <ToastContainer />
  )
}

export default TostifyLiprary