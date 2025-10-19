import { Repository } from "../repository/repository";
import type { GitHubRepo } from "../../types/github";

import styles from "./repositories-list.module.css";

type RepositoriesListProps = {
  repoList: GitHubRepo[];
};

const RepositoriesList = ({ repoList }: RepositoriesListProps) => {
  return (
    <ol className={styles.list}>
      {repoList.map((repo) => (
        <Repository key={repo.id} repo={repo} />
      ))}
    </ol>
  );
};

export { RepositoriesList };
