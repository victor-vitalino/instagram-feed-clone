import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, FormContainer } from './styles';

import api from '../../services/api';

function New() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // pega os dados
        setValues({ ...values, [name]: value });
    };
    const handleImage = (e) => {
        const image = e.target.files[0];
        setValues({ ...values, image });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const data = new FormData();

        data.append('image', values.image);
        data.append('author', values.author);
        data.append('place', values.place);
        data.append('description', values.description);
        data.append('hashtags', values.hashtags);

        await api.post('posts', data);
        setLoading(false);
        history.push('/');
    };
    return (
        <>
            <Container>
                <h2>Adicionar nova publicação</h2>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <input type="file" onChange={handleImage} />

                        <input
                            type="text"
                            name="author"
                            placeholder="Autor do post"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <input
                            type="text"
                            name="place"
                            placeholder="Local do post"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Descrição do post"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <input
                            type="text"
                            name="hashtags"
                            placeholder="Hashtags do post"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <button disabled={loading} type="submit">
                            Enviar Post
                        </button>
                    </form>
                </FormContainer>
            </Container>
        </>
    );
}

export default New;
