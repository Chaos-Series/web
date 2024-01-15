import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/HeaderInfo.jsx'
import Footer from '../components/Footer.jsx'

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