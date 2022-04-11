import styled from 'styled-components';

export const GridDiv = styled.div`
    min-height: 87vh;
    width: 85%;
    margin: auto;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;
    /* background-color: red; */
`;

export const LeftDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0.05rem 0.05rem 0.5rem 0.05rem rgb(196, 194, 194);
    border: none;
    border-radius: 0.1rem;
    background-color: white;
`;

export const ImageDiv = styled.div`
    padding: 0.5rem;
    margin-right: 2rem;
    height: 70%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
`;

export const ItemImage = styled.img`
    height: 80%;
    width: 100%;
    margin-bottom: 0.2rem;
`;

export const QuantityInputDiv = styled.div`
    /* padding: 0.1em 0.5rem; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

export const Quantity = styled.p`
    padding: 0.2rem 1.2rem;
    margin: 0 0.3rem;
    border: 0.05rem solid grey;
    text-align: center;
`;

export const QuantityInput = styled.input`
    text-align: center;
    width: 30%;
`;

export const CartItems = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid rgb(226, 226, 226);
    background-color: white;
`;

export const ProductDetails = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: aqua; */
`;

export const EmptyCart = styled.h1`
    margin-top: 7rem;
    color: red;
    text-align: center;
    /* background-color: green; */
`;

export const ProductName = styled.h2`
    font-weight: normal;
`;

export const SellerName = styled.h3`
    margin-top: 0.5rem;
    font-weight: normal;
`;

export const ProductPrice = styled.h2`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const CartHeader = styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid rgb(226, 226, 226);
`;

export const DeliverDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PlaceOrderDiv = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: pink; */
`;

export const Remove = styled.h2`
    width: 7rem;
    cursor: pointer;
    /* background-color: red; */
    :hover{
        color: #2874f0;
    }
`;

// ***************Right Div******************\\

export const RightDiv = styled.div`
    height: 17rem !important;
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0.05rem 0.05rem 0.5rem 0.05rem rgb(196, 194, 194);
    border: none;
    border-radius: 0.1rem;
    background-color: white;
`;

export const PriceDiv = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid rgb(226, 226, 226);
    /* background-color: yellow; */
`;

export const PriceHead = styled.h3`
    color: grey;
`;

export const ProductsPriceDiv = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 0.1rem solid rgb(226, 226, 226);
`;

export const PriceFlexDiv1 = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

export const PriceFlexDiv2 = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

export const Category = styled.h3`
    font-weight: normal;
`;

export const Price = styled.h3`
    font-weight: normal;
`;

export const TotalPriceDiv = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellowgreen; */
`;

export const TotalPriceFlexDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;