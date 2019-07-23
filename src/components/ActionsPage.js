import React, { Component } from 'react';
import styled from 'styled-components';

const ActionStyled = styled.div`
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
  button {
    font-size: 1.5rem;
    width: 150px;
    height: 40px;
  }
`;

const Header = styled.div`
  background-color: blue;
  height: 400px;
  width: 100%;
`;

export default class ActionPage extends Component {
  
  share = () => {
    var url = "http://google.com";
    var text = "Replace this with your text";
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

  render() {
    return (
      <ActionStyled>
        <Header>
          <img src={'an image'} />
          <h2>Event Title</h2>
          <p>Event Author</p>
          <p>07/20/2019</p>
          <button onClick={() => {this.share()}}> Share </button>
        </Header>
        <p>Some details of the page event.</p>
      </ActionStyled>
    );
  }
}