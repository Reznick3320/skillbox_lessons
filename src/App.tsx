import React from "react";
import "./main.global.css"
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { useToken } from "./hooks/useToken";
import { CardsList } from "./shared/CardsList";
import {Dropdown} from "./shared/Dropdown";
import {tokenContext} from "./shared/context/tokenContext";


function AppComponent() {
    const [token] = useToken();
    const { Provider } = tokenContext;
     return (
         <Provider value={token}>
               <Layout>
                   <Header/>
                        <Content>
                            <CardsList />
                            <div style={{ padding: 20 }}>
                                <Dropdown
                                    onClose={() => console.log('closed')}
                                    onOpen={() => console.log('Opened')}
                                    isOpen={false}
                                    button={<button>Test</button>}
                                >
                                    <CardsList />
                                </Dropdown>
                            </div>
                        </Content>
               </Layout>
         </Provider>
    );
}

export const App = hot(() => <AppComponent />);
