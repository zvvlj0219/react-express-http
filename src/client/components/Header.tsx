import styled from 'styled-components'
import FlexContainer from './styledElement/FlexContainer'

const StyledHeader = styled.header`
    height: 5.5rem;
    padding: 1rem;
    width: 100%;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`

const Header = () => {
    return (
        <StyledHeader>
            <FlexContainer>
                <h3>React-Express-Http</h3>
            </FlexContainer>
        </StyledHeader>
    )
}

export default Header
