import Main from "./components/styledElement/Main"
import RouterContent from "./components/RouterContents"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GlobalStyles from "./GlobalStyles"

const App = () => {
    return (
        <div className={`app `}>
            <GlobalStyles />
            <Header />
            <Main>
                <RouterContent />
            </Main>
            <Footer />
        </div>
    )
}

export default App
