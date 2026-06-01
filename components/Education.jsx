import stiLogo from '../STI-logo.webp';
import jarmmethLogo from '../Jarmmeth.jpg';

function Education() {
  return (
    <div className="section" id="education">
      <h2>Education</h2>
      <p><b>Bachelor of Science in Information Technology</b></p>
      <ul>
        <li>STI San Jose del Monte</li>
        <img src={stiLogo} alt="STI Logo" className="school-logo" />
        <li>Jarmmeth College Inc.</li>
        <img src={jarmmethLogo} alt="Jarmmeth Logo" className="school-logo" />
      </ul>
    </div>
  );
}

export default Education;