import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="logo">
          MADHUMITHA J
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Project</a>
          <a href="#services">Service</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* ================= HOME ================= */}

<section id="home" className="hero-section">

  <div className="hero-container">

    {/* LEFT — PROFESSIONAL PHOTO */}

    <div className="hero-photo-wrapper">

      <div className="hero-photo-frame">

        <img
          src="/madhu professionalpic.jpeg"
          alt="Madhumitha - AI ML Developer"
          className="hero-photo"
        />

      </div>

    </div>


    {/* RIGHT — DETAILS */}

    <div className="hero-content">

      <p className="hero-label">
        AI / ML DEVELOPER
      </p>

      <h1>
        Madhumitha
      </h1>

      <p className="hero-keywords">
        INNOVATION&nbsp; • &nbsp;IDEAS INTO INTELLIGENCE
        &nbsp; • &nbsp;EXPLORATION&nbsp; • &nbsp;CREATION
      </p>

      <p className="hero-description">
        I transform data, ideas, and complex problems into
        intelligent solutions — powered by AI, driven by
        innovation, and built for real-world impact.
      </p>

      <div className="hero-buttons">

        <a
          href="#projects"
          className="hero-primary-button"
        >
          Explore My Work ↗
        </a>

        <a
          href="/MADHUMITHA J CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-secondary-button"
        >
          View Resume ↗
        </a>

      </div>

    </div>

  </div>

</section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-container">

          <div className="about-image-wrapper">
            <img
              src="/aboutmeportfolio.jpeg"
              alt="Madhumitha"
              className="about-image"
            />
          </div>

          <div className="about-content">

            <h3>
              Turning curiosity into intelligent solutions.
            </h3>

            <p>
              I’m a Computer Science Engineering student passionate about AI,
              Machine Learning, and Python development. I enjoy transforming
              real-world problems into intelligent solutions through
              experimentation, data, and technology.
            </p>

            <p>
              My work spans fraud detection, healthcare prediction, AI audio
              security, and multimodal road-safety intelligence. I’m driven by
              curiosity, continuous learning, and the belief that good
              technology should not only be intelligent, but also practical,
              explainable, and impactful.
            </p>

            <div className="about-tags">
              <span>AI / ML</span>
              <span>Python</span>
              <span>Computer Vision</span>
              <span>Explainable AI</span>
            </div>

          </div>

        </div>

      </section>
      <section id="toolbox" className="section toolbox-section">
  <div className="section-heading">
    <p>03 / TOOLBOX</p>
    <h2>Technologies I Use</h2>
    <span>
      Tools and technologies I use to build AI, machine learning,
      computer vision, and Python-based solutions.
    </span>
  </div>

  <div className="skills-grid">

    <div className="skill-box">
      <div className="skill-symbol python-symbol">🐍</div>
      <h3>Python</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">⚙️</div>
      <h3>C++</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🤖</div>
      <h3>Artificial Intelligence</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🧠</div>
      <h3>Machine Learning</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🎯</div>
      <h3>YOLO</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">👁️</div>
      <h3>OpenCV</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">📊</div>
      <h3>Data</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🐼</div>
      <h3>Pandas</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🔢</div>
      <h3>NumPy</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">⚗️</div>
      <h3>Scikit-learn</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🔥</div>
      <h3>TensorFlow</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">⚡</div>
      <h3>PyTorch</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">📈</div>
      <h3>Matplotlib</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🗄️</div>
      <h3>SQL</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🌿</div>
      <h3>Git</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">🐙</div>
      <h3>GitHub</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">📓</div>
      <h3>Jupyter Notebook</h3>
    </div>

    <div className="skill-box">
      <div className="skill-symbol">💻</div>
      <h3>VS Code</h3>
    </div>

  </div>
