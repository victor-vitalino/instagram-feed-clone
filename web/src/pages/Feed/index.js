import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import {
    PostsContainer,
    Post,
    PostHeader,
    UserInfo,
    PostFooter,
    Actions,
} from './styles';

import api from '../../services/api';

const socket = io('http://localhost:3333');

function Feed() {
    const [posts, setPosts] = useState([]);

    const handleLike = (id) => {
        api.post(`/posts/${id}/like`);
    };

    function registerSocket() {
        socket.on('post', (newPost) => {
            setPosts([newPost, ...posts]);
        });
        socket.on('like', (likedPost) => {
            setPosts(
                posts.map((post) =>
                    post._id === likedPost._id ? likedPost : post
                )
            );
        });
    }
    useEffect(() => {
        async function handlePosts() {
            const response = await api.get('/posts');
            setPosts(response.data);
        }
        handlePosts();
    }, []);

    registerSocket();
    return (
        <PostsContainer>
            {posts.map((post) => (
                <Post key={post._id}>
                    <PostHeader>
                        <UserInfo>
                            <div className="profileImg">
                                <img
                                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                                    alt="ops"
                                />
                            </div>
                            <div className="profileText">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                        </UserInfo>
                        <img src={more} alt="Mais" />
                    </PostHeader>
                    <img
                        src={`http://localhost:3333/files/${post.image}`}
                        alt=""
                    />
                    <PostFooter>
                        <Actions>
                            <button
                                type="button"
                                onClick={() => handleLike(post._id)}
                            >
                                <img src={like} alt="" />
                            </button>
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </Actions>
                        <strong>{post.likes} curtidas</strong>
                        <p>
                            {post.description}
                            <span>{post.hashtags}</span>
                        </p>
                    </PostFooter>
                </Post>
            ))}
        </PostsContainer>
    );
}

export default Feed;
