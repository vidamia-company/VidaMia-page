import { Home, Profile, SignIn, SignUp, About } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/about-us",
    element: <About />,
  },
/*   {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  }, */
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
