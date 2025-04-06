import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following }, 
    { path: '/upload', component: Upload, layout : null}, // Add more routes as needed for your app.
]

const privateRoute = [

]

export { publicRoute, privateRoute }