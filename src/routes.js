import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/profile";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { component: NotFound },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
