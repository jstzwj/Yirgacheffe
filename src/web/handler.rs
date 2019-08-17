// use std::collections::HashMap;
// use rocket_contrib::templates::Template;
// use rocket::http::Method;
use rocket::response::NamedFile;

#[get("/")]
pub fn index() -> std::io::Result<NamedFile> {
    NamedFile::open("yirgacheffe/dist/index.html")
}

#[get("/<file..>")]
pub fn files(file: std::path::PathBuf) -> Option<NamedFile> {
    NamedFile::open(std::path::Path::new("yirgacheffe/dist/").join(file)).ok()
}