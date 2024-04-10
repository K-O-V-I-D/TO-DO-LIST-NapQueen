import { styled } from "@mui/material/styles";
import { BottomNavigation } from "@mui/material";

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  borderRadius: "24px 24px 0 0",
  background: `linear-gradient(to bottom, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
  backdropFilter: "blur(20px)",
  margin: "0px 20px 0px -20px",
  padding: "18px 10px 32px 10px",
  transition: "background 0.3s ease",
  "&:hover": {
    background: `linear-gradient(to bottom, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
  },
  "&.glow": {
    background: `linear-gradient(to bottom, ${theme.palette.secondary.dark}c8, ${theme.palette.secondary.main}e6)`,
  },
}));

export default StyledBottomNavigation;
