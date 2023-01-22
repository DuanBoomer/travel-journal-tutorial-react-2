
const data = [
    {
        source: "https://source.unsplash.com/Wbu_scb-9HQ",
        name: "The Great Wall of China",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "CHINA",
    },
    {
        source: "https://source.unsplash.com/OkiDIla7K8Q",
        name: "Christ the Redeemer",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "BRAZIL",
    },
    {
        source: "https://source.unsplash.com/iWMfiInivp4",
        name: "Taj Mahal",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "INDIA",
    },
    {
        source: "https://source.unsplash.com/rFESpq5MMTg",
        name: "Machu Pichhu",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "PERU",
    },
    {
        source: "https://source.unsplash.com/JELUPXqdKDw",
        name: "Chichen Itza",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "MEXICO",
    },
    {
        source: "https://source.unsplash.com/H_u3a0rQowk",
        name: "Colosseum",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "ROME",
    },
    {
        source: "https://source.unsplash.com/py8omnp-hko",
        name: "Petra",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "JORDAN",
    },
    {
        source: "https://source.unsplash.com/7UDX3BAurng",
        name: "The Great Pyramid of Giza",
        mapLink: "https://www.google.co.in/maps",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vero omnis perferendis esse at recusandae, adipisci blanditiis quibusdam commodi quam sequi ratione qui itaque voluptatibus soluta. Accusamus libero quidem provident.",
        country: "EDYPT",
    },
]

//


function Navbar(){
    return (
        <span className = "navbar">
            <img src="img/Fill 213.png"/>
            <span>my travel journal.</span>
        </span>
    )
}

function DestinatonInfo({source, name, maplink, dates, description, country}){
    return(
        < div className = "destination-info">
            <div className = "destination-img">
                <img src={source}/>
            </div>
            <span className="location-description">
                <span className="location">📌 {country}</span>
                {/* can't pass a variable as a link to anchor tag at the moment ,hence passing a google map link directly */}
                <a href="https://www.google.co.in/maps" className="google-map-link">View on google maps</a>
            
            <h1 className="location-name">{name}</h1>
            <p className="dates">{dates}</p>
            <p className="about-location">{description}</p>
            
            </span>
        </div>
    )
}
// 
function Listing({data}){
    const cards = data.map(
        function({source, name, maplink, dates, description, country}){
            return(
                <DestinatonInfo 
                    source= {source}
                    name= {name}
                    mapLink= {maplink}
                    dates= {dates}
                    description= {description}
                    country= {country}
                />
            )

        }
    )

    return (
        <div>
            {cards}
        </div>
    )
}

function App() {
    return (
        <div >
            <Navbar/>
            <Listing
                data = {data}
            />
           
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

