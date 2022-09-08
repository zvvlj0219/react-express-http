import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import styled from 'styled-components'
import Div from './styledElement/Div'
import FlexContainer from './styledElement/FlexContainer'

const StyledDiv = styled(Div)`
    padding: 2rem;
`

const StyledFlexContainer = styled(FlexContainer)`
    flex: 1;
`

const RouterContent = () => {
    return (
        <StyledDiv>
            <StyledFlexContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </StyledFlexContainer>
        </StyledDiv>
    )
}

export default RouterContent
