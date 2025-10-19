import { Repository } from "../repository/repository";

import styles from "./repositories-list.module.css";

const RepositoriesList = ({ repoList }) => {
  return (
    <ol className={styles.list}>
      {repoList.map((repo) => (
        <Repository key={repo.id} repo={repo} />
      ))}
    </ol>
  );
};

export { RepositoriesList };
