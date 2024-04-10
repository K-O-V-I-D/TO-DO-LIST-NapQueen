import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { getFontColor } from "../utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddTaskButton = styled(Button)`
  margin-top: 4px;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  background: linear-gradient(135deg, #000000, #00ff00); /* Updated gradient */
  color: white;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
  margin: 20px;
  width: 400px;
  text-transform: capitalize;

  &:hover {
    background: linear-gradient(135deg, #00ff00, #000000); /* Updated gradient on hover */
    box-shadow: 0px 0px 24px 0px #00ff0080;
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
    color: ${({ theme }) => getFontColor(theme.secondary)};
  }
`;

export const StyledInput = styled(TextField)<{ helpercolor?: string }>`
  margin: 12px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    transition: 0.3s all;
    width: 400px;
    color: ${({ theme }) => getFontColor(theme.secondary)};
  }
  .MuiFormHelperText-root {
    color: ${({ helpercolor, theme }) => helpercolor || getFontColor(theme.secondary)};
    opacity: 0.8;
  }
`;
