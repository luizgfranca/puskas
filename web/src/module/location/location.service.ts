import type { Location } from "./location.model";
import { LocationRepository } from "./location.repository";

const LocationService = {
    async all() {
        return await LocationRepository.find();
    },
    async create(location: Location) {
        return await LocationRepository.save(location);
    }
};

export { LocationService }