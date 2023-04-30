import hello2 from "./hello.js";
export { default as hello} from './hello.js' // import and export
export const sum = (items) => items.reduce((acc, item) => acc + item, 0)
// export const hello = () => console.log('hello')

// export default () => console.log('hello1')
// export const hello = hello2
