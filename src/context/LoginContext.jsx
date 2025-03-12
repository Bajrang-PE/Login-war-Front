import { createContext, useState } from "react";
import { fetchData } from "../utils/ApiHooks";

export const LoginContext = createContext();

const LoginContextApi = ({ children }) => {

    //Globals
    const [showCmsLogin, setShowCmsLogin] = useState(false);
    //API Data
    const [widgetData, setWidgetData] = useState([])

    const getWidgetData = () => {
        fetchData('/hisutils/allWidgetConfiguration?dashboardFor=CENTRAL+DASHBOARD').then((data) => {
            if (data) {
                setWidgetData(data)
            } else {
                setWidgetData([])
            }
        })
    }

    return (
        <LoginContext.Provider value={{
            widgetData, getWidgetData,
            showCmsLogin, setShowCmsLogin
        }}>
            {children}
        </LoginContext.Provider>
    )

}

export default LoginContextApi