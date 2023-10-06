import { DecorWrapper } from "./Decor.styled";

const Decor = ({ children }: { children: JSX.Element }) => {
    return <DecorWrapper>{children}</DecorWrapper>;
};

export default Decor;
