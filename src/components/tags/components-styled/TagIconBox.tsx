import styled from "styled-components";

const TagIconBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f5f5f5;
    cursor: pointer;
  }
  border-radius: 8px;
  padding: 2px;
`;

export default TagIconBox;
