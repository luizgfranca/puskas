import type { Router } from "express";
import { CreateCustomerDtoUtils, type CreateCustomerDto } from "./dto/customer.dto";
import { CustomerService } from "../../../module/customer/customer.service";


function CustomerController(router: Router) {
  router.get('/customer', async (req, res) => {
    const list = await CustomerService.all();
    res.json(list);
  })
  router.post('/customer', async (req, res) => {
    const payload = req.body as CreateCustomerDto;

    if (!payload.name || !payload.email || !payload.phone || !payload.document) {
      res.status(400);
      return res.end();
    }

    const customer = CreateCustomerDtoUtils.toCustomer(payload);
    const created = CustomerService.create(customer);
    return res.json(created);
  });
}

export { CustomerController }
