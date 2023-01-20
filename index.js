
function Header() {
    return (
        <div className="header">
            <img src="img/profile.svg" className="profile-photo"/>
            <div className="header-text">
                <h1>Duan Boomer</h1>
                <h4>Frontend Developer</h4>
                <p>duanboomer.github.io</p>

            </div>
            <div className="button">
                <div className="button-email">
                    <img src="img/Icon.png"/>
                    <p>Email</p>
                </div>

                <div className="button-linkedin">
                    <img src="img/Vector.png"/>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

function About(){
    return (
        <div className="about-section">
            <h2>About</h2>
            <p>I am taking my first steps into the world of web development by diving into the a react course offered by freeCodeCamp. This is a solo project in accordance with that course.</p>
        </div>
    )
}

function Interests(){
    return (
        <div className="interests-section">
            <h2>Interests</h2>
            <p>React , Web Development , Machine Learning , Game Development , Unity , Flutter</p>
        </div>
    )
}

function Footer(){
    return (
        <div className="footer">
            <img src="img/Twitter Icon.png"/>
            <img src="img/Facebook Icon.png"/>
            <img src="img/Instagram Icon.png"/>
            <img src="img/GitHub Icongithubicon.png"/>
        </div>
    )
}
function App() {
    return (
        <div >
            <Header />
            <About />
            <Interests />
            <Footer />


        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