</section>


      {/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">

  <div className="section-heading">
    <p>02 / SELECTED WORK</p>
    <h2>My Projects</h2>
    <span>
      Building intelligent systems for real-world problems.
    </span>
  </div>

  <div className="projects-grid">

    {/* ================= PROJECT 1 ================= */}

    <article className="project-card">

      <div className="project-number">
        01
      </div>
      

      <div className="project-image project-xsafe">
            <img
    src="/xsafenet.jpeg"
    alt="XSafeNet Project"
    className="project-image"
  />

        <span>XSafeNet</span>
      </div>
      

      <div className="project-content">

        <p className="project-category">
          Explainable Multimodal AI
        </p>

        <h3>
          XSafeNet
        </h3>

        <h4>
          Explainable Multimodal Road-Safety Intelligence
        </h4>

        <p className="project-highlight">
          Predicting road risks before they become accidents.
        </p>

        <p>
          An explainable multimodal AI framework that combines
          road-hazard detection, vehicle telemetry, weather conditions,
          and contextual data to assess and predict road safety risks.
        </p>

        <div className="tech-list">
          <span>Python</span>
          <span>YOLO</span>
          <span>OpenCV</span>
          <span>Scikit-learn</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>SHAP</span>
          <span>Streamlit</span>
        </div>

        <div className="project-actions">

          <button
            type="button"
            className="details-button"
            onClick={() => setSelectedProject("xsafe")}
          >
            View Work ↗
          </button>

          <a
            href="https://github.com/Madhumitha272005/XSAFENET"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>


    {/* ================= PROJECT 2 ================= */}

    <article className="project-card">

      <div className="project-number">
        02
      </div>

      <div className="project-image project-fraud">
        <img
    src="/creditcard.jpeg"
    alt="XSafeNet Project"
    className="project-image"
  />
        <span>Fraud Detection</span>
      </div>
     

      <div className="project-content">

        <p className="project-category">
          Machine Learning
        </p>

        <h3>
          Credit Card Fraud Detection
        </h3>

        <h4>
          Machine Learning Based Fraud Analysis
        </h4>

        <p className="project-highlight">
          Detecting suspicious transactions using machine learning.
        </p>

        <p>
          A machine learning system designed to identify potentially
          fraudulent credit card transactions from highly imbalanced
          transaction data.
        </p>

        <div className="tech-list">
          <span>Python</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-learn</span>
          <span>Random Forest</span>
          <span>ROC-AUC</span>
          <span>Jupyter</span>
        </div>

        <div className="project-actions">

          <button
            type="button"
            className="details-button"
            onClick={() => setSelectedProject("fraud")}
          >
            View Work ↗
          </button>

          <a
            href="https://github.com/Madhumitha272005/credit-card-fraud-detection"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>


    {/* ================= PROJECT 3 ================= */}

    <article className="project-card">

      <div className="project-number">
        03
      </div>

      <div className="project-image project-deepfake">
        <img
    src="/deepfake.jpeg"
    alt="XSafeNet Project"
    className="project-image"
  />
        <span>AI Audio Security</span>
      </div>
   

      <div className="project-content">

        <p className="project-category">
          AI Audio Security
        </p>
          

        <h3>
          Deepfake Voice Detection
        </h3>

        <h4>
          AI-Based Synthetic Audio Detection
        </h4>

        <p className="project-highlight">
          Identifying manipulated and synthetic human voices.
        </p>

        <p>
          An AI-powered audio classification system that analyzes
          voice characteristics and spectrogram-based features to
          distinguish between genuine and deepfake audio.
        </p>

        <div className="tech-list">
          <span>Python</span>
          <span>Librosa</span>
          <span>Scikit-learn</span>
          <span>NumPy</span>
          <span>Streamlit</span>
          <span>Grad-CAM</span>
        </div>

        <div className="project-actions">

          <button
            type="button"
            className="details-button"
            onClick={() => setSelectedProject("deepfake")}
          >
            View Work ↗
          </button>

          <a
            href="https://github.com/Madhumitha272005/DeepFake-Voice-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>


    {/* ================= PROJECT 4 ================= */}

    <article className="project-card">

      <div className="project-number">
        04
      </div>

      <div className="project-image project-lung">
        <img
    src="/lungcancer.jpeg"
    alt="XSafeNet Project"
    className="project-image"
  />
        <span>Healthcare AI</span>
      </div>
     

      <div className="project-content">

        <p className="project-category">
          Healthcare AI
        </p>
         
        <h3>
          Lung Cancer Risk Prediction
        </h3>

        <h4>
          Machine Learning Healthcare Prediction
        </h4>

        <p className="project-highlight">
          Supporting early risk assessment through predictive AI.
        </p>

        <p>
          A machine learning project that analyzes relevant health
          and lifestyle attributes to estimate lung cancer risk.
        </p>

        <div className="tech-list">
          <span>Python</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
          <span>Machine Learning</span>
        </div>

        <div className="project-actions">

          <button
            type="button"
            className="details-button"
            onClick={() => setSelectedProject("lung")}
          >
            View Work ↗
          </button>

          <a
            href="https://github.com/Madhumitha272005/lungcancer-risk-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>

  </div>

</section>


{/* =========================================================
    PROJECT DETAILS MODAL
    ========================================================= */}

{selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(event) => event.stopPropagation()}
    >

      {/* CLOSE BUTTON */}

      <button
        type="button"
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>


      {/* =====================================================
          PROJECT 01 — XSAFENET
          ===================================================== */}

      {selectedProject === "xsafe" && (
        <>
          <div className="modal-top-labels">
            <span className="modal-label">
              Explainable Multimodal AI
            </span>

            <span className="modal-featured">
              ✦ Featured Project
            </span>
          </div>

          <h2>XSafeNet</h2>

          <h4>
            Explainable Multimodal Road-Safety Intelligence
          </h4>


          {/* SUMMARY */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ✦ SUMMARY
            </div>

            <p>
              XSafeNet is an Explainable Multimodal Predictive Risk
              Intelligence Framework designed to assess road-safety
              risks by combining road-hazard detection, vehicle
              telemetry, weather context, multimodal risk fusion,
              calibrated risk prediction, and explainable AI.
            </p>
          </div>


          {/* PROBLEM STATEMENT */}

          <div className="modal-info-box problem-box">
            <div className="modal-box-title">
              ⚠ PROBLEM STATEMENT
            </div>

            <p>
              Road-safety risks are influenced by multiple factors
              such as visible road hazards, vehicle speed,
              acceleration, braking behaviour, weather conditions,
              and surrounding context. Traditional systems may
              analyze these factors separately, making it difficult
              to obtain a unified and explainable assessment of
              overall road risk.
            </p>
          </div>


          {/* PROPOSED SOLUTION */}

          <div className="modal-info-box solution-box">
            <div className="modal-box-title">
              ◈ PROPOSED SOLUTION
            </div>

            <p>
              XSafeNet integrates computer vision, vehicle telemetry,
              weather information, multimodal risk fusion, calibrated
              prediction, and explainable AI into a unified framework.
              The system detects road hazards using YOLO, combines
              them with vehicle and environmental information through
              AEMRF-Net, and generates an overall road-safety risk
              prediction with contributing factors and uncertainty.
            </p>
          </div>


          {/* OBJECTIVES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◎ OBJECTIVES
            </div>

            <ul className="modal-list">
              <li>
                Detect road hazards from road-scene images and videos
                using YOLO.
              </li>

              <li>
                Analyze vehicle telemetry such as speed,
                acceleration, braking, GPS, and time information.
              </li>

              <li>
                Incorporate weather conditions into road-risk
                analysis.
              </li>

              <li>
                Fuse visual, telemetry, and weather information
                using multimodal risk analysis.
              </li>

              <li>
                Predict an overall road-safety risk score.
              </li>

              <li>
                Provide calibrated confidence and uncertainty
                information.
              </li>

              <li>
                Explain important factors influencing risk using
                explainable AI.
              </li>
            </ul>
          </div>


          {/* WORKFLOW */}

          <div className="modal-info-box workflow-box">
            <div className="modal-box-title">
              ⇢ WORKFLOW
            </div>

            <p className="modal-workflow">
              Road Video → YOLO Hazard Detection → Hazard Risk
              Analysis → Vehicle Telemetry → Weather Context →
              AEMRF-Net → Risk Prediction → CalibRisk Intelligence →
              Explainable AI → Overall Safety Report
            </p>
          </div>


          {/* KEY FEATURES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◉ KEY FEATURES
            </div>

            <div className="modal-feature-grid">
              <span>Road Hazard Detection</span>
              <span>Vehicle Telemetry Analysis</span>
              <span>Weather-Aware Risk Analysis</span>
              <span>Multimodal Risk Fusion</span>
              <span>Risk Prediction</span>
              <span>CalibRisk Intelligence</span>
              <span>SHAP Explainability</span>
              <span>Overall Safety Reporting</span>
            </div>
          </div>


          {/* TOOLS */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ⚙ TOOLS & TECHNOLOGIES
            </div>

            <div className="modal-tech">
              <span>Python</span>
              <span>YOLO</span>
              <span>OpenCV</span>
              <span>Scikit-learn</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>SHAP</span>
              <span>Streamlit</span>
              <span>OpenWeatherMap</span>
            </div>
          </div>


          <a
            href="https://github.com/Madhumitha272005/XSAFENET"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github"
          >
            View XSafeNet on GitHub ↗
          </a>
        </>
      )}


      {/* =====================================================
          PROJECT 02 — CREDIT CARD FRAUD DETECTION
          ===================================================== */}

      {selectedProject === "fraud" && (
        <>
          <div className="modal-top-labels">
            <span className="modal-label">
              Machine Learning
            </span>

            <span className="modal-featured">
              ✦ Featured Project
            </span>
          </div>

          <h2>Credit Card Fraud Detection</h2>

          <h4>
            Machine Learning Based Fraud Analysis
          </h4>


          {/* SUMMARY */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ✦ SUMMARY
            </div>

            <p>
              Credit Card Fraud Detection is a machine learning
              project developed to identify potentially fraudulent
              transactions from highly imbalanced transaction data.
              The system performs data preprocessing, feature
              analysis, model training, fraud prediction, and
              performance evaluation.
            </p>
          </div>


          {/* PROBLEM STATEMENT */}

          <div className="modal-info-box problem-box">
            <div className="modal-box-title">
              ⚠ PROBLEM STATEMENT
            </div>

            <p>
              Credit card transaction datasets contain a very small
              proportion of fraudulent transactions compared with
              legitimate transactions. This class imbalance makes
              fraud detection challenging because a model must
              identify rare fraudulent patterns without incorrectly
              classifying legitimate transactions.
            </p>
          </div>


          {/* PROPOSED SOLUTION */}

          <div className="modal-info-box solution-box">
            <div className="modal-box-title">
              ◈ PROPOSED SOLUTION
            </div>

            <p>
              The project applies data preprocessing, feature
              analysis, and machine learning classification to
              distinguish fraudulent transactions from legitimate
              transactions. A Random Forest classifier is trained
              and evaluated using suitable classification metrics,
              including ROC-AUC.
            </p>
          </div>


          {/* OBJECTIVES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◎ OBJECTIVES
            </div>

            <ul className="modal-list">
              <li>
                Analyze credit card transaction data.
              </li>

              <li>
                Preprocess and prepare transaction features.
              </li>

              <li>
                Handle highly imbalanced fraud-detection data.
              </li>

              <li>
                Identify suspicious transaction patterns.
              </li>

              <li>
                Train a Random Forest classification model.
              </li>

              <li>
                Predict fraudulent and legitimate transactions.
              </li>

              <li>
                Evaluate model performance using ROC-AUC and
                classification metrics.
              </li>
            </ul>
          </div>


          {/* WORKFLOW */}

          <div className="modal-info-box workflow-box">
            <div className="modal-box-title">
              ⇢ WORKFLOW
            </div>

            <p className="modal-workflow">
              Transaction Dataset → Data Preprocessing → Feature
              Analysis → Model Training → Fraud Prediction →
              Model Evaluation
            </p>
          </div>


          {/* KEY FEATURES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◉ KEY FEATURES
            </div>

            <div className="modal-feature-grid">
              <span>Transaction Data Analysis</span>
              <span>Data Preprocessing</span>
              <span>Fraud Classification</span>
              <span>Imbalanced Data Analysis</span>
              <span>Random Forest Model</span>
              <span>Fraud Prediction</span>
              <span>ROC-AUC Evaluation</span>
              <span>Model Performance Analysis</span>
            </div>
          </div>


          {/* TOOLS */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ⚙ TOOLS & TECHNOLOGIES
            </div>

            <div className="modal-tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>Random Forest</span>
              <span>ROC-AUC</span>
              <span>Jupyter Notebook</span>
            </div>
          </div>


          <a
            href="https://github.com/Madhumitha272005/credit-card-fraud-detection"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github"
          >
            View Fraud Detection on GitHub ↗
          </a>
        </>
      )}


      {/* =====================================================
          PROJECT 03 — DEEPFAKE VOICE DETECTION
          ===================================================== */}

      {selectedProject === "deepfake" && (
        <>
          <div className="modal-top-labels">
            <span className="modal-label">
              AI Audio Security
            </span>

            <span className="modal-featured">
              ✦ Featured Project
            </span>
          </div>

          <h2>Deepfake Voice Detection</h2>

          <h4>
            AI-Based Synthetic Audio Detection
          </h4>


          {/* SUMMARY */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ✦ SUMMARY
            </div>

            <p>
              Deepfake Voice Detection is an AI-based audio security
              project designed to distinguish genuine human speech
              from synthetic or manipulated voice recordings. The
              system uses audio preprocessing, feature extraction,
              spectrogram analysis, and machine learning to identify
              characteristics associated with deepfake audio.
            </p>
          </div>


          {/* PROBLEM STATEMENT */}

          <div className="modal-info-box problem-box">
            <div className="modal-box-title">
              ⚠ PROBLEM STATEMENT
            </div>

            <p>
              AI-generated and manipulated voice recordings can
              closely resemble genuine human speech, making manual
              identification difficult. An automated system is
              required to analyze audio characteristics and identify
              patterns that may indicate synthetic or manipulated
              speech.
            </p>
          </div>


          {/* PROPOSED SOLUTION */}

          <div className="modal-info-box solution-box">
            <div className="modal-box-title">
              ◈ PROPOSED SOLUTION
            </div>

            <p>
              The project processes voice recordings, extracts
              meaningful audio features using Librosa, represents
              audio characteristics through spectrograms, and uses
              machine learning classification to distinguish between
              genuine and deepfake audio. Explainability techniques
              can also be used to understand model predictions.
            </p>
          </div>


          {/* OBJECTIVES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◎ OBJECTIVES
            </div>

            <ul className="modal-list">
              <li>
                Analyze audio recordings for deepfake characteristics.
              </li>

              <li>
                Preprocess speech signals for machine learning.
              </li>

              <li>
                Extract meaningful features from voice recordings.
              </li>

              <li>
                Generate spectrogram-based representations.
              </li>

              <li>
                Classify genuine and synthetic audio.
              </li>

              <li>
                Evaluate the classification model.
              </li>

              <li>
                Explore explainability for understanding model
                predictions.
              </li>
            </ul>
          </div>


          {/* WORKFLOW */}

          <div className="modal-info-box workflow-box">
            <div className="modal-box-title">
              ⇢ WORKFLOW
            </div>

            <p className="modal-workflow">
              Audio Input → Audio Preprocessing → Feature Extraction
              → Spectrogram Analysis → ML Classification →
              Deepfake Prediction → Explainability
            </p>
          </div>


          {/* KEY FEATURES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◉ KEY FEATURES
            </div>

            <div className="modal-feature-grid">
              <span>Audio Preprocessing</span>
              <span>Feature Extraction</span>
              <span>Librosa Analysis</span>
              <span>Spectrogram Analysis</span>
              <span>Deepfake Classification</span>
              <span>Model Evaluation</span>
              <span>Streamlit Application</span>
              <span>Explainability Exploration</span>
            </div>
          </div>


          {/* TOOLS */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ⚙ TOOLS & TECHNOLOGIES
            </div>

            <div className="modal-tech">
              <span>Python</span>
              <span>Librosa</span>
              <span>Scikit-learn</span>
              <span>NumPy</span>
              <span>Streamlit</span>
              <span>Grad-CAM</span>
            </div>
          </div>


          <a
            href="https://github.com/Madhumitha272005/DeepFake-Voice-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github"
          >
            View Deepfake Voice Detection on GitHub ↗
          </a>
        </>
      )}


      {/* =====================================================
          PROJECT 04 — LUNG CANCER RISK PREDICTION
          ===================================================== */}

      {selectedProject === "lung" && (
        <>
          <div className="modal-top-labels">
            <span className="modal-label">
              Healthcare AI
            </span>

            <span className="modal-featured">
              ✦ Featured Project
            </span>
          </div>

          <h2>Lung Cancer Risk Prediction</h2>

          <h4>
            Machine Learning Healthcare Prediction
          </h4>


          {/* SUMMARY */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ✦ SUMMARY
            </div>

            <p>
              Lung Cancer Risk Prediction is a machine learning
              project focused on estimating lung cancer risk from
              relevant health and lifestyle attributes. The project
              demonstrates data preprocessing, exploratory analysis,
              feature analysis, classification, prediction, and
              model evaluation for a predictive healthcare workflow.
            </p>
          </div>


          {/* PROBLEM STATEMENT */}

          <div className="modal-info-box problem-box">
            <div className="modal-box-title">
              ⚠ PROBLEM STATEMENT
            </div>

            <p>
              Health and lifestyle datasets may contain multiple
              attributes that are associated with lung cancer risk.
              Analyzing these attributes manually can be difficult,
              creating a need for a machine learning approach that
              can identify patterns in the available data and provide
              a risk prediction as a decision-support output.
            </p>
          </div>


          {/* PROPOSED SOLUTION */}

          <div className="modal-info-box solution-box">
            <div className="modal-box-title">
              ◈ PROPOSED SOLUTION
            </div>

            <p>
              The project applies data cleaning, exploratory data
              analysis, feature processing, and machine learning
              classification to analyze health and lifestyle
              attributes. The trained model generates a predicted
              risk category based on the input features and is
              evaluated using appropriate machine learning metrics.
            </p>
          </div>


          {/* OBJECTIVES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◎ OBJECTIVES
            </div>

            <ul className="modal-list">
              <li>
                Analyze health and lifestyle attributes related to
                lung cancer risk.
              </li>

              <li>
                Clean and preprocess the dataset.
              </li>

              <li>
                Perform exploratory data analysis.
              </li>

              <li>
                Identify useful patterns and relationships in the
                data.
              </li>

              <li>
                Apply machine learning classification techniques.
              </li>

              <li>
                Generate lung cancer risk predictions.
              </li>

              <li>
                Evaluate the predictive performance of the model.
              </li>
            </ul>
          </div>


          {/* WORKFLOW */}

          <div className="modal-info-box workflow-box">
            <div className="modal-box-title">
              ⇢ WORKFLOW
            </div>

            <p className="modal-workflow">
              Dataset → Data Cleaning → Exploratory Analysis →
              Feature Processing → Model Training → Risk Prediction
              → Model Evaluation
            </p>
          </div>


          {/* KEY FEATURES */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ◉ KEY FEATURES
            </div>

            <div className="modal-feature-grid">
              <span>Healthcare Dataset Analysis</span>
              <span>Data Preprocessing</span>
              <span>Exploratory Data Analysis</span>
              <span>Feature Analysis</span>
              <span>ML Classification</span>
              <span>Risk Prediction</span>
              <span>Model Evaluation</span>
              <span>Data Visualization</span>
            </div>
          </div>


          {/* TOOLS */}

          <div className="modal-info-box">
            <div className="modal-box-title">
              ⚙ TOOLS & TECHNOLOGIES
            </div>

            <div className="modal-tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>Matplotlib</span>
              <span>Machine Learning</span>
            </div>
          </div>


          <a
            href="https://github.com/Madhumitha272005/lungcancer-risk-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-github"
          >
            View Lung Cancer Project on GitHub ↗
          </a>
        </>
      )}

    </div>
  </div>
)}

      {/* ================= SERVICES ================= */}
      <section id="services" className="section services-section">

        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Services</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span>01</span>
            <h3>AI & Machine Learning</h3>
            <p>
              Building intelligent predictive systems and machine learning
              solutions for real-world problems.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Python Development</h3>
            <p>
              Developing practical applications, automation workflows, and
              data-driven solutions using Python.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Computer Vision</h3>
            <p>
              Creating vision-based systems for object, hazard, and image or
              video analysis.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Explainable AI</h3>
            <p>
              Making machine learning predictions more understandable using
              interpretable AI techniques.
            </p>
          </div>

        </div>

      </section>


    
{/* ================= WHY CHOOSE US / HOW I WORK ================= */}

<section id="how-i-work" className="section workflow-section">

  <div className="section-heading">
    <p>03 / WHY CHOOSE US</p>
    <h2>How I Work</h2>
    <span>
      A practical approach to turning ideas into intelligent, reliable solutions.
    </span>
  </div>

  <div className="workflow-grid">

    {/* 01 DISCOVER */}
    <div className="workflow-card">
      <div className="workflow-number">01</div>

      <div className="workflow-content">
        <p className="workflow-label">DISCOVER</p>

        <h3>Understand the Problem</h3>

        <p>
          I understand the problem, research the domain, identify the data,
          and define a clear technical direction.
        </p>
      </div>
    </div>


    {/* 02 EXPLORE */}
    <div className="workflow-card">
      <div className="workflow-number">02</div>

      <div className="workflow-content">
        <p className="workflow-label">EXPLORE</p>

        <h3>Experiment & Validate</h3>

        <p>
          I experiment with data, algorithms, features, models, and
          prototypes to discover what works best.
        </p>
      </div>
    </div>


    {/* 03 BUILD */}
    <div className="workflow-card">
      <div className="workflow-number">03</div>

      <div className="workflow-content">
        <p className="workflow-label">BUILD</p>

        <h3>Develop the Solution</h3>

        <p>
          I turn validated ideas into reliable applications with testing,
          visualization, explainability, and clean implementation.
        </p>
      </div>
    </div>


    {/* 04 DEPLOY */}
    <div className="workflow-card">
      <div className="workflow-number">04</div>

      <div className="workflow-content">
        <p className="workflow-label">DEPLOY</p>

        <h3>Deliver & Improve</h3>

        <p>
          I package solutions into practical applications, document the
          work, and continuously improve performance and usability.
        </p>
      </div>
    </div>

  </div>

</section>


{/* ================= OUR SERVICES ================= */}

<section id="services" className="section services-section">

  <div className="section-heading">
    <p>04 / OUR SERVICES</p>

    <h2>What I Can Build</h2>

    <span>
      Turning ideas and real-world problems into practical intelligent solutions.
    </span>
  </div>


  <div className="services-grid">

    {/* SERVICE 01 */}
    <div className="service-card">

      <div className="service-number">01</div>

      <div className="service-icon">🤖</div>

      <div className="service-content">

        <p className="service-label">
          AI & MACHINE LEARNING
        </p>

        <h3>
          Intelligent AI Solutions
        </h3>

        <p>
          Building intelligent models for classification, prediction,
          anomaly detection, and real-world decision support.
        </p>

        <div className="service-stack">
          <span>Python</span>
          <span>Scikit-learn</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Jupyter Notebook</span>
        </div>

      </div>

    </div>


    {/* SERVICE 02 */}
    <div className="service-card">

      <div className="service-number">02</div>

      <div className="service-icon">🐍</div>

      <div className="service-content">

        <p className="service-label">
          PYTHON DEVELOPMENT
        </p>

        <h3>
          Practical Python Applications
        </h3>

        <p>
          Turning ideas into practical applications for automation,
          data processing, database management, APIs, and intelligent systems.
        </p>

        <div className="service-stack">
          <span>Python</span>
          <span>Tkinter</span>
          <span>Streamlit</span>
          <span>Flask</span>
          <span>REST APIs</span>
          <span>MySQL</span>
        </div>

      </div>

    </div>


    {/* SERVICE 03 */}
    <div className="service-card">

      <div className="service-number">03</div>

      <div className="service-icon">👁️</div>

      <div className="service-content">

        <p className="service-label">
          COMPUTER VISION
        </p>

        <h3>
          Visual Intelligence
        </h3>

        <p>
          Teaching machines to detect, analyze, and understand
          visual information from images and video.
        </p>

        <div className="service-stack">
          <span>Python</span>
          <span>OpenCV</span>
          <span>YOLO</span>
          <span>NumPy</span>
          <span>Streamlit</span>
        </div>

      </div>

    </div>


    {/* SERVICE 04 */}
    <div className="service-card">

      <div className="service-number">04</div>

      <div className="service-icon">📊</div>

      <div className="service-content">

        <p className="service-label">
          PREDICTIVE ANALYTICS
        </p>

        <h3>
          Data-Driven Predictions
        </h3>

        <p>
          Transforming raw data into meaningful predictions by discovering
          patterns, trends, anomalies, and behavioral signals.
        </p>

        <div className="service-stack">
          <span>Python</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
        </div>

      </div>

    </div>


    {/* SERVICE 05 */}
    <div className="service-card">

      <div className="service-number">05</div>

      <div className="service-icon">🔍</div>

      <div className="service-content">

        <p className="service-label">
          EXPLAINABLE AI
        </p>

        <h3>
          Transparent AI Decisions
        </h3>

        <p>
          Making machine-learning decisions easier to understand by
          revealing the factors behind predictions and risk scores.
        </p>

        <div className="service-stack">
          <span>Python</span>
          <span>SHAP</span>
          <span>LIME</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
        </div>

      </div>

    </div>

  </div>

</section>
{/* =========================================================
   CONTACT
   ========================================================= */}

<section id="contact" className="section contact-section">

  {/* ================= CONTACT INTRO ================= */}

  <div className="contact-hero">

    <p className="contact-section-number">
      05 / CONTACT
    </p>

    <h2>
      Let's create something great
    </h2>

    <h3>
      Have a project in mind? I'd love to hear about it.
    </h3>

    <p className="contact-hero-text">
      Whether you have an idea, a technical challenge, or an
      opportunity to collaborate, feel free to get in touch.
    </p>

    <a
      href="#contact-form"
      className="contact-talk-button"
    >
      Let's Talk ↗
    </a>

  </div>


  {/* ================= CONTACT INFORMATION ================= */}

  <div className="contact-info-grid">

    <div className="contact-info-item">

      <span className="contact-info-title">
        Email
      </span>

      <a href="mailto:madhumithavinothkumar27@gmail.com">
        madhumithavinothkumar27@gmail.com
      </a>

    </div>


    <div className="contact-info-item">

      <span className="contact-info-title">
        Phone
      </span>

      <a href="tel:8754588853">
        8754588853
      </a>

    </div>


    <div className="contact-info-item">

      <span className="contact-info-title">
        Location
      </span>

      <span>
        Chennai, Tamil Nadu.
      </span>

    </div>

  </div>


  {/* ================= CONTACT FORM ================= */}

  <div
    className="contact-form-section"
    id="contact-form"
  >

    <div className="contact-form-heading">

      <p>
        CONTACT
      </p>

      <h3>
        Let's Connect
      </h3>

      <span>
        Send a message and I'll get back to you as soon as I can.
      </span>

    </div>


    {/* SOCIAL LINKS */}

    <div className="contact-social-links">

      <a
        href="https://github.com/Madhumitha272005"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/madhumitha27/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://leetcode.com/u/Madhumithavinothkumar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeetCode ↗
      </a>

    </div>


    {/* FORM */}

    <form
      className="portfolio-contact-form"
      action="https://formsubmit.co/madhumithavinothkumar27@gmail.com"
      method="POST"
    >

      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Contact Message"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />


      {/* NAME */}

      <div className="form-field">

        <label htmlFor="contact-name">
          Name
        </label>

        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

      </div>


      {/* EMAIL */}

      <div className="form-field">

        <label htmlFor="contact-email">
          Email
        </label>

        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
        />

      </div>


      {/* SUBJECT */}

      <div className="form-field">

        <label htmlFor="contact-subject">
          Subject
        </label>

        <input
          id="contact-subject"
          type="text"
          name="subject"
          placeholder="What would you like to discuss?"
          required
        />

      </div>


      {/* MESSAGE */}

      <div className="form-field">

        <label htmlFor="contact-message">
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows="6"
          placeholder="Tell me about your project or idea..."
          required
        ></textarea>

      </div>


      <button
        type="submit"
        className="contact-submit-button"
      >
        Send Message ↗
      </button>

    </form>

  </div>

</section>


{/* =========================================================
   FOOTER
   ========================================================= */}

<footer className="site-footer">

  <div className="footer-main">

    {/* BRAND */}

    <div className="footer-brand">

      <h3>
        MADHUMITHA J
      </h3>

      <p>
        Building intelligent solutions with code,
        curiosity, and purpose.
      </p>

    </div>


    {/* NAVIGATION */}

    <div className="footer-column">

      <h4>
        Navigation
      </h4>

      <a href="#home">
        Home
      </a>

      <a href="#about">
        About Me
      </a>

      <a href="#projects">
        Work
      </a>

      <a href="#contact">
        Contact
      </a>

    </div>


    {/* RESOURCES */}

    <div className="footer-column">

      <h4>
        Resources
      </h4>

      <a
  href="/MADHUMITHA J CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
      <a
        href="https://github.com/Madhumitha272005"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://leetcode.com/u/Madhumithavinothkumar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeetCode
      </a>

    </div>


    {/* FOLLOW */}

    <div className="footer-column">

      <h4>
        Follow
      </h4>

      <a
        href="https://github.com/Madhumitha272005"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/madhumitha27/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://leetcode.com/u/Madhumithavinothkumar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeetCode ↗
      </a>

    </div>

  </div>


  {/* FOOTER BOTTOM */}

    <div className="footer-bottom">

    <span>
      © 2026 MADHUMITHA J. All rights reserved.
    </span>

    <span>
      AI / ML Developer · Python Developer
    </span>

  </div>

</footer>

</div>
  );
}

export default App;