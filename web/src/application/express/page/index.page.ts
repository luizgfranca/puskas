import type { Router } from "express";
import { ProductService } from "../../../module/product/product.service";
import { LocationService } from "../../../module/location/location.service";
import { printSession } from "../controller/dto/session.dto";

export function IndexPage(router: Router) {
    router.route('/offers/:locationAcronym')
        .get(async (req, res) => {
            printSession(req.session)
            const { locationAcronym } = req.params;
            if(!locationAcronym) {
                res.redirect('/location-selector');
                return res.end();
            }

            const location = await LocationService.findFromAcronym(locationAcronym);
            if(!location) {
                res.redirect('/location-selector');
                return res.end();
            }

            const products = await ProductService.getProductsAvailableOnLocation(location.id);
            res.render('index', { products, location })
        })
}