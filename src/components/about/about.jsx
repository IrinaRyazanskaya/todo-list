import { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

import styles from './about.module.css';

const octokit = new Octokit();

class About extends Component {
    state = {
        isRepoLoading: true,
        isUserLoading: true,
        repoList: [],
        userInfo: {},
        userStatus: undefined,
        repoStatus: undefined,
    };

    componentDidMount() {
        octokit.repos
            .listForUser({
                username: 'IrinaRyazanskaya',
            })
            .then(({ data, status }) => {
                this.setState({
                    isRepoLoading: false,
                    repoList: data,
                    repoStatus: status,
                });
            })
            .catch((error) => {
                this.setState({
                    isRepoLoading: false,
                    repoStatus: error.status,
                });
            });

        octokit.rest.users
            .getByUsername({
                username: 'IrinaRyazanskaya',
            })
            .then(({ data, status }) => {
                this.setState({
                    isUserLoading: false,
                    userInfo: data,
                    userStatus: status,
                });
            })
            .catch((error) => {
                this.setState({
                    isUserLoading: false,
                    userStatus: error.status,
                });
            });
    }

    render() {
        const {
            isUserLoading,
            isRepoLoading,
            repoList,
            userInfo,
            userStatus,
            repoStatus,
        } = this.state;

        return (
            <article className={styles.wrap}>
                <h1 className={styles.header}>
                    {isUserLoading || isRepoLoading ? (
                        <CircularProgress color="secondary" />
                    ) : (
                        'Обо мне'
                    )}
                </h1>
                {!isUserLoading && userStatus === 200 && (
                    <div className={styles.info}>
                        <img
                            src={userInfo.avatar_url}
                            alt="Аватар пользователя"
                            className={styles.photo}
                        ></img>
                        <p className={styles.text}>
                            <a
                                className={styles.link}
                                href={userInfo.html_url}
                                target="_blank"
                            >
                                {userInfo.name}
                            </a>
                        </p>
                        <p className={styles.text}>{userInfo.login}</p>
                        <p className={styles.text}>{userInfo.bio}</p>
                    </div>
                )}
                {!isUserLoading && userStatus !== 200 && (
                    <div className={styles.error}>
                        Ошибка загрузки информации о пользователе
                    </div>
                )}
                {!isRepoLoading && (
                    <ol className={styles.list}>
                        {repoList.map((repo) => (
                            <li key={repo.id} className={styles.listItem}>
                                <a
                                    className={styles.link}
                                    href={repo.html_url}
                                    target="_blank"
                                >
                                    {repo.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                )}
                {!isRepoLoading && repoStatus !== 200 && (
                    <div className={styles.error}>
                        Ошибка загрузки списка репозиториев
                    </div>
                )}
            </article>
        );
    }
}

export { About };
