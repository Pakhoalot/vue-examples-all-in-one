import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import MarkdownEditor from '@/views/MarkdownEditor.vue';
import GithubCommits from '@/views/GithubCommits.vue';
import GridView from '@/views/GridView.vue';
import TreeView from '@/views/TreeView.vue';
import GraphView from '@/views/GraphView.vue';
import ModalView from '@/views/ModalView.vue';
import ElasicHeader from '@/views/ElasicHeader.vue';
import WrapperView from '@/views/WrapperView.vue';
import ValidationView from '@/views/ValidationView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/markdown-editor',
      name: 'markdown-editor',
      component: MarkdownEditor,
    },
    {
      path: '/github-commits',
      name: 'github-commits',
      component: GithubCommits,
    },
    {
      path: '/grid-view',
      name: 'grid-view',
      component: GridView,
    },
    {
      path: '/tree-view',
      name: 'tree-view',
      component: TreeView,
    },
    {
      path: '/graph-view',
      name: 'graph-view',
      component: GraphView,
    },
    {
      path: '/modal-view',
      name: 'modal-view',
      component: ModalView,
    },
    {
      path: '/elasic-header',
      name: 'elasic-header',
      component: ElasicHeader,
    },
    {
      path: '/wrapper-view',
      name: 'wrapper-view',
      component: WrapperView,
    },
    {
      path: '/validation-view',
      name: 'validation-view',
      component: ValidationView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
