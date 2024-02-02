import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="299" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="336" rx="15" ry="15" width="280" height="91" />
    <rect x="114" y="435" rx="10" ry="10" width="164" height="28" />
    <rect x="0" y="435" rx="10" ry="10" width="93" height="28" />
  </ContentLoader>
);

export default Skeleton;
