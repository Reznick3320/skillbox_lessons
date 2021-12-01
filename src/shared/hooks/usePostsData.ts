import { useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { TRootState } from "../store";

interface IPostItem {
    post: {
        id: string,
        title: string,
        img: string
    }
    author: {
        title: string,
        img: string
    }
}

export function usePostsData() {
    const [posts, setPosts] = useState<IPostItem[]>([]);
    const token = useSelector<TRootState, string>(state => state.token)

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}` }
        })
            .then((resp) => {
                const posts = resp.data.data.children;
                const processedPosts = posts.map((post: any) => {
                    return {
                        ...post,
                        post: {
                            id: post.data.id,
                            title: post.data.title,
                            img: post.data?.thumbnail
                        },
                        author: {
                            title: post.data?.sr_datail?.display_name,
                            img: post.data?.sr_detail?.icon_img
                        }
                    }
                })
                setPosts(processedPosts);
            })
            .catch(console.log)
    }, [token])

    return [posts]
}