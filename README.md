# Image-upload-using-cloudinary

## Introduction
   Image upload using nodejs with TypeScript. we are using cloudinary library for upload image.

   Cloudinary's Node.js SDK provides simple, yet comprehensive image and video upload, transformation, optimization, and delivery capabilities that you can implement using code that integrates seamlessly with your existing Node.js application.

   You can find code inside src folder.

## Cloudinary installation and setup

Cloudinary's Node.js integration library is available as an open-source. To install the Cloudinary NPM, run:

npm install cloudinary

Include Cloudinary's Node.js classes in your code:
Nodejs

var cloudinary = require('cloudinary');

Important
The Node.js SDK upload and admin method syntax examples shown throughout this documentation use the v2 signature. To avoid confusion, all code examples are shown in the format cloudinary.v2....

In your own code, it is recommended to include v2 of the Node.js classes as follows:
Nodejs

var cloudinary = require('cloudinary').v2;

Alternatively, from within a module, you can use an ES6 import statement:
Nodejs

import { v2 as cloudinary } from 'cloudinary'

Following either of these, your upload and Admin API calls should omit the .v2 shown in the code examples of this guide.
For example, a simple image upload:
Nodejs

cloudinary.uploader
.upload("my_image.jpg")
.then(result=>console.log(result));

## Configuration

To use the Cloudinary Node.js library, you have to configure at least your cloud_name. Your api_key and api_secret are also needed for secure API calls to Cloudinary (e.g., image and video uploads). You can find your product environment configuration credentials in the Dashboard page of the Cloudinary Console.

In addition to the required configuration parameters, you can define a number of optional configuration parameters if relevant.

Setting the configuration parameters can be done globally, using either an environment variable or the config method, or programmatically in each call to a Cloudinary method. Parameters set in a call to a Cloudinary method override globally set parameters.


You can configure the required cloud_name, api_key, and api_secret by defining the CLOUDINARY_URL environment variable. The CLOUDINARY_URL value is available in the Dashboard page of the Cloudinary Console. When using Cloudinary through a PaaS add-on (e.g., Heroku or AppFog), this environment variable is automatically defined in your deployment environment. 

For example:
CLOUDINARY_URL=cloudinary://my_key:my_secret@my_cloud_name

Set additional parameters, for example upload_prefix and cname, to the environment variable:

CLOUDINARY_URL=cloudinary://my_key:my_secret@my_cloud_name?cname=mydomain.com&upload_prefix=myprefix.com

## Setting configuration parameters globally

Here's an example of setting configuration parameters globally in your Node application:
Nodejs

cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1',
  secure: true
});

## Transformations

Transformation code and the image it delivers:

In Node.js

cloudinary.image("front_face.png", {secure: true, transformation: [
  {width: 150, height: 150, gravity: "face", crop: "thumb"},
  {radius: 20},
  {effect: "sepia"},
  {overlay: "cloudinary_icon_blue", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
  {angle: 10}
  ]})

sample transformation

This relatively simple code performs all of the following on the original front_face.jpg image before delivering it:

  1. Crop to a 150x150 thumbnail using face-detection gravity to automatically determine the location for the crop
  2. Round the corners with a 20 pixel radius
  3. Apply a sepia effect
  4. Overlay the Cloudinary logo on the southeast corner of the image (with a slight offset). The logo is scaled down to a 50 pixel width, with increased brightness and partial transparency (opacity = 60%)
  5. Rotate the resulting image (including the overlay) by 10 degrees
  6. Convert and deliver the image in PNG format (the originally uploaded image was a JPG)

And here's the URL that would be included in the image tag that's automatically generated from the above code:

URL- https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/e_sepia/l_cloudinary_icon_blue,g_south_east,x_5,y_5,w_50,o_60,e_brightness:200/a_10/front.png

## Setup Steps:
### Required details for setup this project
   1. Add your mongodb database string in env file.
   2. Add your jwt token in env file.
   3. Add your cloud name in env file.
   4. Add your cloud api key in env file.
   5. Add your cloud api secret in env file.
   
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`