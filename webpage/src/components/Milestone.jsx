import PDFView from './PDFView';
import './styles/Milestone.css';

// all have Presentation, Progress Evaluation at the end
// 1 - Requirement, Design
// 2 - none
// 3 - none
// 4 - none
// 5 - Poster
// 6 - User and/or Developer Manual, Demo Video

const Milestone = ({ id }) => {

    const renderContent = () => { // renders different content based on milestone id
        switch(id) {
            case 1:
                return ( // add documents
                    <div className='milestone-docs'>
                        <PDFView fileName="requirement.pdf" />
                        <ul>
                            <li>
                                <a  href="/documents/requirement.pdf" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                > Requirements Document </a>
                            </li>
                            <li>
                                <a  href="/documents/design.pdf" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                > Design Document </a>
                            </li>
                            <li>
                                <a  href="/documents/test.pdf" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                > Test Document </a>
                            </li>
                            
                        </ul>
                    </div>
                );

            case 5:
                return (
                    <div className='milestone-docs'>
                        <ul>
                            <li>
                                <a  href="/documents/poster.pdf" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                > Poster </a>
                            </li>
                        </ul>
                    </div>
                );

            default:
                return (
                    <div>
                        <p>Details for this milestone are coming soon.</p>
                    </div>
                );
            }
        }

    return (
        <div className='milestone-container'>
            <h2>Milestone {id} Details</h2>
            <div className='milestone-content'>

                {/* Left side content */}
                <div className='milestone-left'>
                    {renderContent()}
                    <div className='milestone-video'>
                        
                    </div>

                </div>

                {/* Divider line */}
                <div style={{ borderLeft: '2px solid #ccc', margin: '0 20px' }}/>

                {/* Right side content */}
                <div className='milestone-right'>
                    <div className='milestone-pres'>
                        <a  href="/documents/milestone1.pdf" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        > Presentation </a>
                    </div>
                    
                    <div className='milestone-eval'>
                        <a  href="/documents/eval1.pdf" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        > Progress Evaluation</a>
                    </div>
                </div>
                
            </div> 
        </div>
    );
};

export default Milestone;