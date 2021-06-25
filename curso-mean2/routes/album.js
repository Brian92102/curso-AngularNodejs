'use strict'

var express= require('express');
var UserController = require('../controllers/album');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/album'});

//api.get('/album', AlbumController.getAlbum);
//api.get('/albums/:artist?', AlbumController.getAlbums);
//api.post('/album', AlbumControler,saveAlbum);
//api.put('/album/:id', AlbumController.updateAlbum);
//api.delete('/album/:id',AlbumController.deleteAlbum);

module.esport = api;