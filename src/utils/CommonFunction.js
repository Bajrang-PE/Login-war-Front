import { fetchPostData } from "./ApiHooks";

export const fetchQueryData = async (queryVO = []) => {
    if (!Array.isArray(queryVO) || queryVO.length === 0) {
        console.error("Invalid or empty queryVO array provided.");
        return [];
    }
  
    try {
        const query = queryVO[0]?.mainQuery; 
        if (!query) {
            console.error("No valid query found in queryVO.");
            return [];
        }
  
        const requestBody = { query, params: {} };
        const response = await fetchPostData("/hisutils/GenericApiQry", requestBody);
  
        return response || [];
    } catch (error) {
        console.error("Error fetching query data:", error);
        return [];
    }
  };