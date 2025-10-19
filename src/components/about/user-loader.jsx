import ContentLoader from "react-content-loader";

const UserLoader = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 850 176"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="16" y="0" rx="10" ry="10" width="176" height="176" />
      <rect x="238" y="18" rx="10" ry="10" width="250" height="30" />
      <rect x="238" y="56" rx="10" ry="10" width="250" height="16" />
      <rect x="238" y="80" rx="10" ry="10" width="250" height="16" />
      <rect x="238" y="104" rx="10" ry="10" width="250" height="16" />
      <rect x="660" y="134" rx="10" ry="10" width="174" height="40" />
    </ContentLoader>
  );
};

export { UserLoader };
