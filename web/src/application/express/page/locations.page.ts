import type { Router } from "express";
import { LocationService } from "../../../module/location/location.service";


export function LocationsPage(router: Router) {
    router.get('/location-selector', async (req, res) => {
        const locations = await LocationService.all();
        res.render('location-selector', { locations })
    })
}