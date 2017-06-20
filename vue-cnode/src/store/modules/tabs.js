import {
    CHANGE_TAB
} from '../mutations-type';
const tabs = [
    {
        tag: 'all',
        zh: '所有'
    },{
        tag: 'ask',
        zh: '问答'
    },{
        tag: 'share',
        zh: '分享'
    },{
        tag: 'good',
        zh: '精华'
    },{
        tag: 'job',
        zh: '招聘'
    },{
        tag: 'dev',
        zh: '测试'
    }
];

const namespaced = true;

const state = {
    tabs: tabs,
    active: 'all'
}

const mutations = {
    [CHANGE_TAB](state, tag){
        state.active = tag;
    }
}

const actions = {
    
}

export default{
    namespaced,
    state,
    mutations,
    actions
}