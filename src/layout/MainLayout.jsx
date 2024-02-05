import { NextUIProvider } from '@nextui-org/react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

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