import ContentLoader from 'react-content-loader';

const UserMobileLoader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 344 120"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="10" y="0" rx="10" ry="10" width="120" height="120" />
            <rect x="136" y="10" rx="10" ry="10" width="176" height="20" />
            <rect x="136" y="36" rx="8" ry="8" width="176" height="10" />
            <rect x="136" y="54" rx="8" ry="8" width="176" height="10" />
            <rect x="136" y="72" rx="8" ry="8" width="176" height="10" />
            <rect x="224" y="94" rx="10" ry="10" width="110" height="26" />
        </ContentLoader>
    );
};

export { UserMobileLoader };
