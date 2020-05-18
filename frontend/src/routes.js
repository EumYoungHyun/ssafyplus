// 가져올 아이콘 모양들
import Home from "@material-ui/icons/Home";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";
import PermIdentity from "@material-ui/icons/PermIdentity";

// 레이아웃에 입힐 뷰들
import Main from "views/Main/Main.js";
import Portfolio from "views/Portfolio/Portfolio.js";
import Board from "views/Board/Board.js";
import SignIn from "views/Auth/SignIn";

const dashboardRoutes = [
  {
    id: 1,
    path: "/main",
    name: "Main",
    icon: Home,
    component: Main,
    layout: "/plus",
  },
  {
    id: 2,
    path: "/portfolio",
    name: "Portfolio",
    icon: Assignment,
    component: Portfolio,
    layout: "/plus",
  },
  {
    id: 3,
    path: "/board",
    name: "게시판",
    icon: Description,
    component: Board,
    layout: "/plus",
  },
  {
    path: "/signIn",
    name: "로그인",
    icon: PermIdentity,
    component: SignIn,
    layout: "/plus",
  },
];

export default dashboardRoutes;
