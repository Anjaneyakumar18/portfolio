import './Achievements.css';

function CompetitionBox({ title, description, badges, imageSrc, imageAlt, buttonLabel, buttonUrl }) {
  return (
    <div className="competition-box">
      <h3 className="competition-title">{title}</h3>
      <img className="competition-image" src={imageSrc} alt={imageAlt} /><br/>

      <p className="competition-description">{description}</p>
      <div className="competition-badges">
        {badges.map((badge, index) => (
          <div key={index} className="competition-badge">{badge}</div>
        ))}
      </div><br/>
      <a
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="competition-button"
      >
        {buttonLabel}
      </a>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="coding-competitions-section">
      <h1 className="coding-competitions-title">My Coding Achievements</h1>

      <div className="achievements-container">
        <CompetitionBox
          title="Competitive Programming"
          description="Participate in prestigious coding competitions like TCS CodeVita and LeetCode Weekly Contests."
          badges={["TCS CodeVita season 12 pre finalist", "5+ LeetCode Weekly Contest"]}
          imageSrc="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20180248.png"
          imageAlt="TCS CodeVita"
          buttonLabel="Visit Leetcode Weekly Contest"
          buttonUrl="https://leetcode.com/u/anjaneyakumar1804/"
        />

        <CompetitionBox
          title="LeetCode"
          description="Earned significant milestones in LeetCode challenges and mastered data science with Pandas."
          badges={[
            "LeetCode 50 Days Challenge",
            "LeetCode 100 Days Challenge",
            "LeetCode 200 Days Challenge",
            "LeetCode Top 20%",
            "Pandas Mastery Badges",
          ]}
          imageSrc="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20180157.png"
          imageAlt="LeetCode & Pandas"
          buttonLabel="Visit LeetCode"
          buttonUrl="https://leetcode.com/u/anjaneyakumar1804/"
        />

        <CompetitionBox
          title="HackerRank Stars"
          description="Earned stars and certifications on HackerRank in Python, SQL, Problem Solving, and JavaScript."
          badges={[
            "5 Stars in Python",
            "4 Stars in SQL",
            "3 Stars in Problem Solving",
            "2 Stars in Java",
          ]}
          imageSrc="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20180224.png"
          imageAlt="HackerRank"
          buttonLabel="Visit HackerRank Badges"
          buttonUrl="https://www.hackerrank.com/profile/anjaneyakumar181"
        />
      </div>
    </section>
  );
}
