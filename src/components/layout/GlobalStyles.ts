import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif !important; 
  }

  a{ text-decoration: none }
  
  h1,h2,h3,h4,h5,p {
      letter-spacing: 1px;
      text-transform: initial;
  }
  ul {
		padding: 0;
		text-align: start;
    list-style: none;
	}

	ul li a {
		font-size: 18px;
		line-height: 30px;
		font-weight: 300;
		color: #fff;
		text-decoration: none;
		transition: all 0.3s ease;
		:hover {
			color: #ebebeb;
		}
	}

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  button{
    cursor: pointer;
    text-transform: none !important;
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
      width:10px;
  }

  ::-webkit-scrollbar-button:increment,::-webkit-scrollbar-button {
      display: none;
  } 

  ::-webkit-scrollbar:horizontal {
      height: 10px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #797979;
      border-radius: 20px;
      border: 2px solid #f1f2f3;
  }

  ::-webkit-scrollbar-track {
      border-radius: 10px;  
  }

  .required {
    color: red;
    font-weight: 400;
    font-size: 13px;
    margin-top: 5px;
  }

  .spin {
    animation: spin infinite 2s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: #009688;
  }

  
  .tile {
    position: relative;
    background: var(--app-tile-bg);
    color: var(--app-tile-text-color);
    border-radius: 7.5px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  @media print {
    .tile {
      border: 1px solid #ddd;
    }
  }

  .tile .tile-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .tile .tile-title-w-btn .btn-group {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .tile .tile-footer {
    border-top: 1px solid #ddd;
    padding: 20px 0 0 0;
    margin-top: 10px;
  }

  .bg-primary {
    background-color: #3d87d1;
    color: #fff;
  }


`;

export default GlobalStyle;
