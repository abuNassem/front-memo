import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Tproduct } from "../../store/custom/tproduct";
import { useAppSelector } from "../../store/categories/hooks";
import { api } from "../../template/layout";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import AddButton from "../buttons/addButton";
import IncDec from "../buttons/Inc&Dec";
import AddToFavorit from "../buttons/favorit";
import Loader from "../feedback/loading";

export default function Cart({
  isFavorit,
  title,
  img,
  price,
  id,
  discount,
  about,
  isInCart,
  rating,
  brand,
  material,
  color,
  size,
  _id
}: Tproduct) {
  const context = React.useContext(api);

  const localhost = "/api/";

  // for getting current product
  const getCurrent = () => {
    context?.setCurrent({
      title,
      img,
      price,
      _id,
      discount,
      about,
      isInCart,
      rating,
      brand,
      material,
      color,
      size,
      isFavorit,
      
    });
  };

  const [currentChosen, setCurrentChosen] = React.useState<Tproduct | undefined>(undefined);
  const chosen = useAppSelector((state) => state.cart.productfullinfo);

  React.useEffect(() => {
    if (chosen) {
      const found = chosen.find((ele) => ele._id=== _id);
      setCurrentChosen(found);
    }
  }, [chosen, _id]);

  const [isAdded, setIsAdded] = React.useState<boolean>(() =>
    chosen ? chosen.some((ele) => ele._id=== _id) : false
  );

  React.useEffect(() => {
    if (chosen) {
      const newVal = chosen.some((ele) => ele._id ===_id);
      setIsAdded(newVal);
    } else {
      setIsAdded(false);
    }
  }, [chosen, id]);


React.useEffect(() => {
  const hash = window.location.hash.substring(1);
  if (!hash) return;
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}, [])
  return (
    <div id={_id}>
<Card
      
      sx={{
        maxWidth: 250,
        height: "fit-content",
        borderRadius: 3,
        boxShadow: 3,
        position: "relative",
      }}
    >
      {isAdded && (
        <PiSealCheckFill className="w-[30px] h-[30px] absolute z-[19] end-[-2px] top-[-2px] rounded-full text-green-600 " />
      )}

      <Link to={"/aboutitem"}>
        <CardActionArea onClick={getCurrent}>
        {
          img?<CardMedia
            component="img"
            image={localhost + img}
            loading="lazy"
            alt={title}
            sx={{
              height: 150,
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />:<Loader/>
        }
          
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {title}
              <span className="flex gap-1">
                <FaStar className="text-yellow-500" />
                {rating}
              </span>
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: "15px", color: "rgba(73, 71, 71, 1)" }}
            >
              {about}
            </Typography>
            <Typography
  component="div" // مهم عشان ما يطلع <p>
  variant="body1"
  color="text.secondary"
  sx={{ display: "flex", gap: 1, padding: "5px 0" }}
  noWrap
>
  <span className="text-gray-700 font-bold">price:</span>
  {discount && (
    <span
      className="text-sm text-red-600"
      style={{ textDecoration: "line-through" }}
    >
      {discount}$
    </span>
  )}
  <span className="text-sky-700">{price}$</span>
</Typography>

          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions sx={{ justifyContent: "space-between", pb: 2 }}>
        <AddToFavorit _id={_id} title={title} img={img} />
        {isAdded ? (
          <IncDec _id={_id} quantity={currentChosen?.quantity ?? 0} />
        ) : (
          <AddButton  _id={_id} />
        )}
      </CardActions>
    </Card>
    </div>
    
  );
}
