import { Box, Modal, styled } from "@mui/material";
import theme from "@themes/index";

export const MovieDetailBannerSection = styled(Box)`
    padding-top: 120px;
    background: ${theme.palette.background.main};
`;

export const MovieDetailBodySection = styled(Box)`
    padding: 152px 0 160px;
    background: ${theme.palette.background.main};
`;

export const MovieDetailBannerInner = styled(Box)`
    position: relative;
`;

export const MovieDetailBannerImg = styled(Box)`
    position: relative;
    width: 100%;
    height: 480px;
    margin: 0;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: cover;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        background: linear-gradient(
            180deg,
            rgba(54, 44, 146, 0.4) 0%,
            rgba(18, 98, 151, 0.4) 100%
        );
    }
`;

export const MovieDetailBannerContent = styled(Box)`
    position: absolute;
    left: 80px;
    bottom: -72px;
    min-width: 560px;
    padding: 40px;
    border-radius: 24px;
    background: ${theme.palette.background.card};
    backdrop-filter: blur(12px);

    & .MuiLink-root {
        color: ${theme.palette.primary[19]};
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.33333;
    }

    & .MuiBreadcrumbs-separator {
        color: ${theme.palette.neutralGrey?.[13]};
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.33333;
    }

    & h1.MuiTypography-root.MuiTypography-h1 {
        color: ${theme.palette.neutralGrey?.[23]};
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.64px;
    }

    & .MuiBox-root {
        display: flex;
        column-gap: 20px;
        margin-top: 8px;

        & .MuiButton-root {
            font-size: 1.6rem;
            color: ${theme.palette.neutralWhite?.main};
            background-color: ${theme.palette.primary[13]};
            font-weight: 400;
            line-height: 1.5;
            text-transform: capitalize;
        }
    }
`;

export const MovieDetailBodyInner = styled(Box)`
    display: flex;
    column-gap: 80px;
`;

export const MovieDetailPoster = styled(Box)`
    max-width: 480px;
    height: 720px;
    margin: 0;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        object-fit: cover;
    }
`;

export const MovieDetailContent = styled(Box)`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    max-width: 480px;

    & .MuiTypography-h2 {
        color: ${theme.palette.neutralGrey?.[23]};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 1.33333;
        letter-spacing: -0.36px;

        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 1);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    & .MuiTypography-body1 {
        color: ${theme.palette.neutralGrey?.[15]};
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.6;

        display: -webkit-box;
        -webkit-line-clamp: var(--line-clamp, 7);
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const MovieDetailInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    & .MuiTypography-h3 {
        color: ${theme.palette.neutralGrey?.[13]};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.5;
    }

    & {
        color: ${theme.palette.neutralGrey?.[21]};
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.6;
    }
`;

export const MovieDetailModal = styled(Modal)`
    & .MuiBox-root {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1200px;
        height: 680px;
        border-radius: 40px;
        padding: 20px;
        background: linear-gradient(
            180deg,
            rgba(54, 44, 146, 0.4) 0%,
            rgba(18, 98, 151, 0.4) 100%
        );

        & video {
            border-radius: 40px;
        }
    }
`;
