import axios from 'axios';

// const BaseUrl = 'http://10.226.25.164:8025'; //pritee
// const BaseUrl = 'http://10.226.17.6:8024';  //BG
// const BaseUrl = 'http://10.226.29.211:8025/';  //Disha
const BaseUrl = 'http://10.226.29.102:8025/';  //shubham

axios.defaults.baseURL = BaseUrl;


//API FUNCTION TO FETCH DATA
export const fetchData = async (url, params) => {
    try {
        if (params) {
            const response = await axios.get(url, { params: params ? params : '' });
            return response?.data
        } else {
            const response = await axios.get(url);
            return response?.data
        }
    } catch (error) {
        console.error('API Error:', error);
    }
};

export const fetchPostData = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.log('API Error:', error);
        return error?.response?.data;
    }
};