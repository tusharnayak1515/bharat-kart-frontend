import axios from "axios"

// *************USER SECTION **************\\

export const fetchAllProducts = () => async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    try {
        const res = await axios.get("http://localhost:5000/api/products/products");

        if (res.data.success) {
            localStorage.setItem("products", JSON.stringify(res.data.products));
            localStorage.removeItem("myerror");
            dispatch({
                type: 'fetchallproducts',
                payload: {
                    products: res.data.products,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            dispatch({
                type: 'fetchallproducts',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        dispatch({
            type: 'fetchallproducts',
            payload: {
                error: error.message
            }
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    // console.log("action1",new Date().getSeconds());
    dispatch({
        type: "setloading"
    });

    try {
        const res = await axios.get(`http://localhost:5000/api/products/product/${id}`);

        if (res.data.success) {
            // console.log("action2",new Date().getSeconds());
            localStorage.setItem("myproduct", JSON.stringify(res.data.product));
            localStorage.setItem("mymerchant", res.data.merchantName);
            dispatch({
                type: "get-product",
                payload: {
                    myproduct: res.data.product,
                    mymerchant: res.data.merchantName,
                    quantity: res.data.productQuantity,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            dispatch({
                type: "get-product",
                payload: {
                    error: res.data.error
                }
            })
        }
    }

    catch (error) {
        dispatch({
            type: "get-product",
            payload: {
                error: error.message
            }
        })
    }
}

export const resetProduct = () => async (dispatch) => {
    localStorage.removeItem("myproduct");
    localStorage.removeItem("mymerchant");
    return dispatch({
        type: "reset-product",
        payload: {
            error: null
        }
    });
}

export const userRegister = ({ name, email, phone, password, pincode, address }) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user-auth/register", {
            name: name,
            email: email,
            phone: phone,
            password: password,
            pincode: pincode,
            address: address
        });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user", res.data.userToken);
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'user-register',
                payload: {
                    user: res.data.userToken,
                    profile: res.data.myprofile,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'user-register',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'user-register',
            payload: {
                error: error.message
            }
        })
    }
}

export const userLogin = ({ email, password }) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user-auth/login", {
            email: email,
            password: password
        });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user", res.data.userToken);
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.setItem("bharatkart-user-cart", JSON.stringify(res.data.cart));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'user-login',
                payload: {
                    user: res.data.userToken,
                    profile: res.data.myprofile,
                    cart: res.data.cart,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'user-login',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'user-login',
            payload: {
                error: error.message
            }
        })
    }
}

export const userProfile = () => async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    const userToken = localStorage.getItem("bharatkart-user");
    try {
        const res = await axios.get("http://localhost:5000/api/user-auth/profile", { headers: { "user-token": userToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.setItem("bharatkart-user-profile-cart", JSON.stringify(res.data.cart));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'user-profile',
                payload: {
                    profile: res.data.myprofile,
                    cart: res.data.cart,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'user-profile',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'user-profile',
            payload: {
                error: error.message
            }
        })
    }
}

export const editUser = ({ name, email, phone, pincode, address }) => async (dispatch) => {
    const userToken = localStorage.getItem("bharatkart-user");
    try {
        const res = await axios.put("http://localhost:5000/api/user-auth/editProfile", {
            name: name,
            email: email,
            phone: phone,
            pincode: pincode,
            address: address
        }, { headers: { "user-token": userToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'edit-user',
                payload: {
                    profile: res.data.myprofile,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'edit-user',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'edit-user',
            payload: {
                error: error.message
            }
        })
    }
}

export const addToCart = (qty, id) => async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    const userToken = localStorage.getItem("bharatkart-user");
    try {
        const res = await axios.put(`http://localhost:5000/api/products/addtocart/${id}`, { qty: qty },
            { headers: { "user-token": userToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.setItem("bharatkart-user-cart", JSON.stringify(res.data.cart));
            localStorage.removeItem("myerror");
            dispatch({
                type: 'add-to-cart',
                payload: {
                    profile: res.data.myprofile,
                    cart: res.data.cart,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            dispatch({
                type: 'add-to-cart',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        dispatch({
            type: 'add-to-cart',
            payload: {
                error: error.message
            }
        })
    }
}

export const removeFromCart = (qty, id) => async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    const userToken = localStorage.getItem("bharatkart-user");
    try {
        const res = await axios.put(`http://localhost:5000/api/products/removefromcart/${id}`, { qty: qty },
            { headers: { "user-token": userToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.setItem("bharatkart-user-cart", JSON.stringify(res.data.cart));
            localStorage.removeItem("myerror");
            dispatch({
                type: 'remove-from-cart',
                payload: {
                    profile: res.data.myprofile,
                    cart: res.data.cart,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            dispatch({
                type: 'remove-from-cart',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        dispatch({
            type: 'remove-from-cart',
            payload: {
                error: error.message
            }
        })
    }
}

export const buyProduct = (cart) => async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    const userToken = localStorage.getItem("bharatkart-user");
    try {
        const res = await axios.put(`http://localhost:5000/api/products/buyproduct`, { cart: cart },
            { headers: { "user-token": userToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-user-profile", JSON.stringify(res.data.myprofile));
            localStorage.setItem("bharatkart-user-cart", JSON.stringify(res.data.mycart));
            localStorage.removeItem("myerror");
            dispatch({
                type: 'buyproduct',
                payload: {
                    profile: res.data.myprofile,
                    cart: res.data.mycart,
                    merchant: res.data.merchant,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            dispatch({
                type: 'buyproduct',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        dispatch({
            type: 'buyproduct',
            payload: {
                error: error.message
            }
        })
    }
}

export const addReview = (id,rating,review)=> async (dispatch) => {
    dispatch({
        type: "setloading"
    });
    try {
        const userToken = localStorage.getItem("bharatkart-user");
        const res = await axios.put(`http://localhost:5000/api/products/addreview/${id}`,{
            rating: rating,
            review: review
        }, { headers: { "user-token": userToken } })

        if(res.data.success) {
            localStorage.setItem("bharatkart-user-profile",JSON.stringify(res.data.myprofile));
            localStorage.setItem("myproduct",JSON.stringify(res.data.product));
            dispatch({
                type: "add-review",
                payload: {
                    profile: res.data.myprofile,
                    myproduct: res.data.product,
                    error: null
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("myerror",res.data.error);
            dispatch({
                type: "add-review",
                payload: {
                    error: res.data.error
                }
            });
        }
    }
    catch(error) {
        dispatch({
            type: "add-review",
            payload: {
                error: error.message
            }
        });
    }
}

export const userLogout = () => async (dispatch) => {
    return dispatch({
        type: "user-logout"
    })
}


// ************MERCHANT SECTION *****************\\

export const merchantRegister = ({ name, email, phone, password, aadhaar, pincode, address }) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/merchant-auth/register", {
            name: name,
            email: email,
            phone: phone,
            password: password,
            aadhaar: aadhaar,
            pincode: pincode,
            address: address
        });

        if (res.data.success) {
            localStorage.setItem("bharatkart-merchant", res.data.merchantToken);
            localStorage.setItem("bharatkart-merchant-profile", JSON.stringify(res.data.merchant));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'merchant-register',
                payload: {
                    merchant: res.data.merchantToken,
                    profile: res.data.merchant,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'merchant-register',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'merchant-register',
            payload: {
                error: error.message
            }
        })
    }
}

export const merchantLogin = ({ email, password }) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/merchant-auth/login", {
            email: email,
            password: password
        });

        if (res.data.success) {
            localStorage.setItem("bharatkart-merchant", res.data.merchantToken);
            localStorage.setItem("bharatkart-merchant-profile", JSON.stringify(res.data.merchant));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'merchant-login',
                payload: {
                    merchant: res.data.merchantToken,
                    profile: res.data.merchant,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'merchant-login',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'merchant-login',
            payload: {
                error: error.message
            }
        })
    }
}

export const merchantProfile = () => async (dispatch) => {
    const merchantToken = localStorage.getItem("bharatkart-merchant");
    try {
        const res = await axios.post("http://localhost:5000/api/merchant-auth/profile", {}, { headers: { "merchant-token": merchantToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-merchant-profile", JSON.stringify(res.data.merchant));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'merchant-profile',
                payload: {
                    profile: res.data.merchant,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'merchant-profile',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'merchant-profile',
            payload: {
                error: error.message
            }
        })
    }
}

export const addProducts = ({ name, description, image, price }) => async (dispatch) => {
    const merchantToken = localStorage.getItem("bharatkart-merchant");
    try {
        const res = await axios.post("http://localhost:5000/api/products/addproduct", {
            name: name,
            description: description,
            image: image,
            price: price
        }, { headers: { "merchant-token": merchantToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-merchant-profile", JSON.stringify(res.data.merchant));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'addproduct',
                payload: {
                    products: res.data.products,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'addproduct',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'addproduct',
            payload: {
                error: error.message
            }
        })
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    const merchantToken = localStorage.getItem("bharatkart-merchant");
    try {
        const res = await axios.delete(`http://localhost:5000/api/products/deleteproduct/${id}`, { headers: { "merchant-token": merchantToken } });

        if (res.data.success) {
            localStorage.setItem("bharatkart-merchant-profile", JSON.stringify(res.data.myMerchant));
            localStorage.setItem("products", JSON.stringify(res.data.filteredProducts));
            localStorage.removeItem("myerror");
            return dispatch({
                type: 'deleteproduct',
                payload: {
                    products: res.data.filteredProducts,
                    error: null
                }
            });
        }

        if (res.data.error) {
            localStorage.setItem("myerror", res.data.error);
            return dispatch({
                type: 'deleteproduct',
                payload: {
                    error: res.data.error
                }
            })
        }
    }
    catch (error) {
        return dispatch({
            type: 'deleteproduct',
            payload: {
                error: error.message
            }
        })
    }
}

export const merchantLogout = () => async (dispatch) => {
    localStorage.removeItem("bharatkart-merchant");
    localStorage.removeItem("bharatkart-merchant-profile");
    return dispatch({
        type: "merchant-logout"
    })
}