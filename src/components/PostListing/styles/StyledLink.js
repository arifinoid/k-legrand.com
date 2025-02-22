import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: var(--secondaryColor) !important;

  &:hover {
    color: var(--colorDarkBlue) !important;
    text-decoration: none !important;
  }
`;

export default StyledLink;
