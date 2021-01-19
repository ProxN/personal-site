import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
    
    html{
        box-sizing:border-box;
        height:100%;
        width:100%;
        font-size:10px;
    }
    
    #__next,
    body{
        width:100%;
        height:100%;
    }

    body{
        ${({ theme }) => css`
          background-color: ${theme.colors.primary.dark};
          line-height: ${theme.lineHeight};
          font-size: ${theme.fontSizes[1]}px;
          color: ${theme.colors.textColor};
          font-weight: ${theme.fontWeights[0]};
          font-family: ${theme.fontFamily};
        `};
    }

    a{
        text-decoration:none;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:normal;
        margin:0;
    }

    .backward{
        transition:transform 0.2s ease, width 0.18s 0.2s ease;
    }
    .forward{
        transition: width 0.18s ease, transform 0.2s 0.18s ease;
    }

    section{
        padding:10rem 0rem;
    }
`;
