import { Box, Typography } from "@mui/material";
import theme from "@themes/index";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({
    rating,
    position = "relative",
    top = "0",
    left = "0",
    bgColor,
}: {
    rating: number;
    position?: string;
    top?: string;
    left?: string;
    bgColor: string | undefined;
}) => {
    return (
        <Box
            sx={{
                position: { position },
                top: top,
                left: left,
                display: "inline-flex",
                alignItems: "center",
                columnGap: "4px",
                width: "fit-content",
                padding: "4px 8px",
                borderRadius: "8px",
                background: bgColor,
                backdropFilter: "blur(4px)",
            }}
        >
            <AiOutlineStar color={theme.palette.warning.main} size={16} />
            <Typography
                sx={{
                    color: theme.palette.warning.main,
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                }}
            >
                {rating}
            </Typography>
        </Box>
    );
};

export default Rating;
