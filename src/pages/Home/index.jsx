import './style.css'
import { Sidebar } from '../../components/SidebarWidget';

export function Home() {
    return(
        <div className="GridContainer">
            <div className="Main">
                <div className="wrapper">
                    <marquee behavior="scroll" direction="right"></marquee>

                    <div className="MainBanner"></div>

                    <div className="HeadingContainer">
                        <h3>PROFIL SPI AC SPECIALIST</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos officiis blanditiis! Asperiores, architecto? Molestiae, praesentium natus quae consequatur eius placeat labore corrupti ipsam veritatis vero quibusdam voluptas excepturi quidem, ea porro cumque, dignissimos voluptates laudantium. Quas placeat consequatur, vitae voluptates molestias, dicta quod veritatis corporis quisquam rerum nihil? Aut!</p>

                    <div className="Quotes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nihil esse omnis delectus aspernatur ex cumque velit sint dolorum nostrum.</div>

                    <div className="MainGridContainer">
                        <p></p>
                        <div className="Picture"></div>
                    </div>

                    {/* VISI */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consectetur et dolores quas hic a, ratione ipsa pariatur optio at blanditiis rerum aut labore! Atque veniam ut animi neque inventore.</p>

                    {/* MISI */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi iste doloribus dolor totam distinctio dignissimos, deserunt aspernatur est, fugiat voluptatum! Nemo dolor voluptas, quod animi natus aperiam repellendus ducimus.</p>

                    <div className="HeadingContainer">
                        <h3>OUR CLIENTS</h3>
                    </div>
                    <div className="SliderOurClients"></div>

                </div>
            </div>





            
            <div className="Sidebar">
                <div className="wrapper">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}