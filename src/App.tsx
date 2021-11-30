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
import {PostsContextProvider} from "./shared/context/postContext";
import {commentContext} from "./shared/context/commentContext";


function AppComponent() {
    const [commentValue, setCommentValue] = useState('');

    const [token] = useToken();

    const CommentProvider = commentContext.Provider;
     return (
         <CommentProvider value={{
             value: commentValue,
             onChange: setCommentValue,
         }}>
             <tokenContext.Provider value={token}>
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
             </tokenContext.Provider>
         </CommentProvider>
    );
}

export const App = hot(() => <AppComponent />);
