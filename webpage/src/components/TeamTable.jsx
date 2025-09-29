import'./styles/TeamTable.css';

const TeamTable = () => {
    return (
        <div className='team-table'>
            <h3>Team Members</h3>
            <div>
                <div>
                    Anthony Menendez - <a href= "mailto:amenendezmen2022@my.fit.edu">amenendezmen2022@my.fit.edu</a>
                </div>
                <div>
                    Christian Ott - <a href= "mailto:cott2020@my.fit.edu">cott2020@my.fit.edu</a>
                </div>
                <div>
                    Peter Stelzer - <a href= "mailto:pstelzer2023@my.fit.edu">pstelzer2023@my.fit.edu</a>
                </div>
                <div>
                    Pierson Hendricks - <a href= "mailto:phendricks2023@my.fit.edu">phendricks2023@my.fit.edu</a>
                </div>
            </div>
            
            <h3>Project Advisor</h3>
            <div>
                Dr. Luginbuhl - <a href = "mailto:dluginbuhl@fit.edu">dluginbuhl@fit.edu</a>
            </div>
        </div>
    );
};

export default TeamTable;