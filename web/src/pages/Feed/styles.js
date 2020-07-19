import styled from 'styled-components';

export const PostsContainer = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 50px auto;
    padding: 0 30px;
`;

export const Post = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

    > img {
        width: 100%;
    }
`;

export const PostHeader = styled.div`
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    .profileImg {
        img {
            margin-top: 2px;
            border-radius: 50%;
            border: 1px solid red;
            height: 40px;
        }
        padding-right: 5px;
    }

    .profileText {
        display: flex;
        flex-direction: column;
    }
    span {
        font-size: 14px;
        color: #262626;
    }
    .place {
        font-size: 12px;
        color: #262626;
        margin-top: 3px;
    }
`;

export const PostFooter = styled.div`
    padding: 20px;

    strong {
        font-size: 14px;
        color: #262626;
        font-weight: normal;
    }

    p {
        font-size: 14px;
        margin-top: 2px;
        line-height: 18px;

        span {
            color: #00376b;
            font-size: 14px;
            display: block;
        }
    }
`;
export const Actions = styled.div`
    button {
        background: transparent;
        border: 0;
        cursor: pointer;
    }
    img {
        height: 20px;
        margin-right: 10px;
    }
`;
