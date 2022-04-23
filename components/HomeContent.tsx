import { heights } from "@mantine/core/lib/components/Badge/Badge.styles";
import NavLinks from "./NavLinks";

const HomeContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
        paddingTop: '15rem',
        paddingLeft: '7rem',
        height: '100vh',
        gap: '1rem'
      }}
    >
      <NavLinks />
    </div>
  ) 
}

export default HomeContent;