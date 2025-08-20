import React, {  useState } from "react";
import Loader from "../feedback/loading";
import { FaHeart } from "react-icons/fa";
import actDeleteFavority from "../../store/favority/act/actdeletefavority";
import { CiHeart } from "react-icons/ci";
import actGetFavority from "../../store/favority/act/actgetfavority";
import { useAppDispatch, useAppSelector } from "../../store/categories/hooks";
import { useNavigate } from "react-router-dom";
import getAllFavo from "../../store/favority/act/getallfavo";

const AddToFavorit = ({
  id,
}: {
  id: number;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loadingFavo, setLoadingFavo] = useState(false);

  const favorit=useAppSelector(state=>state.favority.favorities)
  const [isInFavorit, setIsInFavorit] = React.useState(false);
  
  React.useEffect(() => {
      const newVal = favorit.some(ele => ele.id == id);
      setIsInFavorit(newVal);
        console.log(favorit)
  
    
  }, [favorit, id]);
  return (
    <div>
      {loadingFavo ? (
        <Loader />
      ) : isInFavorit ? (
        <FaHeart
          className="text-red-500 cursor-pointer text-sm"
          onClick={async () => {
            setLoadingFavo(true);
            await dispatch(actDeleteFavority(id));
            await dispatch(getAllFavo(''))
                        setLoadingFavo(false);
          }}
        />
      ) : (
        <CiHeart
          className="text-xl cursor-pointer"
          onClick={async () => {
            if (localStorage.getItem("userName")) {
              setLoadingFavo(true);
              await dispatch(actGetFavority(id));
              setLoadingFavo(false);
            } else {
                        navigate("/login");

            }
          }}
        />
      )}
    </div>
  );
};

export default AddToFavorit;
