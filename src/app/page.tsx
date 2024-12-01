import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <>
      <div
        className="greeting"
        style={{
          backgroundColor: "#006400",
          color: "#FFFFFF",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h2>Good morning adcosta</h2>
      </div>
      <div
        className="banner"
        style={{
          backgroundColor: "#006400",
          color: "#FFFFFF",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h2>Join TechJam 2024 and Showcase Your GitHub Actions Skills!</h2>
      </div>
      <header
        className="header"
        style={{
          backgroundColor: "#006400",
          color: "#FFFFFF",
          padding: "20px",
          borderBottom: "3px solid #228B22",
        }}
      >
        <h1>TechJam 2024</h1>
        <p>
          Welcome to TechJam 2024, a competition aimed at promoting the use of
          GitHub Actions for enhancing Governance, Risk, and Compliance (GRC)
          processes. This event brings together tech enthusiasts and
          professionals to innovate and share solutions that leverage GitHub
          Actions to improve speed to delivery and streamline compliance
          efforts.
        </p>
      </header>
      <main
        className="main"
        style={{
          backgroundColor: "#F5F5DC",
          color: "#4B3621",
          padding: "20px",
          border: "2px solid #228B22",
          borderRadius: "10px",
          margin: "20px",
        }}
      >
        <div
          style={{
            borderBottom: "2px solid #228B22",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>Hello TechJam2024</h2>
        </div>
        <section
          className="competition-details"
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #006400",
            borderRadius: "5px",
          }}
        >
          <h3>Competition Overview</h3>
          <p>
            TechJam 2024 is designed to challenge participants to create
            innovative solutions using GitHub Actions. Participants will work in
            teams to solve real-world governance, risk, and compliance
            challenges while demonstrating the power of automation and
            collaboration.
          </p>
        </section>
        <section
          className="tracks"
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #006400",
            borderRadius: "5px",
          }}
        >
          <h3>Competition Tracks</h3>
          <ul>
            <li>
              Governance Automation: Streamline governance processes using
              GitHub Actions.
            </li>
            <li>
              Risk Management: Develop solutions that identify and mitigate
              risks through automation.
            </li>
            <li>
              Compliance Efficiency: Build workflows that enhance compliance
              with industry standards.
            </li>
          </ul>
        </section>
        <section
          className="prizes"
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #006400",
            borderRadius: "5px",
          }}
        >
          <h3>Prizes</h3>
          <p>
            Participants will have the chance to win cash prizes, mentorship
            opportunities, and GitHub swag. Showcase your skills and compete for
            the top spot!
          </p>
        </section>
        <Link
          href="/about"
          style={{ color: "#006400", textDecoration: "underline" }}
        >
          About
        </Link>
        <br />
        {flags.isFeatureEnabled("search") && (
          <input
            placeholder="Search"
            style={{
              marginTop: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #006400",
            }}
          />
        )}
      </main>
      <footer
        className="footer"
        style={{
          backgroundColor: "#006400",
          color: "#FFFFFF",
          padding: "20px",
          borderTop: "3px solid #228B22",
          textAlign: "center",
        }}
      >
        <p>
          Stay connected with TechJam 2024 by exploring our upcoming events and
          sessions. Don&#39;t miss the chance to showcase your expertise in
          GitHub Actions and collaborate with industry experts!
        </p>
        <Link
          href="/schedule"
          style={{ color: "#FFFFFF", textDecoration: "underline" }}
        >
          View Schedule
        </Link>
        <br />
        <Link
          href="/register"
          style={{
            color: "#FFFFFF",
            textDecoration: "underline",
            marginTop: "10px",
            display: "inline-block",
          }}
        >
          Register Now
        </Link>
      </footer>
    </>
  );
}
