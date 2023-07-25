import { ReactNode, useEffect, useState } from "react"
import { MainService } from "../services/main";
import MainContext from "../context/main";

type Props = {
    children: ReactNode
}

export default function MainProvider (props: Props){
    const {children} = props;
    const [mainController, setMainController] = useState<MainService | null>(null);
    
    useEffect(()=> {
      setMainController(new MainService());
    },[])

    return (
        <MainContext.Provider value={mainController}>
            {mainController !== null ?
                children: null
            }
        </MainContext.Provider>
    )
}