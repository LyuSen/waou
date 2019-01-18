// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// Vue.use(Vuex)
//
// const state = {
//   msg: "",
//   count: 0
// }
//
// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   GETDATA (state, res) {
//     // axios.get('http://t.yushu.im/v2/movie/coming_soon').then((res) => {
//     //   state.msg = res.data
//     // })
//     state.msg='sdsd'
//   }
// }
//
// const store = new Vuex.Store({
//   state,
//   mutations
// })
// export default store     //导出，并在src目录下的main.js中导入


import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);

const state = {
  msg:[
    {
      "goods_name":"农夫山泉17.5度橙6斤装铂金版",
      "share_src": "../../static/cutPic/1.png",
      "sec_src": "../../static/cutPic/农夫山泉17.5度橙6斤装铂金版.png",
      "top_src":"../../static/cutPic/橙子主图.png",
      "det_src":"../../static/cutPic/橙子详情.png",
      "pic_id": "0",
      "price": 69.00,
      "oldPri":125.00,
      "type":1
    },
    {
      "goods_name":"大凉山红颜草莓约3斤",
      "share_src": "../../static/cutPic/2.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/草莓主图.png",
      "det_src":"../../static/cutPic/草莓详情.png",
      "pic_id": "1",
      "price": 125.00,
      "oldPri":159.00,
      "type":1
    },
    {
      "goods_name":"开小差爆米花100g*3（奶油味+焦糖味+芝麻味）",
      "share_src": "../../static/cutPic/3.png",
      "sec_src": "../../static/cutPic/开小差爆米花100g-3(奶油味+焦糖味+芝麻味).png",
      "top_src":"../../static/cutPic/爆米花主图.png",
      "det_src":"../../static/cutPic/爆米花详情.png",
      "pic_id": "2",
      "price": 224.00,
      "oldPri":420.00,
      "type":1
    },
    {
      "goods_name":"肉松饼 30克*6",
      "share_src": "../../static/cutPic/4.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/肉松饼主图.png",
      "det_src":"../../static/cutPic/肉松饼详情.png",
      "pic_id": "3",
      "price": 32.00,
      "oldPri":69.00,
      "type":1
    },
    {
      "goods_name":"智能感体按摩椅",
      "share_src": "../../static/cutPic/5.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/旅行箱主图.png",
      "det_src":"../../static/cutPic/旅行箱详情.png",
      "pic_id": "4",
      "price": 25.00,
      "oldPri":59.00,
      "type":4
    },
    {
      "goods_name":"俄罗斯制造 木瓜生物活性牙膏",
      "share_src": "../../static/cutPic/6.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/牙膏主图.png",
      "det_src":"../../static/cutPic/牙膏详情.png",
      "pic_id": "5",
      "price": 7199.00,
      "oldPri":8000.00,
      "type":4
    }
  ],
  count:1,
  food:[
    {
      "goods_name":"农夫山泉17.5度橙6斤装铂金版",
      "share_src": "../../static/cutPic/1.png",
      "sec_src": "../../static/cutPic/农夫山泉17.5度橙6斤装铂金版.png",
      "top_src":"../../static/cutPic/橙子主图.png",
      "det_src":"../../static/cutPic/橙子详情.png",
      "pic_id": "0",
      "price": 69.00,
      "oldPri":125.00,
      "type":1
    },
    {
      "goods_name":"大凉山红颜草莓约3斤",
      "share_src": "../../static/cutPic/2.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/草莓主图.png",
      "det_src":"../../static/cutPic/草莓详情.png",
      "pic_id": "1",
      "price": 125.00,
      "oldPri":159.00,
      "type":1
    },
    {
      "goods_name":"开小差爆米花100g*3（奶油味+焦糖味+芝麻味）",
      "share_src": "../../static/cutPic/3.png",
      "sec_src": "../../static/cutPic/开小差爆米花100g-3(奶油味+焦糖味+芝麻味).png",
      "top_src":"../../static/cutPic/爆米花主图.png",
      "det_src":"../../static/cutPic/爆米花详情.png",
      "pic_id": "2",
      "price": 224.00,
      "oldPri":420.00,
      "type":1
    },
    {
      "goods_name":"肉松饼 30克*6",
      "share_src": "../../static/cutPic/4.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/肉松饼主图.png",
      "det_src":"../../static/cutPic/肉松饼详情.png",
      "pic_id": "3",
      "price": 32.00,
      "oldPri":69.00,
      "type":1
    }
  ],
  good:[
    {
      "goods_name":"智能感体按摩椅",
      "share_src": "../../static/cutPic/5.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/旅行箱主图.png",
      "det_src":"../../static/cutPic/旅行箱详情.png",
      "pic_id": "4",
      "price": 25.00,
      "oldPri":59.00,
      "type":4
    },
    {
      "goods_name":"俄罗斯制造 木瓜生物活性牙膏",
      "share_src": "../../static/cutPic/6.png",
      "sec_src": "../../static/cutPic/大凉山红颜草莓约3斤.png",
      "top_src":"../../static/cutPic/牙膏主图.png",
      "det_src":"../../static/cutPic/牙膏详情.png",
      "pic_id": "5",
      "price": 7199.00,
      "oldPri":8000.00,
      "type":4
    }
  ],
  showBottomNav:true
};
const mutations = {
  // getData(state,res){
  //   // axios.get('../../static/shareShop.json').then((res)=>{
  //     state.msg = res.data
  //   })
  // },
  addData(state,res){
      state.count += 1
  }
};
const actions = {
  increment (context) {
  context.commit('getData') //调用mutations里的方法，而不是自己直接修改State
}
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
});
export default store
