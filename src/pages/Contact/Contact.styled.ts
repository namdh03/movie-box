import { Box, Input, css, styled } from "@mui/material";
import theme from "@themes/index";

export const ContactSection = styled(Box)`
    padding: 160px 0 150px;
    text-align: center;
    background: ${theme.palette.background.main};

    & h1.MuiTypography-h1 {
        font-weight: 600;
        font-size: 5rem;
        line-height: 1.08;
        color: ${theme.palette.neutralGrey?.[23]};
    }

    & p.MuiTypography-body1 {
        margin: 20px auto 50px auto;
        width: 436px;
        font-size: 1.6rem;
        line-height: 1.62;
        color: ${theme.palette.neutralGrey?.[15]};
    }

    & textarea {
        padding: 22px 31px;
        background: ${theme.palette.neutralWhite?.main};
        outline: transparent;
        border: transparent;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.2;
        color: ${theme.palette.neutralBlack?.[6]};
        resize: none;
        width: 890px;
        height: 150px;
        max-height: 300px;
        cursor: auto;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--text-color);
            border-radius: 99px;
        }
    }
`;

export const ContactFormGroup = styled(Box)`
    display: flex;
    justify-content: center;
    column-gap: 30px;

    & + & {
        margin-top: 24px;
    }
`;

export const ContactFormField = css`
    padding: 22px 31px;
    background: ${theme.palette.neutralWhite?.main};
    outline: transparent;
    border: transparent;
    font-weight: 400;
    font-size: 1.6rem;
`;

export const ContactFormInput = styled(Input)`
    ${ContactFormField};
    min-width: 430px;
    height: 60px;

    &.MuiInput-input {
        color: ${theme.palette.neutralBlack?.[6]};
    }
`;
