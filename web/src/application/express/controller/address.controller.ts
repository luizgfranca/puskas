import { Router } from "express";
import { CreateAddressDtoUtils, type CreateAddressDto } from "./dto/address.dto";
import { Address } from "../../../module/address/address.model";
import { AddressService } from "../../../module/address/address.service";

const AddressController = (router: Router) => {
    router.get('/address', async (req, res) => {
        const result = await AddressService.all();
        res.json(result);
    })
    router.post('/address', async (req, res) => {
        const payload = req.body as CreateAddressDto;
        if(!CreateAddressDtoUtils.isValid(payload)) {
            res.status(400);
            return res.end();
        }

        const address = CreateAddressDtoUtils.toAddress(payload);
        const created =  await AddressService.create(address);

        res.json(created);
    })
}

export { AddressController }