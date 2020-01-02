import Home from "./page/home"
import header from "./page/header"
import new1 from "./page/new1"
import new2 from "./page/new2"

export default new VueRouter({
    routes:[{
        path:"/home",
        name:"home",
        components:{
            header,
            Home
        }
    },{
        path:"/new1",
        name:"new1",
        components:{
            header,
            new1
        }
    },{
        path:"/new2",
        name:"new2",
        components:{
            header,
            new2
        }
    },]
})
