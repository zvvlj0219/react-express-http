import styled from 'styled-components'
import FlexContainer from './styledElement/FlexContainer'

const StyledFooter = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: lightgray;

    h4 {
        color: black;
    }
`


const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer>
                <h4>react-express-http</h4>
            </FlexContainer>
        </StyledFooter>
    )
}

export default Footer
