import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';
import save from '../../assets/save.png';
// import { Container } from './styles';

function Post({item, handleLike}) {
    return (
        <View style={styles.feedItem}>
            <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{item.author}</Text>
                    <Text style={styles.place}>{item.place}</Text>
                </View>

                <Image source={more} />
            </View>

            <Image
                style={styles.feedImage}
                source={{uri: `http://192.168.0.106:3333/files/${item.image}`}}
            />

            <View style={styles.feedItemFooter}>
                <View style={styles.actionsContainer}>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.action}
                            onPress={handleLike}>
                            <Image source={like} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.action}
                            onPress={() => {}}>
                            <Image source={comment} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.action}
                            onPress={() => {}}>
                            <Image source={send} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {}}>
                        <Image source={save} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.likes}>{item.likes} Curtidas</Text>
                <Text style={styles.description}>{item.description} </Text>
                <Text style={styles.hashtags}>{item.hashtags} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    feedItem: {
        marginTop: 20,
        backgroundColor: '#fff',
        paddingVertical: 5,
    },
    feedItemHeader: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {},
    name: {
        fontSize: 14,
        color: '#000',
    },
    place: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    feedImage: {
        width: '100%',
        height: 400,
        marginVertical: 15,
    },
    feedItemFooter: {
        marginHorizontal: 15,
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actions: {
        flexDirection: 'row',
        width: 100,
    },
    action: {
        marginRight: 5,
    },
    likes: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        lineHeight: 18,
        color: '#000',
    },
    hashtags: {
        color: '#7159c1',
    },
    icon: {
        height: 24,
        width: 24,
    },
});

export default Post;
