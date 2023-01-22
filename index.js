
function Navbar() {
    return (
        <div className="navbar">
            <img src="img/Vector.png" className="navbar-logo" />
        </div>
    )
}

function Header() {
    return (
        <div className="header">
            <img src="img/header images.png" className="header-images" />
            <h1>Online Experiences</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque nam cumque rerum incidunt deserunt doloribus neque</p>
        </div>
    )
}

function Card({ img, rating, reviewcount, country, title, price, spots }) {
    let badgeText = ""
    if (spots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (rating === "5.0") {
        badgeText = "POPULAR"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`img/${img}`} />
            <div>
                <div className="card-line-one">
                    <p className="card-rating">⭐ {rating}</p> <p className="card-state">({reviewcount}).{country}</p>
                </div>
                <p className="card-description">{title}</p>
                <div className="card-line-three">
                    <p className="card-price">From ${price}</p> <p className="card-per-person">/ person</p>
                </div>
            </div>
        </div>
    )
}

function CreateCard({ data }) {
    const colors = data.map(
        function ({ image, rating, reviewcount, country, title, price, spots }) {
            return <Card
                img={image}
                rating={rating}
                reviewcount={reviewcount}
                country={country}
                title={title}
                price={price}
                spots={spots}
            />
        })
    return (
        <div className="listing">
            {colors}
        </div>
    )
}

function Listing() {
    return (
        <CreateCard
            data={[
                {
                    image: "image 12.png",
                    rating: "4.8",
                    reviewcount: "2",
                    country: "USA",
                    title: "Group mountain biking",
                    price: "50",
                    spots: 0,
                },

                {
                    image: "image 12.png",
                    rating: "5.0",
                    reviewcount: "30",
                    country: "USA",
                    title: "Learn wedding photography",
                    price: "125",
                    spots: 1,
                },
                {
                    image: "image 12.png",
                    rating: "4.0",
                    reviewcount: "30",
                    country: "USA",
                    title: "Learn wedding photography",
                    price: "125",
                    spots: 1,
                },

                {
                    image: "image 12.png",
                    rating: "2.2",
                    reviewcount: "3",
                    country: "USA",
                    title: "Learn wedding photography",
                    price: "15",
                    spots: 0,
                }
            ]}
        />
    )
}


function App() {
    return (
        <div >
            <Navbar />
            <Header />
            <Listing />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

