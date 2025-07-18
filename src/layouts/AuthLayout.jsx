import { Helmet } from "react-helmet-async";

const AuthLayout = ({ children, title = "Auth" }) => {
    return (
        <>
            <Helmet>
                <title>{title} | SIGAP TI</title>
            </Helmet>
            <main className="bg-white min-h-screen flex items-center justify-center">
                {children}
            </main>
        </>
    )
}

export default AuthLayout;