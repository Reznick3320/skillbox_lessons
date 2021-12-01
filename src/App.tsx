import React, {useEffect, useState} from "react";
import "./main.global.css"
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Dropdown } from "./shared/Dropdown";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postContext";
import { commentContext } from "./shared/context/commentContext";
import { createStore } from "redux";
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, setToken } from "./shared/store";


export const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    const CommentProvider = commentContext.Provider;

    useEffect(() => {
        const token = window.__token__;
        store.dispatch(setToken(token));
    })
     return (
         <Provider store={store}>
             <CommentProvider value={{
                 value: commentValue,
                 onChange: setCommentValue,
             }}>
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
             </CommentProvider>
         </Provider>
    );
}

export const App = hot(() => <AppComponent />);
