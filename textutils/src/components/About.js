import React, { useState, useRef, useEffect } from 'react'

export default function About(props) {
  const [openSection, setOpenSection] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenSection(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
      <div className="container" ref={containerRef}>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
          <h1>About Us</h1>
          <p>
            Welcome to TextUtils, your ultimate companion for text transformation and analysis. We're passionate about 
            making text processing simple, fast, and accessible to everyone. Our platform provides a comprehensive suite 
            of tools designed to help you manipulate, analyze, and optimize your text content with ease.
          </p>

          <div className="accordion" id="aboutAccordion" style={{'--bs-accordion-bg': props.mode === 'light' ? '#fff' : '#212529', '--bs-accordion-border-color': props.mode === 'light' ? '#dee2e6' : '#495057'}}>
            {/* Mission Section */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${openSection !== 'mission' ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => toggleSection('mission')}
                  aria-expanded={openSection === 'mission'}
                  style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}
                >
                  Our Mission
                </button>
              </h2>
              <div 
                id="missionCollapse"
                className={`accordion-collapse collapse ${openSection === 'mission' ? 'show' : ''}`}
                data-bs-parent="#aboutAccordion"
              >
                <div className="accordion-body" style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}>
                  At TextUtils, our mission is to empower users with intelligent text processing capabilities. Whether you're 
                  a writer, developer, student, or content creator, we believe everyone deserves access to powerful text tools 
                  without complexity or cost.
                </div>
              </div>
            </div>

            {/* What We Offer Section */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${openSection !== 'offer' ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => toggleSection('offer')}
                  aria-expanded={openSection === 'offer'}
                  style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}
                >
                  What We Offer
                </button>
              </h2>
              <div 
                id="offerCollapse"
                className={`accordion-collapse collapse ${openSection === 'offer' ? 'show' : ''}`}
                data-bs-parent="#aboutAccordion"
              >
                <div className="accordion-body" style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}>
                  Our suite includes features for case conversion, character counting, word analysis, text formatting, and much more. 
                  We're committed to continuous improvement and regularly add new features based on user feedback and emerging needs.
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${openSection !== 'choose' ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => toggleSection('choose')}
                  aria-expanded={openSection === 'choose'}
                  style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}
                >
                  Why Choose Us
                </button>
              </h2>
              <div 
                id="chooseCollapse"
                className={`accordion-collapse collapse ${openSection === 'choose' ? 'show' : ''}`}
                data-bs-parent="#aboutAccordion"
              >
                <div className="accordion-body" style={{color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? '#fff' : '#212529'}}>
                  <strong>Fast & Reliable:</strong> Lightning-quick processing for any text size.<br />
                  <strong>User-Friendly:</strong> Intuitive interface that requires no learning curve.<br />
                  <strong>Privacy First:</strong> Your data stays with you—we don't store or share your content.<br />
                  <strong>Free Forever:</strong> Access all features without hidden costs or subscriptions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
