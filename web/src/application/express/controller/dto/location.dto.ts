import { Location } from "../../../../module/location/location.model";

type CreateLocationDto = {
    name?: string;
}

function toLocation(dto: CreateLocationDto): Location {
    return new Location(dto.name);
}

export {
    type CreateLocationDto,
    toLocation
}