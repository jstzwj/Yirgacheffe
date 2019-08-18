import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false

import Library from './views/Library'
import ArtistsList from './components/ArtistsList'
import AlbumsList from './components/AlbumsList'
import SongsList from './components/SongsList'

const routes = [
  {
    path: '/',
    component: Library,
    children:[
      {
        path: '',
        components: {
          default: AlbumsList
        }
      }
    ]
  },
  {
    path: '/Albums',
    component: Library,
    children:[
      {
        path: '',
        components: {
          default: AlbumsList
        }
      }
    ]
  },
  {
    path: '/Artists',
    component: Library,
    children:[
      {
        path: '',
        components: {
          default: ArtistsList
        }
      }
    ]
  },
  {
    path: '/Songs',
    component: Library,
    children:[
      {
        path: '',
        components: {
          default: SongsList
        }
      }
    ]
  },
  {
    path: '/Welcome',
    component: Library,
    children:[
      {
        path: '',
        components: {
          default: ArtistsList
        }
      }
    ]
  },
]


const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
