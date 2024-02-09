import { Navigation } from "./Navigation.jsx";

function Layout({ children }) {
    return (
        <div className="main">
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;