import { Alert, IconButton } from "@mui/material";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { api } from "../../template/layout";

const MyAlert = () => {
  const context = useContext(api);

  if (!context?.alert.isOpen) return null;

  return (
    <div className="fixed z-[100] top-0 w-full flex justify-center p-3">
      <Alert
        severity={context.alert.func as "error" | "info" | "success" | "warning"}
        sx={{ fontWeight: "bold", fontSize: "18px", width: "100%" }}
        action={
          <IconButton
            onClick={() =>
              context.setAlert((prev) => ({ ...prev, isOpen: false }))
            }
            size="small"
          >
            <MdClose />
          </IconButton>
        }
      >
        {context.alert.textAlert}
      </Alert>
    </div>
  );
};

export default MyAlert;
