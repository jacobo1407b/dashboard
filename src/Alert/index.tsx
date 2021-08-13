import { useState, createContext, FunctionComponent, useContext } from 'react'
import Transition from "react-transition-group/Transition";
import { IData, IAlert, inits } from 'typesreact'


const globalData: IData = {
    type: "info",
    text: "",
    open: false
}
const defaultStyle = {
    position: "fixed",
    top: "20px",
    right: "-270px",
    zIndex: "50000",
};
const DataContext = createContext({
    globalData: globalData,
    setGlobalData: () => { }
})


export const AlertProvider: FunctionComponent<IAlert> = ({ children, duration }): JSX.Element => {

    const setGlobalData = (data: IData) => {
        setState({ ...state, globalData: data })
    }
    const initState = {
        globalData: globalData,
        setGlobalData: setGlobalData
    }
    const [state, setState] = useState<inits>(initState)

    const transitionStyles: any = {
        entered: {
            transform: "translateX(-100%)",
            transition: `transform ${duration}ms ease-in-out`,
        },
        exiting: {
            transform: "translateX(100%)",
            transition: `transform ${duration}ms ease-in-out`,
        },
        exited: {
            right: "-270px",
        },
    };
    return (
        <DataContext.Provider value={state}>
            <Transition in={state.globalData.open} unmountOnExit timeout={400} >
                {(state) => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        <div className="alert alert-error">
                            <div className="flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                </svg>
                                <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
            {children}
        </DataContext.Provider>
    )
}

AlertProvider.defaultProps = {
    duration: 300
}

export const useAlert = (): any => {
    const { globalData, setGlobalData } = useContext<inits>(DataContext);
    return function setAlert(tipe: string, text: string){
        setGlobalData({
            ...globalData,
            open: true,
            tipe,
            text
        })
    }
}