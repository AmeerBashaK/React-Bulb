import { styled } from "styled-components";

export const Container = styled.div`
  /* background: #002ee4; */
  display: grid;
  place-items: center;
  background-color:gray ;
  height: 100vh;
  width: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #ededed;
  border-radius: 24px;
  height: 250px;
  width: 225px;
  /* border: 3px solid #ccc; */
  box-shadow: rgba(0, 0, 0, 0.614) 0px 10px 10px -6px;
`;
