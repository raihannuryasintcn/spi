import './style.css'

export function Home() {
    return(
        <div className="GridContainer">
            <div className="Main">
                <div className="wrapper">
                    <marquee behavior="scroll" direction="right"></marquee>

                    <div className="MainBanner"></div>

                    <div className="HeadingContainer">
                        <h3></h3>
                    </div>
                    <p></p>

                    <div className="Quotes"></div>

                    <div className="MainGridContainer">
                        <p></p>
                        <div className="Picture"></div>
                    </div>

                    {/* VISI */}
                    <p></p>

                    {/* MISI */}
                    <p></p>

                    <div className="HeadingContainer">
                        <h3></h3>
                    </div>
                    <div className="SliderOurClients"></div>

                </div>
            </div>





            
            <div className="Sidebar">
                <div className="wrapper"></div>
            </div>
        </div>
    );
}