import React, {useState} from "react";
import "./main.global.css"
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { useToken } from "./shared/hooks/useToken";
import { CardsList } from "./shared/CardsList";
import { Dropdown } from "./shared/Dropdown";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postContext";
import { commentContext } from "./shared/context/commentContext";

import { createStore } from "redux";
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer} from "./shared/store";


const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    const [token] = useToken();
    const TokenProvider = tokenContext.Provider;
    const CommentProvider = commentContext.Provider;
     return (
         <Provider store={store}>
             <CommentProvider value={{
                 value: commentValue,
                 onChange: setCommentValue,
             }}>
                 <TokenProvider value={token}>
                     <UserContextProvider>
                         <PostsContextProvider>
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
                         </PostsContextProvider>
                     </UserContextProvider>
                 </TokenProvider>
             </CommentProvider>
         </Provider>
    );
}

export const App = hot(() => <AppComponent />);
