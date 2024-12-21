const CV = () => {
    // Path to your PDF file
    const pdfUrl = '/CV_Bruno.pdf';

    return (
        <div className="cv-container" style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Lebenslauf</h1>
            
            {/* Embed PDF in an iframe */}
            <embed
    src={pdfUrl}
    title="CV Viewer"
    style={{
        width: '65vw',
        height: '75vh',
        border: '2px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        background: '#f8f9fa',
        margin: '20px auto',
    }}
></embed>

            {/* Download Button */}
            <div style={{ marginTop: '20px' }}>
                <a 
                    href={pdfUrl} 
                    download="Your-CV.pdf" 
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#007bff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default CV;
