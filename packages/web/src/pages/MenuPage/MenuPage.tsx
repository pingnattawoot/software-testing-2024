import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Container,
  Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodCard } from "../../components/FoodCard/FoodCard";
import { FoodDetailDialog } from "../../components/FoodDetailDialog/FoodDetailDialog";
import { FoodLoadingCard } from "../../components/FoodLoadingCard.tsx/FoodLoadingCard";
import { useMenuQuery } from "../../gql/generates";

export const MenuPage = () => {
  const { data, loading } = useMenuQuery();
  const navigate = useNavigate();
  const [selectedMenuId, setSelectedMenuId] = useState<number>();

  return (
    <Container maxWidth="lg">
      <Stack my={4} direction="row" gap={2} alignItems="center">
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">Back</Typography>
      </Stack>
      <Grid container spacing={2}>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <FoodLoadingCard />
              </Grid>
            ))
          : data?.menu.map((food) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={food.id}>
                <FoodCard
                  id={food.id}
                  name={food.name}
                  imageUrl={food.image}
                  onClick={(id) => setSelectedMenuId(id)}
                />
              </Grid>
            ))}
      </Grid>
      <FoodDetailDialog
        open={!!selectedMenuId}
        onClose={() => setSelectedMenuId(undefined)}
        menuId={selectedMenuId}
      />
    </Container>
  );
};
