import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// eslint-disable-next-line react/prop-types
function MainLayout({children}) {
    return (
        <NextUIProvider>
            <Header></Header>
            <>{children}</>
            <Footer></Footer>
        </NextUIProvider>
    )
}

export default MainLayout