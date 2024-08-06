import { LocationService } from "../location/location.service";
import type { Session } from "./session.model";

const SessionService = {
    async setLocation(sessionRef: Session, locationAcronym: string) {
        if(!locationAcronym) {
            return null;
        }

        const maybeLocation = await LocationService.findFromAcronym(locationAcronym);
        if(!maybeLocation) {
            return null;
        }

        const location = maybeLocation;
        sessionRef.location = location;

        return location;
    }
};

export { SessionService }