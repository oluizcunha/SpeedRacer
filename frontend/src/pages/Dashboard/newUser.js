import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  card: {
    minWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (    
    <Card id="listagemUser" className={classes.card}>
      <CardContent>
        <Typography>Usuário</Typography>
        <TextField
          id="standard-name"
          label="Nome"
          margin="normal"
          fullWidth
          autoComplete="name"
        />
        <br />

        <TextField
          id="standard-name"
          label="CPF"
          margin="normal"
          fullWidth
          autoComplete="CPF"
        />
        <br />

        <TextField
          id="standard-name"
          label="E-mail"
          margin="normal"
          fullWidth
          autoComplete="email"
        />
        <br />
        <TextField id="standard-name" label="Cargo" margin="normal" fullWidth />
      </CardContent>
      <CardActions>
        <Button color="accent" raised>
          Fechar
        </Button>

        <Button
          color="primary"
          raised
          onClick={e => window.alert("Alterações aplicadas com sucesso!")}
        >
          Salvar
        </Button>
      </CardActions>
    </Card>    
  );
}
