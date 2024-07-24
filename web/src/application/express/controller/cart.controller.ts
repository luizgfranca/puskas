import { json, type Router } from "express";
import type {
  CreateCartItemRequestDto,
  CreateCartRequestDto,
} from "./dto/cart.dto";
import { LocationService } from "../../../module/location/location.service";
import { CartFactory } from "../../../module/cart/cart.factory";
import { CartService } from "../../../module/cart/cart.service";
import { ProductService } from "../../../module/product/product.service";

export function CartController(router: Router) {
  router
    .get("/cart", async (req, res) => {
      const carts = await CartService.all();
      res.json(carts);
    })
    .get("/cart/:id", async (req, res) => {
      const id = Number(req.params.id);

      if (!id || !Number(id)) {
        return res.status(400);
      }

      const cart = await CartService.get(id);
      res.json(cart);
    })
    .post("/cart", async (req, res) => {
      const input = req.body as CreateCartRequestDto;
      if (!input.locationAcronym) {
        return res.status(400);
      }

      const location = await LocationService.findFromAcronym(
        input.locationAcronym,
      );
      if (!location) {
        return res.status(400);
      }

      const created = await CartService.createCart(location);

      res.status(201);
      res.json(created);
    })
    .post("/cart/item", async (req, res) => {
      const { cartId, price, productId } = req.body as CreateCartItemRequestDto;

      if (!cartId || !price || !productId) {
        return res.status(400).end();
      }

      const cartPromise = CartService.get(cartId);
      const productPromise = ProductService.get(productId);

      const cart = await cartPromise;
      const product = await productPromise;

      if (!cart || !product) {
        return res.status(400).end();
      }

      const newCartComposition = await CartService.addItemToCart(
        cart,
        product,
        price,
      );
      if (!newCartComposition) {
        return res.status(500).end();
      }

      res.status(201);
      res.json(newCartComposition);
    });
}
