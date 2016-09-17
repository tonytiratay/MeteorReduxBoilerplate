import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../layouts/MainLayout.jsx';
import Home from '../components/Home.jsx';



FlowRouter.route('/', {
    name: 'home',
    action: function() {
      mount(MainLayout, {content: <Home />});
    }
});


//
// let AdminDash = FlowRouter.group({
//     prefix: "/admin"
// });
//
// AdminDash.route('/', {
//   name: 'admin',
//   action: function() {
//     mount(MainLayout, {content: <Admin />});
//   }
// });
//
// let Dashboard = FlowRouter.group({
//     prefix: "/me"
// });
//
//
// Dashboard.route('/', {
//   name: 'dashboard',
//   action: function() {
//     mount(MainLayout, {content: <Home />});
//   }
// });
//
// Dashboard.route('/private', {
//   name:'private',
//   action: function() {
//     mount(MainLayout, {
//       content: <PrivateArea />
//     });
//   }
// });
//
// Dashboard.route('/ressources/new', {
//   action: function() {
//     mount(MainLayout, {
//       content: <RessourcesForm/>
//     });
//   }
// });
//
// Dashboard.route('/ressources/new:title', {
//   action: function(params) {
//     mount(MainLayout, {
//       content: <RessourcesForm title={params.title}/>
//     });
//   }
// });
//
// Dashboard.route('/framapads/:id', {
//   name:'padView',
//   action: function(params) {
//     mount(MainLayout, {
//       content: <FramaDetail id={params.id} />
//     });
//   }
// });
//
// Dashboard.route('/ressources/:id', {
//   name:'ressourceView',
//   action: function(params) {
//     mount(MainLayout, {
//       content: <RessourceDetail id={params.id} />
//     });
//   }
// });
