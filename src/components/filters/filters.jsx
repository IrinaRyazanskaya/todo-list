import styles from './filters.module.css';

const Filters = ({
    countInProgress,
    countIsDone,
    onClickFilterDone,
    onClickFilterActive,
    onClickFilterAll,
    currentFilter,
}) => (
    <div className={styles.filters}>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="completed"
                type="radio"
                name="radio"
                checked={currentFilter === 'done'}
                onChange={() => onClickFilterDone()}
            />
            <label className={styles.label} htmlFor="completed">
                Завершённые: {countIsDone}
            </label>
        </div>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="active"
                type="radio"
                name="radio"
                checked={currentFilter === 'active'}
                onChange={() => onClickFilterActive()}
            />
            <label className={styles.label} htmlFor="active">
                Незавершённые: {countInProgress}
            </label>
        </div>
        <div className={styles.wrap}>
            <input
                className={styles.radio}
                id="all"
                type="radio"
                name="radio"
                checked={currentFilter === 'all'}
                onChange={() => onClickFilterAll()}
            />
            <label className={styles.label} htmlFor="all">
                Все
            </label>
        </div>
    </div>
);

export { Filters };
