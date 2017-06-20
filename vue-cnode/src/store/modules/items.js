import {
    PUSH_ITEMS,
    NEW_ITEMS
} from '../mutations-type';

import {
    get_items
} from '../../apis/cnode';

const namespaced = true;

const state = {
    items: []
}

const mutations = {
    [PUSH_ITEMS](state, items){
        items.forEach(function(item){
            state.items.push(item);
        });
    },
    [NEW_ITEMS](state, items){
        state.items = items;
    }
}

const actions = {
    [PUSH_ITEMS]({commit}, param){
        get_items(param).then(function(res){
            commit(PUSH_ITEMS, res.data.data);
        })
    },
    [NEW_ITEMS]({commit}, param){
        get_items(param).then(function(res){
            commit(NEW_ITEMS, res.data.data);
        })
    }
}

export default{
    namespaced,
    state,
    mutations,
    actions
}