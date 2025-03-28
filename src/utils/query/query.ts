import axios from  "axios"
export const getDetails = async (page: number = 1) => {
   try {
    const res = await axios.get(`https://fake-data-api-backend.vercel.app/v1/getallnotes?page=${page}&limit=15`);
    return res.data;
   } catch (error: unknown) {
    console.log(error);
   } 
}