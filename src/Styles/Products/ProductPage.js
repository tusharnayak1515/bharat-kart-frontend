import styled from 'styled-components';

export const ProductPageDiv = styled.div`
    min-height: 90vh;
    width: 90%;
    margin: auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: white;
`;

export const LeftDiv = styled.div`
    min-height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
`;

export const ProductImage = styled.img`
    height: 70%;
    width: 100%;
    margin-bottom: 2rem;
    border: 0.15rem solid rgb(226, 226, 226);
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightDiv = styled.div`
    min-height: 100%;
    width: 100%;
    padding: 0rem 1.5rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* background-color: green; */
`;

export const ProductName = styled.h2`
    font-size: 1.4rem;
    font-weight: normal;
`;

export const ProductPrice = styled.h1`
    margin-bottom: 0.5rem;
`;

export const RatingsDiv = styled.div`
    width: 4rem;
    padding: 0.3rem;
    color: white;
    border: none;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #26a541;
`;

export const Rating = styled.h3`
    margin-right: 0.5rem;
`;

export const ProductDetailsDiv = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    /* background-color: red; */
`;

export const ProductDetails = styled.p`
    font-size: 1.1rem;
    margin-left: 0.5rem;
`;

export const ProductQuantity = styled.h2`
    margin-top: 1rem;
    color: red;
`;

export const ProductReviewDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const ProductReviewHeadingDiv = styled.div`
    padding: 1rem 1rem 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.1rem solid rgb(226, 226, 226);
    /* border-bottom: 0.1rem solid rgb(226, 226, 226); */
    /* background-color: red; */
    `;

export const FirstDiv = styled.div`
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NumberOfReviews = styled.p`
    font-size: 1.2rem;
    color: grey;
    `; 

export const ReviewDiv = styled.div`
    padding: 2rem 2rem 2rem 0;
    border-top: 0.1rem solid rgb(226, 226, 226);
    display: flex;
    align-items: center;
    /* background-color: aqua; */
`;

export const Comments = styled.h3`
    margin-left: 1rem;
`;

export const NoReviews = styled.h2`
    color: red;
`;

export const ReviewerDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    /* background-color: yellow; */
`;

export const Reviewer = styled.h4`
    color: grey;
    margin-left: 0.3rem;
`;

export const RateDiv = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* background-color: orange; */
`;

export const ReviewForm = styled.textarea`
    margin-bottom: 1rem;
    padding: 0.5rem;
    min-height: 10rem;
    font-size: 1.3rem;
    border: 0.05rem solid grey;
    border-radius: 0.2rem;
    outline: none;
    resize: none;
`;