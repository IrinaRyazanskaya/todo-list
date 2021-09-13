import ContentLoader from 'react-content-loader';

const RepoLoader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 850 320"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="32" y="12" rx="10" ry="10" width="786" height="56" />
            <rect x="32" y="76" rx="10" ry="10" width="786" height="56" />
            <rect x="32" y="140" rx="10" ry="10" width="786" height="56" />
            <rect x="32" y="204" rx="10" ry="10" width="786" height="56" />
            <rect x="32" y="268" rx="10" ry="10" width="786" height="56" />
        </ContentLoader>
    );
};

export { RepoLoader };
