import React from 'react'

import styled from "styled-components";

export const MyComponent = styled.div`
    height: 100px;
    background-color: #1e1e1e;
    display: flexbox;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    font-size:32;
    box-shadow: 0px 0px 10px 0px black;
    border: 1px solid #aaa;

    &:after {
        content: ${props => props.text};
      }

`