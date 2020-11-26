import styled, { createGlobalStyle } from 'styled-components'

const red = '#FF0000';
const white = '#FAFAFA';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export const StyledContainer = styled.div`
background: #181818;
`
export const StyledHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.75rem;
background: #282828;
color: ${white};
@media(max-width: 425px){
  justify-content: space-around;
}
`
export const StyledLeftHeader = styled.div`
display: flex;
align-items: center;

img{
  margin-left: 2rem;
}

`
export const StyledMidHeader = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
.wrapper{
  position: relative;
  width: 80%;
}
input{
  width: 100%;
  font-size: 1rem;
  background: #000;
  border: 1px solid #5c5c5c;
  border-right: none;
  color: ${white};
  border-radius: 2px 0 0 2px;
  padding: 0.25rem 0.25rem;
}
input:focus{
  outline: none;
  border: 0.5px solid #065fd4;
}
.keys{
  margin-top: -8px;
  position absolute;
  top: 50%;
  right : 5%;
}
button{
  padding: 0.30rem 2rem;
  border: 2px solid #313131;
  border-radius: 0 2px 2px 0;
  background: #313131;
  color: #5c5c5c;
}
@media(max-width: 425px){
  display: none;
}

`
export const StyledRightHeader = styled.div`
display: flex;
align-items: center;
 i{
   margin: 0 1rem;
 }
.avatar{
  margin: 0 2rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${red};
}
@media(max-width: 425px){
  display: none;
}
`