import Milestone from './Milestone';
import { useState } from 'react';
import './styles/Timeline.css';

const Timeline = () => {
  const [milestone, setMilestone] = useState(3); //set as the most recent milestone for default

  return (
    <div className="timeline-container">
        <h2>Project Timeline</h2>
    
        <div className="timeline-bar">
            <div
                className="timeline-point"
                title="Milestone 1: Project Kickoff"
                style={{ left: '10%' }}
                onClick={() => setMilestone(1)}
            />
            <div
                className="timeline-point"
                title="Milestone 2: First Prototype"
                style={{ left: '20%' }}
                onClick={() => setMilestone(2)}
            />
            <div
                className="timeline-point"
                title="Milestone 3: First Prototype"
                style={{ left: '30%' }}
                onClick={() => setMilestone(3)}
            />

            <div className="timeline-splitter" />
        </div>

        <Milestone id={milestone} />

    </div>
  );
}

export default Timeline;