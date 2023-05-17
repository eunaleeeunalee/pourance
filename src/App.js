// import React, { useState } from "react";
import TextToSpeech from './TextToSpeech';
import Dummy from "./Dummy.json";
import styled from 'styled-components';


const Wrap = styled.div`
  line-height: 0;
`


const BlogPost = () => {

  return (
    <>
      {/* <h1>어떻게 발음하냐 이말이야</h1> */}
      
      <Wrap>
        {Dummy.pouArray.map((pou) => (
            <TextToSpeech key={pou.image} image={pou.image} text={pou.txt} />
        ))}
      </Wrap>
    </>
  );
};

export default BlogPost;