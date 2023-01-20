
function NavBar() {
    return (
        <nav className="header">
            <img src="react-logo.png" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

function Header() {
    return (
        <div className="main">
            <h1>Fun facts about React</h1>
            <ul className="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}


function App() {
    return (
        <div className="container">
            <NavBar />
            <Header />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

