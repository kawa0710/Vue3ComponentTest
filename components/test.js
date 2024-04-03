const test = { 
  template: `<div> {{ item }} <p>{{ prop }}</p></div>`,
  props: ['prop'],
  data: () => ({ item: 'test' }),
};
export { test };
export default test;