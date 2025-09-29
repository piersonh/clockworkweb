import './styles/TeamMember.css';

const TeamMember = ({ name, email }) => {
    return (
        <div className='container team-member'>
            <img className="team-member-pfp" src="/clockworkweb/profile-default-svgrepo-com.svg" alt="Profile Picture" />
            <div className='team-member-name'> 
                <h4>{name}</h4> 
            </div>
            <div>
                <h6>Contact Me:</h6>
                <a href= {`mailto:${email}@my.fit.edu`}>{email}@my.fit.edu</a>
            </div>
        </div>
    );
}

export default TeamMember;