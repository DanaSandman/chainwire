import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  padding-top: 1rem;
  background: #1d1d1de3;
  backdrop-filter: blur(7px);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: bold;
    color: #fcfcfc;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #919191;
    }
  }
  div {
    padding-top: 1.3rem;
    width: 100%;
    padding-bottom: 20%;
    bottom: 0;
  }
`;

export const BASE_APP_URL = "http://localhost:3000/";

export const PRIMARY_ITEM = "primary";
// export const SUB_ITEMS = "sub";
export const MENU_ITEMS = [
  {
    title: "EUR/USD",
    type: PRIMARY_ITEM,
    path: "/eur_usd",
  },
  {
    title: "USD/GBP",
    type: PRIMARY_ITEM,
    path: "/usd_gbp",
  },
];
const Menu = ({ open, setOpen }) => {
  const renderMenuItem = (item, index) => {
    if (item.type) {
      return (
        <Link id={index} to={item.path}>
          {item.title}
        </Link>
      );
    }
  };

  return (
    <StyledMenu onClick={() => setOpen(!open)} open={open}>
      {open && (
        <>
          <div
            className="flex column"
            animate={{ opacity: [0, 1], y: [100, 100, 0] }}
            transition={{ ease: "easeOut", delay: 0.5 }}
          >
            {MENU_ITEMS.map(renderMenuItem)}
          </div>
        </>
      )}
    </StyledMenu>
  );
};

export default Menu;
