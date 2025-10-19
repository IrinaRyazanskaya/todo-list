import { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Octokit } from "@octokit/rest";

import { Contacts } from "../contacts/contacts";
import { RepositoriesList } from "../repositories-list/repositories-list";
import type { GitHubRepo, GitHubUser } from "../../types/github";
import { UserLoader } from "./user-loader";
import { UserMobileLoader } from "./user-mobile-loader";
import { RepoLoader } from "./repo-loader";
import { RepoMobileLoader } from "./repo-mobile-loader";

import styles from "./about.module.css";
import iconEmptySrc from "./empty-icon.png";

const octokit = new Octokit();

type AboutState = {
  isRepoLoading: boolean;
  isUserLoading: boolean;
  repoList: GitHubRepo[];
  userInfo: GitHubUser | null;
  userStatus?: number;
  repoStatus?: number;
};

const extractStatus = (error: unknown): number | undefined => {
  if (typeof error === "object" && error !== null && "status" in error) {
    const { status } = error as { status?: number };
    return status;
  }

  return undefined;
};

class About extends Component<Record<string, never>, AboutState> {
  state: AboutState = {
    isRepoLoading: true,
    isUserLoading: true,
    repoList: [],
    userInfo: null,
    userStatus: undefined,
    repoStatus: undefined,
  };

  componentDidMount(): void {
    octokit.repos
      .listForUser({
        username: "IrinaRyazanskaya",
      })
      .then(({ data, status }) => {
        this.setState({
          isRepoLoading: false,
          repoList: data,
          repoStatus: status,
        });
      })
      .catch((error: unknown) => {
        this.setState({
          isRepoLoading: false,
          repoStatus: extractStatus(error),
        });
      });

    octokit.rest.users
      .getByUsername({
        username: "IrinaRyazanskaya",
      })
      .then(({ data, status }) => {
        this.setState({
          isUserLoading: false,
          userInfo: data,
          userStatus: status,
        });
      })
      .catch((error: unknown) => {
        this.setState({
          isUserLoading: false,
          userStatus: extractStatus(error),
        });
      });
  }

  render() {
    const { isUserLoading, isRepoLoading, repoList, userInfo, userStatus, repoStatus } = this.state;

    return (
      <article className={styles.wrap}>
        <section className={styles.aboutWrap}>
          {isUserLoading && (
            <>
              <MediaQuery maxDeviceWidth={726}>
                <UserMobileLoader />
              </MediaQuery>
              <MediaQuery minDeviceWidth={727}>
                <UserLoader />
              </MediaQuery>
            </>
          )}
          {!isUserLoading && userStatus === 200 && userInfo && <Contacts userInfo={userInfo} />}
          {!isUserLoading && userStatus !== 200 && (
            <div className={styles.aboutError}>
              <p className={styles.aboutErrorText}>Ошибка загрузки информации о пользователе</p>
            </div>
          )}
        </section>
        <section className={styles.repositoriesWrap}>
          {isRepoLoading && (
            <>
              <MediaQuery maxDeviceWidth={726}>
                <RepoMobileLoader />
              </MediaQuery>
              <MediaQuery minDeviceWidth={727}>
                <RepoLoader />
              </MediaQuery>
            </>
          )}
          {!isRepoLoading && repoStatus === 200 && repoList.length > 0 && (
            <RepositoriesList repoList={repoList} />
          )}
          {!isRepoLoading && repoStatus === 200 && repoList.length === 0 && (
            <div className={styles.emptyWrap}>
              <img
                src={iconEmptySrc}
                alt="Девушка возле пустого листа"
                className={styles.emptyImage}
              />
              <p className={styles.emptyText}>Репозитории отсутствуют</p>
              <p className={styles.emptySubText}>
                Добавьте как минимум один репозиторий на&nbsp;
                <a className={styles.emptyLink} href="https://github.com/">
                  github.com
                </a>
              </p>
            </div>
          )}
          {!isRepoLoading && repoStatus !== 200 && (
            <div className={styles.errorWrap}>
              <img
                src={iconEmptySrc}
                alt="Девушка возле пустого листа"
                className={styles.errorImage}
              />
              <p className={styles.errorText}>Что-то пошло не так...</p>
              <p className={styles.errorSubText}>
                Попробуйте&nbsp;
                <Link className={styles.errorLink} to="/">
                  загрузить
                </Link>
                &nbsp;еще раз
              </p>
            </div>
          )}
        </section>
      </article>
    );
  }
}

export { About };
