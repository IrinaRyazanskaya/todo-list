import TextField from '@material-ui/core/TextField';

const InputItem = () => (
    <TextField
        id="outlined-full-width"
        label="Добавить задание"
        fullWidth
        variant="outlined"
        size="small"
    />
);

export { InputItem };