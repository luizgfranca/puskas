import type { Router } from "express";
import ejs from 'ejs';

export function IndexController(router: Router) {
    router.route('/')
        .get((req, res) => {
            res.render('index')
        })
}