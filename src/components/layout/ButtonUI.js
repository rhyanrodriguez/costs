import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "./ButtonUI.module.css";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className={styles.buttonUi} variant="contained">
        Baixar
      </Button>
    </Stack>
  );
}
