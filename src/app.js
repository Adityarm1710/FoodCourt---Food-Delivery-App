import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import { Provider } from "react-redux";
import appStore from "./constants/appStore";
import Cart from "./components/Cart";


//using vanilla javascript printing of hello world
// const newelement= document.createElement('h1');
// newelement.innerHTML="This is hello from Javascript";
// const toberendered = document.getElementById('root');
// toberendered.appendChild(newelement);

//using react by createelement method
// const element = React.createElement("div",{id:"parent1"},
// [
//   React.createElement("h1",{id:"child1"},"I am child1 of the parent1"),
//   React.createElement("h2",{id:"child2"},"I am child2 of the parent1")
// ]
// );
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//using jsx
// const func= ()=> "Hello! I am normal JavaScript Function";
// const jsxelem=(
// <div id="parent">
// <h1>I am JSX ReactJS element</h1>
// {func()}
// <h2>I am also JSX React element</h2>
// </div>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxelem);

const Rootelement = ()=>{
  return (
  < Provider store={appStore}>
    <div className="applayout">
    <Header/>
    <Outlet/>
  </div>
  </Provider>
)};

const appRouter= createBrowserRouter([
    {
      path:"/",
      element: <Rootelement/>,
      errorElement: <Error/>,
      children: [
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Contact",
          element: <Contact/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenuCard/>

        }
      ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
