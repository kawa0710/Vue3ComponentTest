//import Test from './components/test.js'; //取export default
import * as m1 from './components/test.js'; //有多個export
//console.log(Test);


const app = Vue.createApp({
  data: () => ({ someData: 'prop' }),
});
//app.component('test', Test);
app.component('test', m1.test);
app.mount('#app');