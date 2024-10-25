import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, height: "100vh" }}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={1}
        >
          <Typography
            variant="h1"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            สวัสดีจ้า
          </Typography>
          <Box
            component="img"
            src="/images/mos.webp"
            alt="logo"
            width={128}
            height={128}
          />
          <Link to="/menu">
            <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
              ดูเมนูอาหาร
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
