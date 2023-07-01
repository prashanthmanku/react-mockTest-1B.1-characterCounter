import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
`

export const AppWidthContainer = styled.div`
  max-width: 1100px;
  height: 100vh;
  display: flex;
  margin: auto;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const FirstCard = styled.div`
  width: 50%;
  background-color: #ffc533;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (max-width: 567px) {
    width: 100%;
    order: 1;
    height: 70vh;
  }
`

export const SecondCard = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #0f172a;
  text-align: center;
  @media screen and (max-width: 567px) {
    width: 100%;
    height: 30vh;
  }
`

export const FirstCardHeading = styled.h1`
  background-color: #ffbf1f;
  color: #334155;
  padding: 20px;
  font-size: 30px;
  margin: 7px;
  line-height: 40px;
  @media screen and (max-width: 567px) {
    font-size: 24px;
    line-height: 30px;
  }
`

export const Img = styled.img`
  width: 90%;
  //   padding: 20px;
  align-self: center;
  margin-top: auto;
  margin-bottom: 40px;
`

export const CountList = styled.ul`
  list-style-type: none;
  //   padding: 0px;
  color: #0f172a;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
`
export const Span = styled.span`
  font-size: 17px;
  //   font-weight: 600;
`

export const SecondCardHeading = styled.h1`
  color: #ffbf1f;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`

export const InputContainer = styled.form`
  display: flex;
  margin-top: 50px;
`

export const Input = styled.input`
  background-color: #ffffff;
  width: 70%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 8px 12px;
  color: #272c47;
  font-size: 17px;
`

export const AddButton = styled.button`
  background-color: #ffc533;
  padding: 8px 15px;
  margin-left: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`
