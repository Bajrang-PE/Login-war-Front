import { createContext, useState } from "react";
import { fetchData } from "../utils/ApiHooks";

export const LoginContext = createContext();

const LoginContextApi = ({ children }) => {

    //Globals
    const [showCmsLogin, setShowCmsLogin] = useState(false);
    const [showForgotPass, setShowForgotPass] = useState(false);
    //API Data
    const [widgetData, setWidgetData] = useState([])

    //dropdowns
    const [hintQuestionDrpDt,setHintQuestionDrpDt] = useState([]);

    const getWidgetData = () => {
        fetchData('http://10.226.25.164:8024/hisutils/allWidgetConfiguration?dashboardFor=CENTRAL+DASHBOARD').then((data) => {
            if (data) {
                setWidgetData(data)
            } else {
                setWidgetData([])
            }
        })
    }

    const getHintQuestionDrpData = () => {
        fetchData('/login/hntQueDropDown').then((data) => {
            if (data) {
                setHintQuestionDrpDt(data)
            } else {
                setHintQuestionDrpDt([])
            }
        })
    }

    return (
        <LoginContext.Provider value={{
            widgetData, getWidgetData,
            showCmsLogin, setShowCmsLogin,
            showForgotPass, setShowForgotPass,
            getHintQuestionDrpData,hintQuestionDrpDt
        }}>
            {children}
        </LoginContext.Provider>
    )

}

export default LoginContextApi