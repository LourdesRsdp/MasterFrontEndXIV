import { css } from '@emotion/css';

export const content = css`
  margin: 0.5rem;
`;

export const root = css`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

export const card = css`
  width: 350px;
  height: auto;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(255, 0, 0, 0.8);
  }
`;

export const media = css`
  height: 100; 
`;

export const text = css`
  margin: 0.5rem 0;
`;

export const bestSentences = css`
  font-size: 1em;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const editButton = css`
  margin-top: 100px;
  color: white;
  &:hover {
    background-color: #303f9f;
  }
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 0.875rem;
`;
