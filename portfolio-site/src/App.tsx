import './App.css'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Kaushik Ranade</h1>
        <p>
          <a href="mailto:kaushikranade07@gmail.com">kaushikranade07@gmail.com</a>
          {' '}| +91-7588311187
        </p>
        <p>
          <a href="https://www.linkedin.com">LinkedIn</a> |{' '}
          <a href="https://github.com">GitHub</a>
        </p>
      </header>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Western University, Ontario, Canada</strong> – PhD in
            Computer Science (Expected 202X). Research Focus: Formal
            Verification, AI Safety, and Mechanistic Interpretability.
          </li>
          <li>
            <strong>University of Mumbai, Mumbai, India</strong> – Bachelor of
            Engineering in Computer Engineering, Aug 2019 – June 2023. CGPA:
            8.79/10.
          </li>
        </ul>
      </section>

      <section>
        <h2>Research Interests</h2>
        <ul>
          <li>Formal Verification &amp; Model Checking</li>
          <li>Causal Tracing &amp; Mechanistic Interpretability</li>
          <li>AI Safety in Vision-Language Models (e.g., LLaVA, FigStep attacks)</li>
          <li>Autonomous Systems &amp; Multi-Agent Planning</li>
          <li>Reinforcement Learning in Robotics (Isaac Lab)</li>
        </ul>
      </section>

      <section>
        <h2>Research Projects</h2>
        <ul>
          <li>
            <strong>SpecMAS: Multi-Agent Formal Verification Pipeline</strong>
            &nbsp;| 2024–Present – Designed a pipeline using LLMs to generate,
            verify and critique NuSMV models from SOP documents.
          </li>
          <li>
            <strong>Jailbreak Causal Tracing on Vision-Language Models</strong>
            &nbsp;| 2025–Present – Studied typographic jailbreak attacks like
            FigStep on LLaVA&nbsp;1.5 and explored attention rollouts and
            activation patching.
          </li>
          <li>
            <strong>Franka Cube Lift with TD3 (Isaac Lab)</strong> – Trained an
            RL agent using TD3 with custom reward shaping.
          </li>
          <li>
            <strong>Collision Avoidance in Maritime RL Simulations</strong> –
            Created a Unity simulation and used PPO for collision-free path
            learning.
          </li>
          <li>
            <strong>CLEVRER Paper Reimplementation</strong> – Reproduced
            neuro-symbolic reasoning models for visual question answering.
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> Python, Java, C, HTML/CSS, JavaScript, SQL,
          R
        </p>
        <p>
          <strong>Frameworks &amp; Tools:</strong> PyTorch, TensorFlow, Keras,
          HuggingFace, LangChain, Flask, Unity, Git, React
        </p>
        <p>
          <strong>Verification &amp; Simulation:</strong> NuSMV, SPIN, Promela,
          Isaac Lab
        </p>
      </section>

      <section>
        <h2>Select Projects</h2>
        <ul>
          <li>
            <strong>OpenMIC: AI Comedy Co-Pilot</strong> – Fine-tuning LLMs on
            stand-up comedy datasets with a promptable Flask interface.
          </li>
          <li>
            <strong>Vaani: Sign Language Recognition App</strong> – Built a
            CNN-based gesture classifier and deployed a PWA on IBM Cloud.
          </li>
          <li>
            <strong>Hancon: Hand Gesture Command System</strong> – Custom LSTM
            for gesture recognition controlling OS-level commands.
          </li>
          <li>
            <strong>GAN for Handwritten Digit Generation</strong> – Trained a
            vanilla GAN on MNIST with FID 18.5.
          </li>
        </ul>
      </section>

      <section>
        <h2>Leadership &amp; Certifications</h2>
        <ul>
          <li>Support &amp; Advisor | WIEECT Student Committee (2022–Present)</li>
          <li>Technical Committee Member | WIEECT (2021–2022)</li>
          <li>AWS Machine Learning Scholar (Udacity, 2022–2023)</li>
          <li>IBM ML Certificate (Coursera, 2019–2023)</li>
          <li>IELTS Score: 8.5 Band</li>
        </ul>
      </section>

      <section>
        <h2>Publications &amp; Extras</h2>
        <ul>
          <li>(In Progress) Jailbreak Risk Attribution via Causal Tracing in VLMs</li>
          <li>(Planned) SpecMAS: A Multi-Agent System for Formal Verification of SOPs</li>
          <li>Total Academic Papers Read: &gt;200</li>
          <li>Secret Power: Makes friends with obscure compiler jokes 💀</li>
        </ul>
      </section>
    </div>
  )
}

