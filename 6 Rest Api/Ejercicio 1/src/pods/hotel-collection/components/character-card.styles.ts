import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const card = css`
  transition: transform 0.9s ease;
  width: 300px; 
  height: 500px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.1); 
    box-shadow: 0px 5px 15px rgba(7, 146, 200, 0.8)
  }
`;

export const media = css`
  height: 225px; 
`;

export const content = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const actions = css`
  justify-content: flex-end;
`;

export const species = css`
  font-size: 1.2em;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const type = css`
  font-size: 1em;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const gender = css`
  font-size: 1em;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
