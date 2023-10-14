import dynamic from "next/dynamic";

import { HeroSection } from "./HeroSection";
import CustomerReviews from "./CustomerReviews";
import Subscribe from "./Subscribe";
import Services from "./Services";
const PopularProducts = dynamic(() => import('../sections/PopularProducts'))
const SuperQualityProducts = dynamic(() => import('../sections/SuperQualityProducts'))
const SpecialOffer = dynamic(() => import('../sections/SpecialOffer'))

export {
    HeroSection,
    PopularProducts,
    CustomerReviews,
    Subscribe,
    SpecialOffer,
    Services,
    SuperQualityProducts
}