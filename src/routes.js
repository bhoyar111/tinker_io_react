import { lazy } from "react";

const User  = lazy(() => import('./view/Components/User'));
const AddForm   = lazy(() => import('./view/Components/Add'));
const EditForm  = lazy(() => import('./view/Components/List'));

const routes = [
    { path: '', exact: true, name: "User", component: User },
    { path: 'add-form', exact: true, name: "AddForm", component: AddForm },
    { path: 'edit-form', exact: true, name: "EditForm", component: EditForm }
];

export default routes;