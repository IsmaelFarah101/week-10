import Router from 'vue-router'
import StateList from '../components/StateList'
import About from '../components/About'
import StateDetail from '../components/StateDetail'
//this is the vue router that changes the current working componenet in the vue application 
//to define it you have to import it and sppecifiy the url path

export default new Router({
    routes: [
        {
            path: '/',
            component: StateList
        },
        {
            path: '/about',
            component:About
        },
        {
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})