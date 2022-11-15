import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
  },
  root: {
    '& .MuiTextField-root': {
      margin: 1,
    },
  },
  avatar: {
    margin: 1,
    backgroundColor: "secondary",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    margin: (3, 0, 2, 2),
  },
  
}));
