import { createContext, useContext } from "react";
import { ClassesStore } from "./Classesstore";

export class Rootstore {
    classes: ClassesStore


    constructor() {  
        this.classes = new ClassesStore()
    }


}


export const rootstore = new Rootstore()
const StoreContext = createContext(rootstore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)