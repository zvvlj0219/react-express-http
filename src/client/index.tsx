import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import ErrorBoundary from './Error/ErrorBoundary'
// import ErrorProvider from './Error/ErrorProvider'
import App from './app'

const container = document.getElementById('app')
if (!container) throw new Error('Failed to find the root element,id: app')

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
