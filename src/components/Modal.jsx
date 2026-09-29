import { ImCross } from "react-icons/im";

const Modal = ({onClose}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className=" h-75 p-5 rounded-2xl w-100 bg-gray-100 shadow-2xl">
    <div className="flex justify-between items-center">
      <p >this is modal  </p>
      <button className="cursor-pointer hover:text-gray-700">
        <ImCross  onClick={onClose}/>
      </button>
    </div>
         
  
    </div>
    </div>
  );
};

export default Modal;