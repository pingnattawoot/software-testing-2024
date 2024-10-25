import CloseIcon from "@mui/icons-material/Close";
import {
  CardMedia,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useMenuByIdQuery } from "../../gql/generates";

export const FoodDetailDialog = ({
  open,
  onClose,
  menuId,
}: {
  open: boolean;
  onClose: () => void;
  menuId?: number;
}) => {
  const { data, loading } = useMenuByIdQuery({
    variables: {
      id: menuId || 0,
    },
    skip: !menuId,
  });

  if (!menuId) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      {loading && <CircularProgress />}
      {!loading && data && (
        <>
          <DialogTitle position="relative">
            {data.menuById.name}
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="500px"
              width="100%"
              image={data.menuById.image}
              alt={data.menuById.name}
            />
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              {data.menuById.description}
            </Typography>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};
