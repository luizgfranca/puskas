import type { Location } from "./location.model";
import { LocationRepository } from "./location.repository";

const LocationService = {
    async all() {
        return await LocationRepository.find();
    },
    async create(location: Location) {
        return await LocationRepository.save(location);
    },
    async findFromAcronym(acronym: string) {
        const res =  await LocationRepository.findOneBy({ acronym })
        return res;
    }
};

export { LocationService }