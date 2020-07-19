import styled from 'styled-components';

export const MainHeader = styled.header`
    background: #fff;
    height: 46px;
    border-bottom: 2px solid #ddd;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 7px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    border: 1px solid #ddd;
    border-radius: 4px;

    input {
        border: none;
    }
    svg {
        fill: #ddd;
    }
`;

export const MenuContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg,
    img {
        margin: 0 10px;
        height: 26px;
        width: 26px;
    }
`;
