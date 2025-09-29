import PDFView from './PDFView';
import DemoVideo from './DemoVideo';
import './styles/Milestone.css';

// all have Presentation, Progress Evaluation at the end
// 1 - Requirement, Design
// 2 - none
// 3 - none
// 4 - none
// 5 - Poster
// 6 - User and/or Developer Manual, Demo Video

const Milestone = ({ id }) => {

    let presentationID = id > 4 ? id - 1 : id; 

    const getVideoAndReport = (id) => {
        const obj = {
            video: '',
            report: ''
        };

        switch(id) {
            case 1: // Milestone 1
                obj.video = "1cE_QCzCJVbwLOkl7fR2P_WJv70fkHmLf";
                obj.report = "1"; 
                return obj; 
            case 2: // Milestone 2
                obj.video = "1dIUEhzklNsLWaX01LSOuQ0yakpUQVq-e";
                obj.report = "2"; 
                return obj; 
            case 3: // Milestone 3
                obj.video = "1DbXhe1KGjePEQ1AOno38mkdTb3QU0JmY";
                obj.report = "3"; 
                return obj;
            case 4: // Sem Plan 2
                obj.video = "1LgTXAdot_leff4t_TWUfnt1-8asEtWEb";
                return obj;
            case 5: // Milestone 4
                obj.report = "4"; 
                return obj; 
            case 6: // Milestone 5
                obj.report = "5"; 
                return obj; 
            case 7: // Milestone 6
                obj.report = "6"; 
                return obj; 
            default: 
                return obj;
        }
    };

    const renderContent = () => { // renders different content based on milestone id
        switch(id) {
            case 0: // Sem Plan 1
                return ( 
                    <div>
                        <div className='milestone-docs'>
                            <PDFView fileName="requirement.pdf" docName="Requirements Document" />
                            <PDFView fileName="design.pdf" docName="Design Document" />
                            <PDFView fileName="test.pdf" docName="Testing Document"/>
                        </div>
                        <h4 style={{margin: '8px 0 24px 0'}}>Documentation</h4>
                    </div>  
                );
            case 1: // Milestone 1
                return null;
            case 2: // Milestone 2
                return null;
            case 3: // Milestone 3
                return null;
            case 4: // Sem Plan 2
                return (
                    <div className='milestone-docs'>
                        <PDFView fileName="plan2.pdf" docName="Plan Document" />
                    </div>
                );
            case 5: // Milestone 4
                return null;
            case 6: // Milestone 5
                return (
                    <div className='milestone-docs'>
                        <PDFView fileName="poster.pdf" docName="Poster" />
                    </div>
                );
            case 7: // Milestone 6
                return;
            default:
                return;
        }
    };

    return (
        <div className='milestone-container '>
            <div className='milestone-content'>

                {/* Left side content */}
                <div className='milestone-left'>
                    {renderContent()}
                    {getVideoAndReport(id).video && 
                        <div>
                            <DemoVideo videoID={getVideoAndReport(id).video} />
                            <h4 style={{ marginTop: '8px' }}>Demo Video</h4>
                        </div>
                    }
                </div>

                {/* Divider line */}
                <div style={{ borderLeft: '3px solid var(--text)', margin: '0 24px' }}/>

                {/* Right side content */}
                <div className='milestone-right'>
                    {/* UPDATE COVER IMAGE WHEN PRESENTATIONS ARE REDONE */}
                    <PDFView 
                        fileName={ 
                            id === 0 ? 
                            'plan1Pres.pdf' : (
                                id === 4 ? 'plan2Pres.pdf' : `milestone${presentationID}.pdf`
                            ) 
                        }
                        docName="Presentation" 
                        coverImage="/clockworkweb/documents/presentation2.png"
                    />
                    <h4 style={{margin: '8px 0 24px 0'}}>Presentation</h4>

                    {getVideoAndReport(id).report &&
                        <PDFView 
                            fileName={`eval${getVideoAndReport(id).report}.pdf`} 
                            docName={`Progress Evaluation #${getVideoAndReport(id).report}`} 
                        />
                    }
                </div>
                
            </div> 
        </div>
    );
};

export default Milestone;