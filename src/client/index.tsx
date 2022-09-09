import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LoadingContextProvider } from './utils/useLoading'
import ErrorBoundary from './components/ErrorBoundary'
import App from './app'

const container = document.getElementById('app')
if (!container) throw new Error('Failed to find the root element,id: app')

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <LoadingContextProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </LoadingContextProvider>
    </BrowserRouter>
)
