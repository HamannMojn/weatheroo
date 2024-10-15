import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    toast.warning(error?.code);
  }else{
    toast.warning(error?.message);
  }
};
