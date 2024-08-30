import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
	* {
        margin: 0;
        padding: 0;
    
		box-sizing: border-box;

        user-select: none;

		&:focus {
			outline: none;
		};
    };

	body, html {
        min-height: 100%;
    };

    body, input, textarea, select, button {
        font-family: 'Outfit';
		font-size: 1vmax;

        color: #212121;
    };

	button {
        border: none;
        background: none;

        cursor: pointer;
    };

    input {
        border: none;
        background: none;

        cursor: auto;

        &:focus {
            outline: none;
        };
    };
`;