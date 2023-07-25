
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import GiphyService from '../services/giphy';
import MainContext from '../context/main';



const Container = styled.div`
    height: 30%;
    background: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    gap: 16px;
`;

const TitlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 64px;
    color: white;
    font-weight:bold;
`;

const SubTitle = styled.span`
    font-size: 16px;
    color: #1d1b1b;
    max-width: 475px;
    width: 100%;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchInput = styled.input`
    outline: none;
    height: 32px;
    padding: 4px;
`;

const SearchBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    cursor: pointer;
    //background: radial-gradient(961px at 1.9% 5%, rgb(242, 241, 36) 0%, rgb(11, 236, 218) 90%);
`;

function _Header() {
    const [text, setText] = useState<string>("");
    const main = useContext(MainContext)!;

    function search(){
        if(text.length < 3) return;
        main.giphyService.getImagesByName(text);
    }

    function change(texts:string){
        setText(texts);
    }

    return (
        <Container>
            <TitlesWrapper>
                <Title>Gif Searcher</Title>
                <SubTitle>Discover endless GIFs with ease! Find the perfect animated expressions using keywords. Powered by the Giphy API, this React-based web app guarantees entertainment and amusement. Start your GIF adventure today! </SubTitle>
            </TitlesWrapper>
            <SearchWrapper>
                <TextField
                    placeholder='Search...'
                    onChange={(event:React.ChangeEvent<HTMLInputElement>) => change(event.target.value)}
                />
                <SearchBtn onClick={() => search()}>
                    <SearchIcon htmlColor='white' />
                </SearchBtn>
            </SearchWrapper>
        </Container>
    );
}

const HeaderMemo = React.memo(_Header);

export default function Header() {
    return (
        <HeaderMemo />
    );
}
