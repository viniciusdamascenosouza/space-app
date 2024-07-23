import styled from "styled-components";

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 5em;
  padding: 2px 10px;

  border-radius: 10px;
  border: 1.5px solid #7b78e5;

  input {
    background: none;
    border: none;
  }
  input::placeholder {
    color: #c0c0c0;
  }
`;
