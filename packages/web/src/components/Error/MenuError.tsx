import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Stack, Typography, useTheme } from "@mui/material";

export const MenuError = () => {
  const theme = useTheme();

  return (
    <Stack gap={1} alignItems="center" justifyContent="center" height="100%">
      <LocalDiningIcon
        fontSize="large"
        style={{ color: theme.palette.grey[500], fontSize: "4rem" }}
      />
      <Typography variant="h6">เกิดข้อผิดพลาด ไม่พบเมนูอาหาร</Typography>
    </Stack>
  );
};
