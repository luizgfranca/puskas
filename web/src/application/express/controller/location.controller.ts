import type { Router } from "express";
import { toLocation, type CreateLocationDto, type GetLocationQueryParamsDto } from "./dto/location.dto";
import { LocationService } from "../../../module/location/location.service";
import { SessionService } from "../../../module/session/session.service";

export function LocationController(router: Router) {
    router
        .route('/location')
        .get(async (req, res) => {
            const { acronym } = req.query as GetLocationQueryParamsDto;
            
            if(acronym) {
                const response = await LocationService.findFromAcronym(acronym);
                res.json([response]);
            }

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

    router.get('/location/:acronym', async (req, res) => {
        const { acronym } = req.params;
            
        if(acronym) {
            const response = await LocationService.findFromAcronym(acronym);
            res.json(response);
        }

        res.status(204)
        return res.end()
    })

    router.get('/location/:acronym/selection', async (req, res) => {
        const { acronym } = req.params;
        
        const maybeLocationSet = await SessionService.setLocation(req.session, acronym);
        if(!maybeLocationSet) {
            return res.redirect('/location-selector?error=true');
        }

        return res.redirect(`/offers/${acronym}`);
    })
}