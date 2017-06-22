import axios from 'axios';

// 获取列表数据
export const get_items = param=>{
    return axios.get('/api/v1/topics', {params: param});
};

// 获取内容详情
export const get_topic = id=>{
    let param = {};
    param.mdrender = false;
    return axios.get(`/api/v1/topic/${id}`, {params: param})
        .then((res)=>{
            return res.data.data; 
        });
}