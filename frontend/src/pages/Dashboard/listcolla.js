import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { Link } from "react-router-dom"
import novoUsuario from './newUser';



const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  // Abrindo a tela com menu colapsado
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    // setOpen(!open);
    document.getElementsByClassName('listagem').style.display="block";
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          teste
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Usuário" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/newuser" className={classes.nested}>
            <ListItemIcon>
              <PersonAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Novo usuário" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Listar usuário" />
          </ListItem>
        </List>
      </Collapse>




      {/* novo item */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Perito" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PersonAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Novo perito" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ListOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Listar perito" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}