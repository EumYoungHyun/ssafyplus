import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

//추가
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(styles);

async function LogOut() {
  await sessionStorage.clear();
  window.location.reload();
}
export default function Header(props) {
  const classes = useStyles();

  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { color, routes } = props;

  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  var links = (
    <div>
      {routes.map((prop, key) => {
        var activePro = " ";
        if (
          (prop.layout === "/plus" &&
            prop.path !== "/postList" && prop.path !== "/postdetail" && prop.path !== "/postcreate" &&
            !prop.path.startsWith("/portfolio/") &&
            !prop.path.startsWith("/breakingerror_detail/")) ||
          (prop.path === "/signIn" &&
            sessionStorage.getItem("user_email") === null)
        ) {
          return (
            <Button
              color={window.innerWidth > 959 ? "transparent" : "white"}
              simple={!(window.innerWidth > 959)}
              font-color={color}
              aria-label="ssafyPlus"
              className={classes.buttonLink}
            >
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                key={key}
              >
                <div>
                  <prop.icon className={classNames(classes.itemIcon)} />
                  <ListItemText
                    primary={prop.name}
                    className={classNames(classes.itemText)}
                    disableTypography={true}
                  />
                </div>
              </NavLink>
            </Button>
          );
        }
      })}
      {sessionStorage.getItem("user_email") !== null && (
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          simple={!(window.innerWidth > 959)}
          font-color={color}
          aria-label="ssafyPlus"
          className={classes.buttonLink}
          onClick={LogOut}
        >
          <div>
            <ExitToAppIcon className={classNames(classes.itemIcon)} />

            <ListItemText
              className={classNames(classes.itemText)}
              disableTypography={true}
            >
              로그 아웃
            </ListItemText>
          </div>
        </Button>
      )}
    </div>
  );

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {links}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
