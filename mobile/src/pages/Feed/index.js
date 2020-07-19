import React, {useState, useEffect} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import io from 'socket.io-client';

// import { Container } from './styles';

import logo from '../../assets/logo.png';
import camera from '../../assets/camera.png';
import send from '../../assets/send.png';

import api from '../../services/api';
import Post from '../../components/Post';

const socket = io('http://192.168.0.106:3333');

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const handleLike = (id) => {
        api.post(`/posts/${id}/like`);
    };

    const registerSocket = () => {
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
    };

    async function handlePosts() {
        const response = await api.get('/posts');
        setPosts(response.data);
    }
    registerSocket();

    useEffect(() => {
        handlePosts();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(post) => post._id}
                renderItem={({item}) => (
                    <Post item={item} handleLike={() => handleLike(item._id)} />
                )}
            />
        </View>
    );
};

Feed.navigationOptions = (screenProps) => ({
    headerTitle: () => <Image source={logo} />,
    headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
            <Image source={send} style={styles.icon} />
        </TouchableOpacity>
    ),
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                screenProps.navigation.navigate('New');
            }}>
            <Image source={camera} style={styles.icon} />
        </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItens: 'center',
    },
    headerRightContainerStyle: {
        marginRight: 10,
        justifyContent: 'center',
        alignItens: 'center',
    },
    headerTitleAlign: 'center',
    headerBackTitle: null,
    headerTintColor: '#000',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        height: 24,
        width: 24,
    },
});

export default Feed;
