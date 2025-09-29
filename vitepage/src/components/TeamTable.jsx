import { useState } from 'react';
import'./styles/TeamTable.css';
import TeamMember from './TeamMember';

const TeamTable = () => {

    const [goatLugin, setGoatLugin] = useState(false);

    return (
        <div className='container team-table-container'>
            <h2 className='team-header'>Meet The <span className='text-gradient'>Team</span></h2>
            <div className='team-member-group'>
                <TeamMember name={"Anthony Menendez"} email={"amenendezmen2022"}/>
                <TeamMember name={"Christian Ott"} email={"cott2020"}/>
                <TeamMember name={"Peter Stelzer"} email={"pstelzer2023"}/>
                <TeamMember name={"Pierson Hendricks"} email={"phendricks2022"}/>
            </div>
            
            <div className='team-advisor'>
                <div 
                    className='team-advisor-pfp-container'
                    onClick={() => setGoatLugin(!goatLugin)}
                >
                    <div className={`team-advisor-flipper ${goatLugin ? "flipped" : ""}`}>
                        <div className="team-advisor-face front" >
                            <img src="/dr-L.jpg" alt="Dr. Lugin" />
                        </div>
                        <div className="team-advisor-face back" >
                            <img src="/goat.jpg" alt="Goat Lugin" />
                        </div>
                    </div>
                </div>
                <h4>Dr. David Luginbuhl</h4>
                <div className='team-advisor-info'>
                    <p><i>Project Advisor</i></p>
                    |
                    <a href = "mailto:dluginbuhl@fit.edu">dluginbuhl@fit.edu</a>
                </div>
            </div>
            
        </div>
    );
};

export default TeamTable;
