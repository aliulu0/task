import {createContext, useContext, useState} from 'react';

const ListContext = createContext();

const ListProvider = ({children}) => {
    const [panelList, setPanelList] = useState([]);

    const values = {
        panelList,
        setPanelList,
    }
    return <ListContext.Provider value={values}>{children}</ListContext.Provider>
}

export const useList = () => useContext(ListContext);
export default ListProvider;