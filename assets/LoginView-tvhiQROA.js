import{a as m}from"./axios-L6U4YIEh.js";import{_ as c,c as u,b as e,y as _,A as l,B as d,o as p}from"./index-ZODPC-yi.js";const f="/Vite-Week6-main1/assets/langyuanstorelogo-mrSL2mIV.svg";var h={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/Vite-Week6-main1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:g}=h,w={data(){return{user:{username:"",password:""}}},methods:{login(){const r=`${g}/v2/admin/signin`;m.post(r,this.user).then(s=>{alert(s.data.message);const{token:a,expired:n}=s.data;document.cookie=`hexToken=${a}; expires=${new Date(n)};`,this.$router.push("/admin/order")}).catch(s=>{alert(s.response.data.message)})}}},v={class:"container-fluid mt-5"},x={class:"row justify-content-center"},P=e("img",{class:"img-fluid",style:{width:"150px",height:"150px"},src:f,alt:""},null,-1),b=e("h1",{class:"h3 mb-3 font-weight-normal text-center"},"後台管理員登入",-1),V={class:"col-4"},y={class:"form-floating mb-3"},A=e("label",{for:"username"},"Email address",-1),E={class:"form-floating"},k=e("label",{for:"password"},"Password",-1),I=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function U(r,s,a,n,t,i){return p(),u("div",v,[e("div",x,[P,b,e("div",V,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=_((...o)=>i.login&&i.login(...o),["prevent"]))},[e("div",y,[l(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.username=o),class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,t.user.username]]),A]),e("div",E,[l(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.password=o),class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[d,t.user.password]]),k]),I],32)])])])}const L=c(w,[["render",U]]);export{L as default};