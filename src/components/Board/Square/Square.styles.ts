import styled from "styled-components";
import { pallete } from "../../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: 1px solid ${pallete.Black};
`;

export const PlayerMark = styled.img`
  width: 50%;
  height: 50%;
`;
