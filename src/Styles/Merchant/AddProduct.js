import styled from 'styled-components';

export const Container = styled.div`
    min-height: 92vh;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-color: white;
`;

export const AddProductDiv = styled.div`
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: orange; */
`;

export const AddProductHead = styled.h1`
    font-family: 'Roboto Mono', monospace;
`;

export const OverviewDiv = styled.div`
    margin: 1rem 0;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* background-color: yellowgreen; */
`;

export const Overview = styled.h2`
    font-weight: normal;
    color: grey;
`;

export const SubHeader = styled.h2`
    margin: 1rem 0;
    color: black;
`;

export const NameInput = styled.input`
    width: 40%;
    outline: none;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    :focus {
        border: 0.1rem solid navy;
    }
`;

export const Instruction = styled.h3`
    font-weight: normal;
    color: grey;
    margin-top: 1rem;
`;

export const CategoryDiv = styled.div`
    margin: 1rem 0;
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
`;

export const ColumnDiv1 = styled.div`
    width: 100%;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    /* background-color: pink; */
`;

export const ColumnDiv2 = styled.div`
    width: 100%;
    margin: 0 1rem 0 0;
    display: flex;
    flex-direction: column;
    /* background-color: greenyellow; */
`;

export const Select = styled.select`
    height: 2rem;
    padding: 0 0.5rem;
    color: navy;
`;

export const MyOption = styled.option`
    color: navy;
`;

export const DescriptionDiv = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    /* justify-content: space-between; */
    /* align-items: center; */
    /* background-color: beige; */
`;

export const Description = styled.textarea`
    resize: none;
    width: 81%;
    outline: none;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    :focus {
        border: 0.1rem solid navy;
    }
    /* background-color: black; */
`;

export const ImageDiv = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: blueviolet; */
`;

export const FileInputDiv = styled.div`
    width: 100%;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1rem dashed navy;
    border-radius: 0.3rem;
`;

export const FileInput = styled.input`
    ::-webkit-file-upload-button {
        visibility: hidden;
    }
    /* background-color: red; */
`;

export const ImagePreviewDiv = styled.div`
    width: 70%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    /* background-color: aqua; */
`;

export const ImagePreview = styled.img`
    height: 80.5%;
    width: 100%;
    border: 0.1rem dotted navy;
    border-radius: 0.3rem;
`;

export const SubmitButton = styled.button`
    margin-top: 1rem;
    width: ${props=> props.width ? props.width : "100%"};
    background-color: navy;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.3rem;
`;