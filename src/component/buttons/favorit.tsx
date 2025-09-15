import { useState, useEffect } from "react";
import Loader from "../feedback/loading";
import { FaHeart } from "react-icons/fa";
import actDeleteFavority from "../../store/favority/act/actdeletefavority";
import { CiHeart } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../store/categories/hooks";
import getAllFavo from "../../store/favority/act/actgetallfavo";
import actPostFavority from "../../store/favority/act/actPostfavority";

type AddToFavoritProps = {
  _id:string,
  title:string,
  img:string
};

const AddToFavorit: React.FC<AddToFavoritProps> = ({ _id,title,img}) => {
  const dispatch = useAppDispatch();
  const [loadingFavo, setLoadingFavo] = useState(false);

  const favorit = useAppSelector((state) => state.favority.favorities);
  const [isInFavorit, setIsInFavorit] = useState<boolean>(false);

  useEffect(() => {
    const newVal = favorit.some((ele) => ele.owner == _id);
    setIsInFavorit(newVal);
  }, [favorit, _id]);

  return (
    <div>
      {loadingFavo ? (
        <Loader />
      ) : isInFavorit ? (
        <FaHeart
          className="text-red-500 cursor-pointer text-sm"
          onClick={async () => {
            setLoadingFavo(true);
            await dispatch(actDeleteFavority(_id));
            await dispatch(getAllFavo());
            setLoadingFavo(false);
          }}
        />
      ) : (
        <CiHeart
          className="text-xl cursor-pointer"
          onClick={async () => {
              setLoadingFavo(true);
              await dispatch(actPostFavority({title:title,img:img,owner:_id}));
                          await dispatch(getAllFavo());
              setLoadingFavo(false);
           
          }}
        />
      )}
    </div>
  );
};

export default AddToFavorit;
