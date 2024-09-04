import React from "react";

export default function About(props) {
  return (
    
    <div className="container my-4" style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}>
      <h3>About Us</h3>
      <hr/>
      <p>At TextMaster, we specialize in providing easy-to-use, browser-friendly tools for correcting text cases and counting words and characters. 
        Whether you're a writer, student, professional, or just someone who wants to make sure their text is perfectly formatted, our tools are designed to help you achieve your goals effortlessly.</p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className={`accordion-button text-${props.mode==='light' ? 'dark':'light'}`}
              type="button"
              style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse text-${props.mode==='light' ? 'dark':'light'}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}>
            <strong>Our mission is to make text editing simple and accessible for everyone.</strong><br/>
            We believe that everyone should have access to powerful text correction and counting tools without having to download software or pay for expensive services. 
            That's why we've made our tools completely free to use.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
             className={`accordion-button text-${props.mode==='light' ? 'dark':'light'}`}
              type="button"
              style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What We Offer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse text-${props.mode==='light' ? 'dark':'light'}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}>
            <strong>Case Correction: </strong> Easily convert your text to uppercase, lowercase, title case, and more with just a few clicks.<br/>
            <strong>Word and Character Count: </strong> Quickly count the number of words and characters in your text to meet your specific requirements.<br/>
            <strong>Browser-Friendly: </strong> Our tools are designed to work seamlessly in any web browser, so you can use them anytime, anywhere.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
             className={`accordion-button text-${props.mode==='light' ? 'dark':'light'}`}
              type="button"
              style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Choose TextMaster?
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse text-${props.mode==='light' ? 'dark':'light'}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'#36393F':'white'}}>
            <strong>Free and Accessible: </strong> We are committed to providing our services for free, ensuring that everyone has access to top-quality text editing tools.<br/>
            <strong>User-Friendly Interface: </strong> Our tools are designed with simplicity in mind, making them easy to use for everyone, regardless of technical expertise.<br/>
            <strong>Reliable and Accurate: </strong> You can trust our tools to deliver precise results, helping you to create perfectly formatted text every time.
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <strong>Join our growing community of satisfied users and experience the convenience and efficiency of TextMaster today. We're here to help you make your text the best it can be!</strong>
    </div>
  
  );
}
