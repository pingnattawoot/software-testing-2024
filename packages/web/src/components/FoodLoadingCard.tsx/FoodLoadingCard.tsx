import { Box, Skeleton } from "@mui/material";

export const FoodLoadingCard = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <Skeleton variant="text" animation="wave" sx={{ mt: 1 }} />
      <Skeleton variant="text" width="60%" animation="wave" sx={{ mt: 1 }} />
    </Box>
  );
};
