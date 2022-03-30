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
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

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

export default function Product({
  product: { id, name, productType, price, rating, image, description },
}) {
  const [expanded, setExpanded] = React.useState(false);

  const [{ basket }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: { id, name, productType, price, rating, image, description },
    });
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
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Image not found"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Add to Cart"
          onClick={basket ? addToBasket : null}
        >
          <AddShoppingCart font-size="lange" />
        </IconButton>
        <IconButton>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#x2B50;</p>
            ))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
