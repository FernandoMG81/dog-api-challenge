import ContentLoader from "react-content-loader"

export const BreedSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 300 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="566" y="232" rx="3" ry="3" width="52" height="6" /> 
    <rect x="113" y="51" rx="3" ry="3" width="220" height="18" /> 
    <rect x="15" y="13" rx="6" ry="6" width="90" height="92" /> 
    <rect x="564" y="121" rx="0" ry="0" width="35" height="13" />
  </ContentLoader>
)

