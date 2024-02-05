import { NextUIProvider } from '@nextui-org/react'

import Header from './HeaderInfo.jsx'
import Footer from './Footer.jsx'

// eslint-disable-next-line react/prop-types
function MainLayoutInfo({children, texto}) {
    return (
        <NextUIProvider>
            <Header texto={texto}></Header>
            <>{children}</>
            <Footer></Footer>
        </NextUIProvider>
    )
}

export default MainLayoutInfo