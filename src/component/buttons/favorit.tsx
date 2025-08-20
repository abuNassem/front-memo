import { useState, useEffect } from "react";
import Loader from "../feedback/loading";
import { FaHeart } from "react-icons/fa";
import actDeleteFavority from "../../store/favority/act/actdeletefavority";
import { CiHeart } from "react-icons/ci";
import actGetFavority from "../../store/favority/act/actgetfavority";
import { useAppDispatch, useAppSelector } from "../../store/categories/hooks";
import getAllFavo from "../../store/favority/act/getallfavo";

type AddToFavoritProps = {
  id: number;
};

const AddToFavorit: React.FC<AddToFavoritProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [loadingFavo, setLoadingFavo] = useState(false);

  const favorit = useAppSelector((state) => state.favority.favorities);
  const [isInFavorit, setIsInFavorit] = useState<boolean>(false);

  useEffect(() => {
    const newVal = favorit.some((ele: { id: number }) => ele.id === id);
    setIsInFavorit(newVal);
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
            await dispatch(getAllFavo(""));
            setLoadingFavo(false);
          }}
        />
      ) : (
        <CiHeart
          className="text-xl cursor-pointer"
          onClick={async () => {
              setLoadingFavo(true);
              await dispatch(actGetFavority(id));
              setLoadingFavo(false);
           
          }}
        />
      )}
    </div>
  );
};

export default AddToFavorit;
