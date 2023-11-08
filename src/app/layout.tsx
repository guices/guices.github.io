import type { Metadata } from "next";
import "./globals.css";
import pkg from "../../package.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: pkg.name,
  description: pkg.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page">
        <header className="page__header">
          <div className="masthead">
            <div className="masthead__prepend">
              <a href="/">
                <FontAwesomeIcon icon={faTerminal} height={16} width={16} />
              </a>
            </div>
            <div className="masthead__body">
              <h1 className="visible@print">{pkg.name}</h1>
              Software Development by{" "}
              <a href={pkg.author.url}>{pkg.author.name}</a>
            </div>
            <div className="masthead__append">
              <a href={pkg.repository.url}>
                <FontAwesomeIcon icon={faGithub} height={16} width={16} />
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
