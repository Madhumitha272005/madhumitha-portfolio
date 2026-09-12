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
      <section id="home" className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">WELCOME TO MY PORTFOLIO</p>

          <h1 className="hero-name">
            Madhumitha
          </h1>

          <h2 className="hero-title">
            AI / ML DEVELOPER
          </h2>

          <p className="hero-keywords">
            INNOVATION <span>•</span> IDEAS INTO INTELLIGENCE{" "}
            <span>•</span> EXPLORATION <span>•</span> CREATION
          </p>

          <p className="hero-description">
            I transform data, ideas, and complex problems into intelligent
            solutions — powered by AI, driven by innovation, and built for
            real-world impact.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
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

{selectedProject === "xsafe" && (

  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(event) => event.stopPropagation()}
    >

      <button
        type="button"
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <span className="modal-label">
        PROJECT 01
      </span>

      <h2>
        XSafeNet
      </h2>

      <h4>
        Explainable Multimodal Road-Safety Intelligence
      </h4>

      <div className="modal-section">

        <h5>
          Introduction
        </h5>

        <p>
          XSafeNet is an Explainable Multimodal Predictive Risk
          Intelligence Framework designed for vehicle telemetry and
          Indian road hazards. The system combines computer vision,
          vehicle telemetry, weather context, multimodal risk fusion,
          calibrated risk prediction, and explainable AI to generate
          an overall road-safety assessment.
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Objectives
        </h5>

        <ul>
          <li>
            Detect road hazards from road-scene video using YOLO.
          </li>

          <li>
            Analyze vehicle telemetry such as speed, acceleration,
            braking, GPS, and time-related information.
          </li>

          <li>
            Incorporate weather conditions into road-risk analysis.
          </li>

          <li>
            Combine multiple sources of information through
            multimodal risk fusion.
          </li>

          <li>
            Predict an overall road-safety risk score.
          </li>

          <li>
            Provide calibrated confidence and uncertainty information
            for risk predictions.
          </li>

          <li>
            Explain important factors influencing the predicted risk
            using explainable AI techniques.
          </li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Workflow
        </h5>

        <p className="modal-workflow">
          Road Video → YOLO Hazard Detection → Vehicle Telemetry
          → Weather Context → AEMRF-Net → Risk Prediction
          → CalibRisk Intelligence → Explainable AI
          → Overall Safety Report
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Key Features
        </h5>

        <ul>
          <li>Road hazard detection</li>
          <li>Vehicle telemetry analysis</li>
          <li>Weather-aware risk analysis</li>
          <li>Multimodal risk fusion</li>
          <li>Risk prediction</li>
          <li>Uncertainty calibration</li>
          <li>SHAP-based explainability</li>
          <li>Overall safety reporting</li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Technologies
        </h5>

        <div className="modal-tech">
          <span>Python</span>
          <span>YOLO</span>
          <span>OpenCV</span>
          <span>Scikit-learn</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>SHAP</span>
          <span>Streamlit</span>
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

    </div>

  </div>

)}


{selectedProject === "fraud" && (

  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(event) => event.stopPropagation()}
    >

      <button
        type="button"
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <span className="modal-label">
        PROJECT 02
      </span>

      <h2>
        Credit Card Fraud Detection
      </h2>

      <h4>
        Machine Learning Based Fraud Analysis
      </h4>

      <div className="modal-section">

        <h5>
          Introduction
        </h5>

        <p>
          Credit Card Fraud Detection is a machine learning project
          developed to identify potentially fraudulent transactions
          from highly imbalanced transaction data. The project
          focuses on preprocessing transaction data, training
          classification models, and evaluating their ability to
          distinguish fraudulent transactions from legitimate ones.
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Objectives
        </h5>

        <ul>
          <li>
            Analyze transaction data to identify suspicious patterns.
          </li>

          <li>
            Handle highly imbalanced fraud-detection data.
          </li>

          <li>
            Apply machine learning classification techniques.
          </li>

          <li>
            Train and evaluate a Random Forest model.
          </li>

          <li>
            Measure model performance using appropriate evaluation
            metrics.
          </li>

          <li>
            Use ROC-AUC to evaluate the model's ability to distinguish
            fraudulent and legitimate transactions.
          </li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Workflow
        </h5>

        <p className="modal-workflow">
          Transaction Dataset → Data Preprocessing → Feature Analysis
          → Model Training → Fraud Prediction → Model Evaluation
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Key Features
        </h5>

        <ul>
          <li>Transaction data preprocessing</li>
          <li>Fraud and non-fraud classification</li>
          <li>Imbalanced-data analysis</li>
          <li>Random Forest classification</li>
          <li>ROC-AUC evaluation</li>
          <li>Model performance analysis</li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Technologies
        </h5>

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

    </div>

  </div>

)}


