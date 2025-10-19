import classnames from "classnames";

import type { GitHubRepo } from "../../types/github";

import styles from "./repository.module.css";
import iconStarSrc from "./star-icon.svg";
import iconForksSrc from "./forks-icon.svg";

type RepositoryProps = {
  repo: GitHubRepo;
};

const Repository = ({ repo }: RepositoryProps) => {
  const updatedAt = repo.updated_at ? new Date(repo.updated_at) : null;

  return (
    <li className={styles.repo}>
      <a className={styles.link} href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>
      <div className={styles.info}>
        <div
          className={classnames({
            [styles.languageCircle]: true,
            [styles.htmlCircle]: repo.language === "HTML",
            [styles.cssCircle]: repo.language === "CSS",
            [styles.jsCircle]: repo.language === "JavaScript",
            [styles.pythonCircle]: repo.language === "Python",
            [styles.cPlusPlusCircle]: repo.language === "C++",
            [styles.typeScriptCircle]: repo.language === "TypeScript",
            [styles.emptyCircle]: repo.language === null,
          })}
        ></div>
        <span
          className={classnames({
            [styles.language]: true,
            [styles.languageEmpty]: repo.language === null,
          })}
        >
          {repo.language}
        </span>
        <img className={styles.icon} alt="Иконка звезда" src={iconStarSrc} />
        <span className={styles.star}>{repo.stargazers_count}</span>
        <img className={styles.icon} alt="Иконка forks" src={iconForksSrc} />
        <span className={styles.forks}>{repo.forks_count}</span>
        <span className={styles.date}>
          {updatedAt
            ? `Updated on ${updatedAt.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}`
            : "Updated recently"}
        </span>
      </div>
    </li>
  );
};

export { Repository };
