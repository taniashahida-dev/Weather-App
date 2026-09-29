import { ImCross } from "react-icons/im";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className=" h-[300px] p-5 rounded-2xl w-[400px] bg-gray-100 shadow-2xl">
    
         <p className="flex justify-between gap-9">this is modal  <ImCross /></p>
     
   
    </div>
    </div>
  );
};

export default Modal;