import React from "react";

import { MainService } from "../services/main";

const MainContext = React.createContext<MainService | null>(null);

export default MainContext;