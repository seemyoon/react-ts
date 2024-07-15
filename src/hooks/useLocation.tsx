import {Location, useLocation} from "react-router-dom";

export const useCustomLocation = <T,>(): Location<T> => useLocation()