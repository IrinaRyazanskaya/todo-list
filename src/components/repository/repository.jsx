import classnames from 'classnames';
import iconForksSrc from './forks-icon.svg';
import iconStarSrc from './star-icon.svg';

import styles from './repository.module.css';

const Repository = ({ repo }) => {
    return (
        <li className={styles.repo}>
            <a className={styles.link} href={repo.html_url} target="_blank">
                {repo.name}
            </a>
            <div className={styles.info}>
                <div
                    className={classnames({
                        [styles.languageCircle]: true,
                        [styles.htmlCircle]: repo.language === 'HTML',
                        [styles.cssCircle]: repo.language === 'CSS',
                        [styles.jsCircle]: repo.language === 'JavaScript',
                        [styles.pythonCircle]: repo.language === 'Python',
                        [styles.cPlusPlusCircle]: repo.language === 'C++',
                        [styles.typeScriptCircle]: repo.language === 'TypeScript',
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
                <img
                    className={styles.icon}
                    alt="Иконка звезда"
                    src={iconStarSrc}
                />
                <span className={styles.star}>{repo.stargazers_count}</span>
                <img
                    className={styles.icon}
                    alt="Иконка forks"
                    src={iconForksSrc}
                />
                <span className={styles.forks}>{repo.forks_count}</span>
                <span className={styles.date}>
                    {'Updated on ' +
                        new Date(repo.updated_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                </span>
            </div>
        </li>
    );
};

export { Repository };
