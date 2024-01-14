import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import { GiCheckMark } from "react-icons/gi";
import { MainSnackBarProps } from "@/app/lib/assets/types/types";
import { CiWarning } from "react-icons/ci";

export default function MainSnackBar({
  open,
  setOpen,
  status,
  message,
}: MainSnackBarProps) {
  return (
    <Snackbar
      variant="outlined"
      color={status == "success" ? "success" : "danger"}
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      startDecorator={status === "success" ? <GiCheckMark /> : <CiWarning />}
      endDecorator={
        <Button
          onClick={() => setOpen(false)}
          size="sm"
          variant="solid"
          color={status === "success" ? "success" : "danger"}
        >
          Close
        </Button>
      }
    >
      {message}
    </Snackbar>
  );
}
