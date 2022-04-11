import styled from 'styled-components';

export const OrdersDiv = styled.div`
    margin-top: 2rem;
    min-height: 90vh;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
`;

export const OrderedItems = styled.div`
    min-height: 7rem;
    min-width: 50%;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 0.05rem solid grey;
    border-radius: 0.4rem;
    cursor: pointer;
    background-color: white;
`;

export const ItemImage = styled.img`
    height: 4rem;
    width: 10%;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NoOrders = styled.h1`
    margin-top: 2rem;
    color: red;    
`;