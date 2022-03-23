import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckOutCard({
  product: { id, name, productType, price, rating, image, description },
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        flexGrow: 1,
        maxWidth: 345,
        margin: 3,
      }}
    >
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardActions
        disableSpacing
        sx={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#x2B50;</p>
            ))}
        </IconButton>

        <IconButton aria-label="show more">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
