import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Tproduct } from "../../store/custom/tproduct";
import {  useAppSelector } from "../../store/categories/hooks";
import { api } from "../../template/layout";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import {
  FaStar,
} from "react-icons/fa6";
import AddButton from "../buttons/addButton";
import IncDec from "../buttons/Inc&Dec";
import AddToFavorit from "../buttons/favorit";
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
}: Tproduct) {
  
  
  const context = React.useContext(api);
  
  const localhost = "https://back-last.onrender.com/";
  // for getting current product
  const getCurrent = () => {
    context?.setCurrent({
      title: title,
      img: img,
      price: price,
      id: id,
      discount: discount,
      about: about,
      isInCart: isInCart,
      rating: rating,
      brand,
      material: material,
      color: color,
      size: size,
      isFavorit:isFavorit
    });
  };

  const [currentChosen,setCurrentChosen]=React.useState<Tproduct|undefined>(undefined)
const chosen = useAppSelector(state => state.cart.productfullinfo);
React.useEffect(() => {
  if (chosen) {
    const found = chosen.find(ele => ele.id === id);
    setCurrentChosen(found);
  }
}, [chosen, id]);
// قيمة ابتدائية (false أو حسب الحالة الأولية للكارت)

const [isAdded, setIsAdded] = React.useState(() =>
  chosen?
  chosen.some(ele => ele.id == id):false
);



React.useEffect(() => {
  if(chosen){
  const newVal = chosen.some(ele => ele.id == id);
    setIsAdded(newVal);

  }else{
    setIsAdded(false)
  }


}, [chosen, id]);




  

  return (
    <Card
    id={id.toString()}
      sx={{
        maxWidth: 250,
        height: "fit-content",
        borderRadius: 3,
        boxShadow: 3,
        position: "relative",
      }}
    >
      {isAdded ? (
        <PiSealCheckFill className="w-[30px] h-[30px] absolute z-[19] end-[-2px] top-[-2px]  rounded-full text-green-600 " />
      ) : null}

      <Link to={"/aboutitem"}>
        <CardActionArea onClick={getCurrent}>
          <CardMedia
            component="img"
            image={localhost + img}
            alt={title}
            sx={{
              height: 150,
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
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
              variant="body1"
              color="text.secondary"
              sx={{ display: "flex", gap: 1, padding: "5px 0" }}
              noWrap
            >
              <p className="text-gray-700">price:</p>

              <p
                className="text-sm text-red-600"
                style={{ textDecoration: "line-through" }}
              >
                {discount}$
              </p>
              <p className="text-sky-700">{price}$</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions sx={{ justifyContent: "space-between", pb: 2 }}>
        <AddToFavorit id={id} />
  

        {isAdded ? (
          <IncDec id={id} quantity={currentChosen?.quantity?currentChosen?.quantity:0} />
        ) : (
          <AddButton id={id} />
        )}
      </CardActions>
    </Card>
  );
}
