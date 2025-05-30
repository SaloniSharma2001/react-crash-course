# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

If you are using React then just use comman
`npx create=react-app` for vite you can use `npm create vite` to use vite tool.
TO start the project we can do `npm run dev` for vite tool and `npm start` will do for react.

We will work in src folder and we can see a java script file having extension as jsx which also supports html syntax in that.
This .jsx is not supported by browser directly hence we need build tool under the hood to convert this code in browser supportable.
In here in our configuration we have vite for that. Infact even the imported css file does't work directly with the browser.

main.jsx is the entry point of the project. Package.json have all the external dependecies/libraries we are going to use in our project.
Now main.jsx starts with ReactDOM.createRoot(....), this method takes a pointer in our html element.

Now this root reaches out to html body having `<div id="root"></div>`
and then render the jsx file.

**Extensions used:** Live Serve + Live Preview + Prettier(Format on save) 
**Settings:** Word Wrap + Tab Size 2
**React Component:** Components are functions that returns jsx code. These component can be used in other jsx code as html.
In components we will create custom react components however App.jsx will not be part of components as it is our root component.

 Convention that we use for creating react compnents are:
We use first letter as cap for naming both component and the function we are going to export.

Remember, elements that start with small letter are considered as default elements hence we should use Cap start for custom one otherwise while redering it, our build tool will check for default element even for custom one and won't find it.

**Passing data to component using Props:** Short form fo properties, is a mechanism for passing data from parent components to child components in React. They are read-only and enable the customization and dynamic of components.

Dedicated css files to component must have name.modules.css kind of structure because it specifies we are going to use css modules for it. We can check the reason behind it on https://github.com/css-modules/css-modules
css module is an approach implemented by project made by vite or react. Where the custom css classes that we declare gets unique class names to avoid class name conflicts. by using module extension we let it know that we want to css module use feature.

During eventListner implementation in react if we write change a value and store the change in a variable and try to use it somewhere in the code. It won't work as browser receives already build code for broswer compatibility what we called jsx snapshot and only rendered once. If you want to do some live changes on UI and want to reflect these changes in other component or UI part, react provides us with something called useState. Such type of functions are technically standard javascript functions however in react we call them react hooks. Other hook names starts with 'use' as well.

useState hook stores the current state somewhere in memory in react, when we call a state updating funtion in useState it also stores the new value somewhere in the memory. React will re-execute the function in which this state was registered. So it will call the component function, compare the latest snapshot with the last one and only accomodates the latest changes.

   `//useState function can take anything in params but returns a 2D array`
   `const stateData = useState('');`
   `//This stateData array will have exactly two elements, previous state and current state`
   `stateData[0]; //Current value`
   `stateData[1]; //state updating function`
   `let enteredBody = '';`

   **Lifting state up:** If you have an event occuring in component A but you want the consequences of that change in component B, you'll have to lift the state up to a component that has the access to both the component.

   **Children Prop:** It is a reversed props which refers to any content passed between opening and closing bracket of the custom component.

   **open props** used in this project is a native HTML boolean attribute specific to the <dialog> element.
   `(property) React.DialogHTMLAttributes<HTMLDialogElement>.open?: boolean | undefined`

**App Router vs Pages Router**

Installing react icons
`npm install react-icons`

It converntion to use on with our prop name if the prop is passing function as a value.

**Did you know?**
By default if we add buttons to a from, if they are pressed, they will submit that form. This means that a submit event will be generated and send an HTTP request to the server that's serving the website. But this also means that Cancel button if not handled on our hand willalso trigger the submission.

 There is a rule like if we update state and that new state is based on that previous state value we should actually pass a function to set post. For example, an arrow function. The reason for that is, react internally doesn't execute state updating functions instantly.  But it schedules those state updates and that in case we have multiple state updates after each other, we could potentially update our state based on some old state. So using arrow function, is a way of making sure that React ensures that we get the lastest correct state for those state update even if we have multiple pending state updates.

 If we want to transform our objects into array of JSX elements one element per object. We can't out array of JSX element in our code, because it'll be rendered to the screen. We cannot array of JSX elements in our JSX code with these quarterly braces.
 We could output element of object array but that sould be pure JS objexts, not of JSX element.

 each list item must have a unique key prop is a requirement by React which ensures that React is able to ender and update lists efficiently.  If we are mapping an array to an array of JSX elements we should add a speacial key  prop to the JSX element which is a prop that must not be used in our component or accepted like a prop. It is a built -in prop supposrted by React. This prop should receive a value which is guaranteed to be uniqure for every JSX array element.