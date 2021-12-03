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
import { Action, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, SET_TOKEN, TRootState } from "./shared/store/store";
import thunk, { ThunkAction } from "redux-thunk";



export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const saveToken = (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch, setState) => {
    const token = localStorage.getItem('token') || window.__token__;
    dispatch({type: SET_TOKEN, token: token})
}

function AppComponent() {
    const [commentValue, setCommentValue] = useState('');
    const CommentProvider = commentContext.Provider;

    useEffect(() => {
        //@ts-ignore
        store.dispatch(saveToken());
        
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
