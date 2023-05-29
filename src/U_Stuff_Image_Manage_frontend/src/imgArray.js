const imgArray = [
  {
    name: "El taller",
    description: "Imaginando cosas útiles!",
    imgClass: "carousel-item active",
    source:
      "https://i.pinimg.com/originals/6c/36/75/6c3675869ef4cdb9ef91d3ab544ad5b7.png",
    altText: "WorkShop",
    buttonClass: "active",
    buttonAriaCurrent: 'aria-current="true"',
  },

  {
    name: "Maceteros",
    description: "Impregnados con aceite mineral",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/fb/a3/ac/fba3ace1bc43d7879423cefa43c116a2.png",
    altText: "Macetero",
    buttonClass: "",
    buttonAriaCurrent: "",
  },

  {
    name: "Porta vaso con Código QR",
    description: "Grabado y corte laser",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/6d/3f/3d/6d3f3d373c61a5d88992f53762afddfc.png",
    altText: "Porta vasos",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Porta vaso Logotipo",
    description: "Grabado y corte laser",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/c9/b6/07/c9b60746a5d64089b8d2489bc945f81f.png",
    altText: "Porta vaso",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Porta cepillos",
    description: "Impregnado de aceite mineral",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/4e/f9/8c/4ef98c242e6a445770e9786a810e7e17.png",
    altText: "Porta cepillos",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Porta cepillos",
    description: "Impregnado de aceite mineral",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/71/21/70/712170c703e4f2cefca00c5311d70fe0.png",
    altText: "Porta cepillos",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Desayunador",
    description: "Superficie de porcelanato, canteado de bambú",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/f5/be/2a/f5be2a20a1b6bc8f564a1f26c54d7dac.png",
    altText: "Desayunador",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Lapicero",
    description: "Con huella de perrito",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/50/aa/c2/50aac2ea0dc3dccb643716dc25325f3a.png",
    altText: "Lapicero",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Guacal",
    description: "Almacenamiento diverso con agarraderas de cuero",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/7a/d6/3f/7ad63fcadf9751c59984e8bdff2d20b8.png",
    altText: "Guacal",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Guacal",
    description: "Almacenamiento diverso con agarraderas de cuero",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/61/5a/4c/615a4c439674ff14496d9db362f79a1f.png",
    altText: "Guacal",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Grabado en plástico",
    description: "Grabado laser",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/f6/c6/e3/f6c6e3306e9755e051b22a44a599d4ad.png",
    altText: "Grabado en plastico",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Grabado en acero",
    description: "Grabado laser",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/2b/25/5d/2b255d4acf2b3ef40963ead8359826c4.png",
    altText: "Grabado en acero",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Casa de pájaro",
    description: "Quemada e impregnada con protección para intemperie",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/28/4c/18/284c1890855c9c8886425b3b153b9fc5.png",
    altText: "Casa de pájaro",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Reloj",
    description: "Grabado y corte laser",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/da/58/28/da58283a315d29121f58112efb58680c.png",
    altText: "Reloj",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Servilletero",
    description: "Impregnado con aceite mineral",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/d8/9b/c1/d89bc1a06bf89b6114e1e6aa669a0eb5.png",
    altText: "Servilletero",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Porta botella para muro",
    description: "Base de bambú",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/54/53/93/545393b02262feea0264497aacfaba2a.png",
    altText: "Porta botella para muro",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Soporte de guitarra",
    description: "Para muro",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/76/27/be/7627bec680a4a4cc0da922c632492b22.png",
    altText: "Soporte de guitarra",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    name: "Soporte de guitarra",
    description: "Para muro",
    imgClass: "carousel-item",
    source:
      "https://i.pinimg.com/originals/46/20/51/462051144c9e628d771b3f57c80d9277.png",
    altText: "Soporte de guitarra",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
];

export default imgArray;

/////

// let imgarray : [ImgProfile] =[
//   {
//     name = "El taller";
//     description = "Imaginando cosas útiles!";
//     imgClass = "carousel-item active";
//     source =
//       "https://i.pinimg.com/originals/6c/36/75/6c3675869ef4cdb9ef91d3ab544ad5b7.png";
//     altText = "WorkShop";
//     buttonClass = "active";
//     buttonAriaCurrent = "aria-current='true'";
//   },

//   {
//     name = "Maceteros";
//     description = "Impregnados con aceite mineral";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/fb/a3/ac/fba3ace1bc43d7879423cefa43c116a2.png";
//     altText = "Macetero";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },

//   {
//     name = "Porta vaso con Código QR";
//     description = "Grabado y corte laser";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/6d/3f/3d/6d3f3d373c61a5d88992f53762afddfc.png";
//     altText = "Porta vasos";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Porta vaso Logotipo";
//     description = "Grabado y corte laser";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/c9/b6/07/c9b60746a5d64089b8d2489bc945f81f.png";
//     altText = "Porta vaso";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Porta cepillos";
//     description = "Impregnado de aceite mineral";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/4e/f9/8c/4ef98c242e6a445770e9786a810e7e17.png";
//     altText = "Porta cepillos";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Porta cepillos";
//     description = "Impregnado de aceite mineral";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/71/21/70/712170c703e4f2cefca00c5311d70fe0.png";
//     altText = "Porta cepillos";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Desayunador";
//     description = "Superficie de porcelanato, canteado de bambú";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/f5/be/2a/f5be2a20a1b6bc8f564a1f26c54d7dac.png";
//     altText = "Desayunador";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Lapicero";
//     description = "Con huella de perrito";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/50/aa/c2/50aac2ea0dc3dccb643716dc25325f3a.png";
//     altText = "Lapicero";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Guacal";
//     description = "Almacenamiento diverso con agarraderas de cuero";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/7a/d6/3f/7ad63fcadf9751c59984e8bdff2d20b8.png";
//     altText = "Guacal";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Guacal";
//     description = "Almacenamiento diverso con agarraderas de cuero";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/61/5a/4c/615a4c439674ff14496d9db362f79a1f.png";
//     altText = "Guacal";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Grabado en plástico";
//     description = "Grabado laser";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/f6/c6/e3/f6c6e3306e9755e051b22a44a599d4ad.png";
//     altText = "Grabado en plástico";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Grabado en acero";
//     description = "Grabado laser";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/2b/25/5d/2b255d4acf2b3ef40963ead8359826c4.png";
//     altText = "Grabado en acero";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Casa de pájaro";
//     description = "Quemada e impregnada con protección para intemperie";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/28/4c/18/284c1890855c9c8886425b3b153b9fc5.png";
//     altText = "Casa de pájaro";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Reloj";
//     description = "Grabado y corte laser";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/da/58/28/da58283a315d29121f58112efb58680c.png";
//     altText = "Reloj";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Servilletero";
//     description = "Impregnado con aceite mineral";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/d8/9b/c1/d89bc1a06bf89b6114e1e6aa669a0eb5.png";
//     altText = "Servilletero";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Porta botella para muro";
//     description = "Base de bambú";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/54/53/93/545393b02262feea0264497aacfaba2a.png";
//     altText = "Porta botella para muro";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Soporte de guitarra";
//     description = "Para muro";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/76/27/be/7627bec680a4a4cc0da922c632492b22.png";
//     altText = "Soporte de guitarra";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
//   {
//     name = "Soporte de guitarra";
//     description = "Para muro";
//     imgClass = "carousel-item";
//     source =
//       "https://i.pinimg.com/originals/46/20/51/462051144c9e628d771b3f57c80d9277.png";
//     altText = "Soporte de guitarra";
//     buttonClass = "";
//     buttonAriaCurrent = "";
//   },
// ];

// var x = 1;

//  for((imageData) in imgarray.vals()){
//         imagesCollection.put(Int.toText(x),imageData);
//         x := x+1;
//     };

////

// public shared func copyToArray(): async [ImgProfile]{
//    let allImages =  Buffer.Buffer <ImgProfile>(0);
//     for(image in imagesCollection.vals()){
//       allImages.add (image);
//     };
//     imagesCollectionArray := Buffer.toArray<ImgProfile>(allImages);
//     return imagesCollectionArray;
// };
