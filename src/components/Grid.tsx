import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContext from '../context/main';
import { IGifData } from '../types/GifData';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const Element = styled.img`
    height: 100px;
    width: 200px;
`;

type _GridProps = {
};

function _Grid(props: _GridProps) {
    const main = useContext(MainContext)!;
    const [gifs,setGifs] = useState<IGifData[]>([]);
    useEffect(()=> {
        console.log("ostres");
      console.log(main.giphyService.getSavedImages());
      
      setGifs(main.giphyService.data);
    },[main.giphyService.data])
    
    return (
        <Container>
            {
                gifs.map((gif:IGifData) => {
                    return <Element key={gif.id} src={gif.embed_url} />
                })
            }
        </Container>
    );
}

const GridMemo = React.memo(_Grid);

type GridProps = {
};

export default function Grid(props: GridProps) {
    return (
        <GridMemo />
    );
}