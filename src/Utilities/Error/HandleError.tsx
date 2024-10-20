import axios from "axios";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.log(error?.code);
  }else{
    console.log(error?.message);
  }
};
