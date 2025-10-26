import Milestone from './Milestone';
import { useState } from 'react';
import './styles/Timeline.css';

const Timeline = () => {
    const [activeMilestone, setActiveMilestone] = useState(6); //set as the most recent milestone for default

    const milestones = [
        "Sem Plan 1", 
        "Mile Stone 1", 
        "Mile Stone 2", 
        "Mile Stone 3", 
        "Sem Plan 2", 
        "Mile Stone 4", 
        "Mile Stone 5", 
        "Mile Stone 6", 
    ];

    const dates = [
        "Jan 27, 2025", // Sem Plan 1
        "Feb 24, 2025", // M1
        "Mar 26, 2025", // M2
        "Apr 21, 2025", // M3
        "Sep 3, 2025",  // Sem Plan 2
        "Sep 29, 2025", // M4
        "Oct 27, 2025", // M5
        "Nov 24, 2025"  // M6
    ];

    return (
        <div className="container timeline-container">
            <h2 className='timeline-header'>Project <span className='text-gradient'>Timeline</span> </h2>
            <div className="timeline-bar">
                {milestones.map((milestone, i) => (
                    <div className='timeline-segment'>
                        <div className={`timeline-date ${activeMilestone === i ? "active" : ""}`}>
                            {dates[i]}
                        </div>
                        <div
                            key={i}
                            className={`timeline-milestone ${activeMilestone === i ? "active" : ""}`}
                            onClick={() => {
                                setActiveMilestone(i);
                            }}
                        >
                            <div>
                                <h6>{milestone.split(" ")[0]}</h6>
                                <h6>{milestone.split(" ")[1]}</h6>
                            </div>
                            <div className='timeline-milestone-number'>
                                <h2>{milestone.split(" ")[2]}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Milestone id={activeMilestone} />

        </div>
    );
}

export default Timeline;