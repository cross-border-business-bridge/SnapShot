/**
   The main idea of using the context is to allow your components to access some global data and re-render
   when that global data is changed. Context solves the props drilling problem: when you have to pass down
   props from parents to children.

   https://dmitripavlutin.com/react-context-and-usecontext/
 */
import {createContext} from "react";

const Context = createContext();
Context.displayName = 'PhotoContext';

export default Context
