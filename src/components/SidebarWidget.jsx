import { useState, useEffect } from 'preact/hooks';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

const DateComponent = ({ setFormattedDate }) => {
  useEffect(() => {
    dayjs.locale('id'); // Set locale to Indonesian
    setFormattedDate(dayjs().format('dddd, D MMMM YYYY')); // Get today's date
  }, []);

  return null; // This component only updates the date, no need to render anything
};

export function Sidebar() {
    const [formattedDate, setFormattedDate] = useState('')

    return (
        <div className="SideBar">
            <DateComponent setFormattedDate={setFormattedDate} />
            <strong>{formattedDate}</strong>
            <div className="SocialMedia">
                <div className="SidebarHeader">
                    <h5>JOIN OUR SOCMED</h5>
                </div>
                <div className="SidebarBodySocialMedia">
                    <div className="LogoBackground">
                        <a href="#" className="Whatsapp"></a>
                    </div>
                    <div className="LogoBackground">
                        <a href="#" className="Youtube"></a>
                    </div>
                    <div className="LogoBackground">
                        <a href="#" className="Twitter"></a>
                    </div>
                </div>
            </div>
            <div className="Translate">
                <div className="SidebarHeader">
                    <h5>TRANSLATE THIS WEBSITE</h5>
                </div>
                <div className="SidebarBodyTranslate">
                    <a href="#" className="Indonesia"></a>
                    <a href="#" className="English"></a>
                </div>
            </div>
        </div>
    )
}