{selectedProject === "deepfake" && (

  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(event) => event.stopPropagation()}
    >

      <button
        type="button"
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <span className="modal-label">
        PROJECT 03
      </span>

      <h2>
        Deepfake Voice Detection
      </h2>

      <h4>
        AI-Based Synthetic Audio Detection
      </h4>

      <div className="modal-section">

        <h5>
          Introduction
        </h5>

        <p>
          Deepfake Voice Detection is an AI-based audio security
          project designed to distinguish genuine human speech from
          synthetic or manipulated voice recordings. The system uses
          audio processing, feature extraction, machine learning, and
          spectrogram-based analysis to identify characteristics
          associated with deepfake audio.
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Objectives
        </h5>

        <ul>
          <li>
            Analyze audio recordings for deepfake characteristics.
          </li>

          <li>
            Extract meaningful features from speech signals.
          </li>

          <li>
            Use machine learning for genuine-versus-synthetic
            audio classification.
          </li>

          <li>
            Apply spectrogram-based analysis to represent audio
            information visually.
          </li>

          <li>
            Evaluate model performance using classification metrics.
          </li>

          <li>
            Explore explainability methods for understanding model
            predictions.
          </li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Workflow
        </h5>

        <p className="modal-workflow">
          Audio Input → Preprocessing → Feature Extraction
          → Spectrogram Analysis → ML Classification
          → Deepfake Prediction → Explainability
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Key Features
        </h5>

        <ul>
          <li>Audio preprocessing</li>
          <li>Feature extraction using Librosa</li>
          <li>Spectrogram analysis</li>
          <li>Deepfake audio classification</li>
          <li>Model evaluation</li>
          <li>Streamlit-based application</li>
          <li>Explainability exploration</li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Technologies
        </h5>

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

    </div>

  </div>

)}


{selectedProject === "lung" && (

  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(event) => event.stopPropagation()}
    >

      <button
        type="button"
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <span className="modal-label">
        PROJECT 04
      </span>

      <h2>
        Lung Cancer Risk Prediction
      </h2>

      <h4>
        Machine Learning Healthcare Prediction
      </h4>

      <div className="modal-section">

        <h5>
          Introduction
        </h5>

        <p>
          Lung Cancer Risk Prediction is a machine learning project
          focused on estimating lung cancer risk from relevant health
          and lifestyle attributes. The project demonstrates data
          preprocessing, exploratory analysis, feature analysis,
          classification, and model evaluation for predictive
          healthcare applications.
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Objectives
        </h5>

        <ul>
          <li>
            Analyze health and lifestyle attributes related to
            lung cancer risk.
          </li>

          <li>
            Preprocess and prepare the dataset for machine learning.
          </li>

          <li>
            Identify useful patterns and relationships within the data.
          </li>

          <li>
            Apply machine learning classification techniques.
          </li>

          <li>
            Evaluate the predictive performance of the trained model.
          </li>

          <li>
            Demonstrate how machine learning can support early
            risk-assessment workflows.
          </li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Workflow
        </h5>

        <p className="modal-workflow">
          Dataset → Data Cleaning → Exploratory Analysis
          → Feature Processing → Model Training
          → Risk Prediction → Model Evaluation
        </p>

      </div>

      <div className="modal-section">

        <h5>
          Key Features
        </h5>

        <ul>
          <li>Healthcare dataset analysis</li>
          <li>Data preprocessing</li>
          <li>Feature analysis</li>
          <li>Machine learning classification</li>
          <li>Risk prediction</li>
          <li>Model evaluation</li>
          <li>Data visualization</li>
        </ul>

      </div>

      <div className="modal-section">

        <h5>
          Technologies
        </h5>

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