import { InputAdornment, InputLabel } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";
import { SearchWrapper } from "./Search.styled";

const Search = () => {
    return (
        <SearchWrapper
            id="banner-search"
            placeholder="Search Movies or TV Shows"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <InputLabel htmlFor="banner-search">
                            <RiSearch2Line size={24} cursor="pointer" />
                        </InputLabel>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
