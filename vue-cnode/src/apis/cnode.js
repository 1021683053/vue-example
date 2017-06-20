import axios from 'axios';

// 获取列表数据
export const get_items = param=>{
    console.log(param);
    return axios.get('/api/v1/topics', {params: param});
};