import styled from "styled-components";
import ReactGrid from "react-css-grid";

const Grid = styled(ReactGrid)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(${({ grid }) => grid}, 1fr));
	grid-gap: var(--gap);
`;
export default Grid;
