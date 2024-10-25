import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const FoodCard = ({
  id,
  name,
  imageUrl,
  onClick,
}: {
  id: number;
  name: string;
  imageUrl: string;
  onClick?: (id: number) => void;
}) => {
  return (
    <Card onClick={() => onClick?.(id)}>
      <CardActionArea>
        <CardMedia image={imageUrl} sx={{ height: 200 }} />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
