import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Users } from './components/user/Users';
import { Signup } from './components/user/Signup';
import { Signin } from './components/auth/Signin';
import { Profile } from './components/user/Profile';
import { EditProfile } from './components/user/EditProfile';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { Product } from './pages/product/Product';
import { Cart } from './pages/cart/Cart';
import { EditProduct } from './pages/product/EditProduct';


export const MainRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
                // element={!user ? <SignInSide /> : <Home user={user} />}
                exact
            />
            {/* <Route
                path="/users"
                element={<Users />}
                // element={!user ? <SignInSide /> : <Home user={user} />}
                
            /> */}
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user/edit/:userId/*" element={<PrivateRoute component={EditProfile} />} />
            <Route path="/user/:userId" element={<Profile />} />

        <Route path="/cart" component={<Cart/>}/>
        <Route path="/product/:productId" component={<Product/>}/>
        {/* <Route path="/shops/all" component={Shops}/> */}
        {/* <Route path="/shops/:shopId" component={Shop}/> */}

        {/* <Route path="/order/:orderId" component={Order}/> */}
        {/* <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/> */}

        {/* <PrivateRoute path="/seller/shops" component={MyShops}/> */}
        {/* <PrivateRoute path="/seller/shop/new" component={NewShop}/> */}
        {/* <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/> */}
        {/* <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/> */}
        {/* <PrivateRoute path="/seller/:shopId/:productId/edit" component={<EditProduct/>}/> */}

        {/* <Route path="/seller/stripe/connect" component={StripeConnect}/> */}
        {/* <PrivateRoute path="/myauctions" component={MyAuctions}/> */}
        {/* <PrivateRoute path="/auction/new" component={NewAuction}/> */}
        {/* <PrivateRoute path="/auction/edit/:auctionId" component={EditAuction}/> */}
        {/* <Route path="/auction/:auctionId" component={Auction}/> */}
        {/* <Route path="/auctions/all" component={OpenAuctions}/> */}

            {/* no route */}
            <Route
                path="*"
                element={
                    <main
                        style={{
                            padding: "1rem",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <h1>There's nothing here!</h1>
                        <Link to={"/"}>
                            <button
                                style={{
                                    textDecoration: "none",
                                    border: "none",
                                    width: 120,
                                    borderRadius: 5,
                                    padding: "20px",
                                    backgroundColor: "black",
                                    color: "white",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                }}
                            >
                                Go Back Home
                            </button>
                        </Link>
                    </main>
                }
            />
        </Routes>
    )
}
