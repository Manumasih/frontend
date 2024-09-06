import {all} from"redux-saga/effects"
import maincategorySagas from "./MaincategorySagas"
import subcategorySagas from "./SubcategorySagas "
import brandSagas from "./BrandSagas "
import productSagas from "./ProductSagas "
import testimonialSagas from "./TestimonialSagas "
import cartSaga from "./CartSagas "
import wishlistSaga from "./WishlistSagas"
import checkoutSaga from "./CheckoutSagas"
import newsletterSaga from "./NewsletterSagas"
import contactUsSaga from "./ContactUsSagas"
export default function* rootsagas(){
    yield all([
        maincategorySagas(),
        subcategorySagas(),
        brandSagas(),
        productSagas(),
        testimonialSagas(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        newsletterSaga(),
        contactUsSaga()
    ]
    )
}