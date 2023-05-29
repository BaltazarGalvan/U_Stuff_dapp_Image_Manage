import {
  U_Stuff_Image_Manage_backend,
  canisterId,
  createActor,
} from "../../declarations/U_Stuff_Image_Manage_backend";
import { AuthClient } from "@dfinity/auth-client";

const loginStatusText = document.querySelector(".login_status_text");
const btnLogin = document.querySelector(".login_status_btn");
const imageListContainer = document.querySelector(".images_list");
const actualImage = document.querySelector(".actual_image");
const imgName = document.querySelector("#img_name");
const imgDescription = document.querySelector("#img_description");
const imgSource = document.querySelector("#img_source");
const imgAltText = document.querySelector("#img_altText");
const imgClass = document.querySelector("#imgClass");
const buttonClass = document.querySelector("#buttonClass");
const buttonariacurrent = document.querySelector("#buttonariacurrent");

let imageSelectedIndex = 0;
let imagesArray = [];

const authClient = await AuthClient.create();

const constructActor = async function () {
  const identity = await authClient.getIdentity();
  const imgCollectionActor = createActor(canisterId, {
    agentOptions: {
      identity,
    },
  });
  return imgCollectionActor;
};

const changeLogStatus = async function (isLoggued) {
  const imgCollectionActor = await constructActor();

  const result = await imgCollectionActor.whoami();
  if (isLoggued) {
    loginStatusText.textContent = "Wellcome Ic User: " + result;
    btnLogin.textContent = "Logout";
  } else {
    loginStatusText.textContent =
      "You're Anonimous, to manage the images you have to login with the authorized IC user";
    btnLogin.textContent = "Please Login";
  }
};

const imagesdisplay = async function (reloadPage) {
  let imgToAddToHTML = "";
  imagesArray = await U_Stuff_Image_Manage_backend.allImages();
  imagesArray.forEach((imageData, index) => {
    imgToAddToHTML =
      imgToAddToHTML +
      `<img id = "${index}" src="${imageData.source}" alt="${imageData.altText}"/>`;
  });
  imageListContainer.innerHTML = imgToAddToHTML;
  if (reloadPage) loadActualImageInfo(imagesArray[0]);
};

const loadActualImageInfo = function (actualImageInfo) {
  actualImage.src = actualImageInfo.source;
  imgName.value = actualImageInfo.name;
  imgDescription.value = actualImageInfo.description;
  imgSource.value = actualImageInfo.source;
  imgAltText.value = actualImageInfo.altText;
  imgClass.checked = actualImageInfo.imgClass === "carousel-item active";
  buttonClass.checked = actualImageInfo.buttonClass === "active";
  buttonariacurrent.checked =
    actualImageInfo.buttonAriaCurrent === "aria-current='true'";
};

btnLogin.addEventListener("click", async (e) => {
  e.preventDefault();
  if (await authClient.isAuthenticated()) {
    await authClient.logout();
    changeLogStatus(false);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        changeLogStatus(true);
      },
    });
  }
});

document
  .querySelector(".btn_remove_all")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const imgCollectionActor = await constructActor();
    const result = await imgCollectionActor.removeAll();
    console.log(result);
  });

document.querySelector(".btn_del_one").addEventListener("click", async (e) => {
  const imgCollectionActor = await constructActor();
  const result = await imgCollectionActor.deleteOne(imageSelectedIndex);
  console.log(result);
});

imageListContainer.addEventListener("click", (e) => {
  const clickedImage = e.target.id;
  loadActualImageInfo(imagesArray[clickedImage]);
});

changeLogStatus(await authClient.isAuthenticated());
imagesdisplay(true);
