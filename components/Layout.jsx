import { Header } from "./Assets/Header/Header"
import BackgroundCircle from "./Assets/moduls/BackgroundCircle"

export function Layout({children}) {
    return (
        <>
            <Header/>    
            <main>
                <BackgroundCircle/>
                {children}
            </main> 
        </>
    )
}