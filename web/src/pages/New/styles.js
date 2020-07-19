import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-weight: normal;
        margin-bottom: 10px;
    }
`;
export const FormContainer = styled.div`
    margin: 0 auto;
    max-width: 700px;
    width: 100%;

    border: 1px solid #ddd;
    padding: 10px;

    form {
        display: flex;
        flex-direction: column;

        input[type='text'] {
            margin: 5px 0;
            width: 100%;
            height: 30px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;

            padding-left: 10px;
        }
        button {
            height: 36px;
            background: #673ab7;
            border: none;
            color: #fff;

            font-size: 14px;
            transition: opacity 0.2s;

            :hover {
                opacity: 0.7;
            }
        }
    }
`;
