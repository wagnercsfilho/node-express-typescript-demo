"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongosse = require("mongoose");
const NewsSchema = new mongosse.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean }
});
exports.default = NewsSchema;
