import type { Router } from "express";
import { toLocation, type CreateLocationDto } from "./dto/location.dto";
import { LocationService } from "../../../module/location/location.service";

export function LocationController(router: Router) {
    router
        .route('/location')
        .get(async (req, res) => {
            const response = await LocationService.all();
            res.json( response )
        })
        .post(async (req, res) => {
            const input = req.body as CreateLocationDto;
            if(!input.name) {
                return res.status(400);
            }

            const created = await LocationService.create( toLocation(input) )

            res.status(201);
            res.json(created)
        })
}