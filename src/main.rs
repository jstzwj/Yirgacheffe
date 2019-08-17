#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
extern crate rocket_contrib;
extern crate std;

mod web;

use rocket_contrib::templates::Template;


fn main() {
    rocket::ignite()
        .attach(Template::fairing())
        .mount("/", routes![web::handler::index, web::handler::files]).launch();
}