import { css } from '@emotion/css';

/* const backgroundImageUrl = 'path/to/your/image.jpg'; 
background: url(${backgroundImageUrl}) no-repeat center center fixed;
  background-size: cover;
*/

export const root = css`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
`;

export const card = css`
  width: 300px;
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
  height: 400px; /* Ajusta la altura de la imagen según sea necesario */
  width: auto;
`;

export const text = css`
  margin: 0.5rem 0;
`;
