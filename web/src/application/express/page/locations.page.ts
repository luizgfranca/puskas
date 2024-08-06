import type { Router } from "express";
import { LocationService } from "../../../module/location/location.service";
import { printSession } from "../controller/dto/session.dto";


export function LocationsPage(router: Router) {
    router.get('/location-selector', async (req, res) => {
        printSession(req.session)
        const locations = await LocationService.all();
        res.render('location-selector', { locations })
    })
}