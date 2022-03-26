import { alpha, styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
const NavBarWrapper = styled(`nav`)`
  height: 8vh;
  display: flex;
  justify-content: flex-start;
`;
const NavBarLogo = styled(`div`)`
  margin: 0;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  align-items: center;
  font-family: Roboto;
  & > a {
    text-decoration: none;
    color: black;
  }
`;
const NavBarSliderWrapper = styled(`div`)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  & > .level {
    width: 8%;
    font-size: 0.8rem;
    padding-left: 5px;
    @media (max-width: 768px) {
      width: 15%;
    }
    @media (max-width: 578px) {
      width: 25%;
    }
  }
  & > .slider {
    width: 70%;
    display: flex;
  }
`;
const NavBarLevelSlider = styled(Slider)(({ theme }) => ({
  width: 90,
  verticalAlign: "middle",
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 0px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 0px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
  "& .MuiSlider-rail, .MuiSlider-track": {
    height: "8px",
  },
}));
const NavBarFormatWrapper = styled(`div`)`
  margin-left: auto;
`;
export {
  NavBarWrapper,
  NavBarLogo,
  NavBarFormatWrapper,
  NavBarSliderWrapper,
  NavBarLevelSlider,
};
