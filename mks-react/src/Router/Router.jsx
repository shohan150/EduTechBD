import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Root/>}>
                        <Route path='/' element={<Home/>} />
                        <Route path='/contact' element={<Contact/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;