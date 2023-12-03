import { Home, Services, SignIn, SignUp, About } from "@/pages";

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
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
/*   {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  }, */
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
];

export default routes;
