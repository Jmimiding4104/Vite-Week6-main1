import{z as s}from"./index-ZODPC-yi.js";import{S as _}from"./sweetalert2.all-kdo4UVoD.js";import{a as o}from"./axios-L6U4YIEh.js";import{b as l}from"./bootstrap.esm-owtkFIww.js";var n={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/Vite-Week6-main1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};window.bootstrap=l;const{VITE_APP_API_URL:r,VITE_APP_API_NAME:e}=n,P=s("cartStore",{state:()=>({cart:[],final_total:0,total:0}),actions:{getCart(){o.get(`${r}/v2/api/${e}/cart`).then(t=>{this.cart=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total,console.log("pinia",this.final_total)})},addCart(t){const i={product_id:t,qty:1};o.post(`${r}/v2/api/${e}/cart`,{data:i}).then(a=>{_.fire(a.data.message),this.getCart()}).catch(a=>{console.log(a)})}}});export{P as c};
