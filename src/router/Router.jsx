import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Top /> },
      // { path:'/users',element: <Users /> },
    ],
  },
  {
    path: '/users',
    element: <HeaderOnly />,
    children: [
      { index: true, element: <Users /> },
    ],
  },
]);
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route exact paht='/' element={<Top />} />
  //       <Route exact paht='/users' element={<Users />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
// }