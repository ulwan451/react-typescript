import { ReactNode } from "react"
import Header from "./Header"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-white">
            <div className="mx-auto max-w-7xl px-5">
                <Header />
                <div className="mt-32 mb-20">{children}</div>
            </div>
        </main>
    )
}

export default Layout