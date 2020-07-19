import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    ActivityIndicator,
    KeyboardAvoidingView,
    Alert,
    Platform,
    View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// import { Container } from './styles';

import api from '../../services/api';

const New = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        image: null,
        preview: null,
        author: '',
        place: '',
        hashtags: '',
        description: '',
    });

    function handleSelectImage() {
        // biblioteca para pegar imagens
        ImagePicker.showImagePicker(
            {
                title: 'Selecionar Imagem',
            },
            (upload) => {
                // callback de upload de imagem
                if (upload.error) {
                    Alert.alert('Algo inesperado aconteceu');
                } else {
                    let prefix, ext;

                    // validando se a imagem possui um nome
                    if (upload.fileName) {
                        // caso seja ios a imagem vem com extenção heic
                        [prefix, ext] = upload.fileName.split('.');
                        ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
                    } else {
                        // caso seja uma foto tirada ano momento ela vem sem nome
                        prefix = new Date().getTime();
                        ext = 'jpg';
                    }

                    const preview = {
                        uri: upload.uri,
                    };
                    const image = {
                        uri:
                            Platform.OS === 'android'
                                ? upload.uri
                                : upload.uri.replace('file://', ''),
                        type: upload.type,
                        name: `${prefix}.${ext}`,
                        path: upload.path,
                    };
                    console.log(image);

                    setForm({...form, preview, image});
                }
            }
        );
    }

    async function handlePost() {
        try {
            setLoading(true);
            const data = new FormData();

            data.append('image', form.image);
            data.append('author', form.author);
            data.append('place', form.place);
            data.append('description', form.description);
            data.append('hashtags', form.hashtags);

            console.log(form.image);

            await api.post('posts', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; ',
                },
            });
            setLoading(false);
            navigation.navigate('Feed');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            {form.preview ? (
                <TouchableOpacity onPress={handleSelectImage}>
                    <Text
                        style={[
                            styles.selectButtonText,
                            // eslint-disable-next-line react-native/no-inline-styles
                            {textAlign: 'center'},
                        ]}>
                        Escolher outra Imagem
                    </Text>
                    <Image style={styles.preview} source={form.preview} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.selectButton}
                    onPress={handleSelectImage}>
                    <Text style={styles.selectButtonText}>
                        Selecionar na galeria
                    </Text>
                </TouchableOpacity>
            )}
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome do autor"
                placeholderTextColor="#999"
                value={form.author}
                onChangeText={(text) => {
                    setForm({...form, author: text});
                }}
            />
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome do Local"
                placeholderTextColor="#999"
                value={form.place}
                onChangeText={(text) => {
                    setForm({...form, place: text});
                }}
            />
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Descrição do post"
                placeholderTextColor="#999"
                value={form.description}
                onChangeText={(text) => {
                    setForm({...form, description: text});
                }}
            />
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Hashtags"
                placeholderTextColor="#999"
                value={form.hashtags}
                onChangeText={(text) => {
                    setForm({...form, hashtags: text});
                }}
            />
            <TouchableOpacity
                style={styles.shareButton}
                disabled={loading}
                onPress={handlePost}>
                {loading ? (
                    <ActivityIndicator size={24} color="#fff" />
                ) : (
                    <Text style={styles.shareButtonText}>Compartilhar </Text>
                )}
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: '#fff',
    },

    selectButton: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        borderStyle: 'dashed',
        height: 42,

        justifyContent: 'center',
        alignItems: 'center',
    },

    selectButtonText: {
        fontSize: 16,
        color: '#666',
    },

    preview: {
        width: 300,
        height: 200,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 4,
    },

    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 16,
    },

    shareButton: {
        backgroundColor: '#7159c1',
        borderRadius: 4,
        height: 42,
        marginTop: 15,

        justifyContent: 'center',
        alignItems: 'center',
    },

    shareButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF',
    },
});

New.navigationOptions = (screenProps) => ({
    headerTitle: 'Nova Publicação',
    headerTitleAlign: 'center',
    headerBackTitle: null,
    headerTintColor: '#000',
});

export default New;
