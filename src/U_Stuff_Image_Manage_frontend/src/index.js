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
const imageSource = document.querySelector(".image_source");

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
    loginStatusText.textContent = "Please login with an authorized IC user";
    btnLogin.textContent = "Please Login";
  }
};

const imagesdisplay = async function (reloadPage) {
  let imgToAddToHTML = "";
  imagesArray = await U_Stuff_Image_Manage_backend.allImages();
  imagesArray.forEach((imageData, index) => {
    imgToAddToHTML =
      imgToAddToHTML +
      `<img class = "image" id = "${index}" src="${imageData.source}" alt="${imageData.altText}"/>`;
  });
  imageListContainer.innerHTML = imgToAddToHTML;
  if (reloadPage) {
    imageSelectedIndex = 0;
    loadActualImageInfo(imagesArray[imageSelectedIndex]);
  }
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

const constructNewImage = function () {
  return {
    source: actualImage.src,
    name: imgName.value,
    description: imgDescription.value,
    source: imgSource.value,
    altText: imgAltText.value,
    imgClass: imgClass.checked ? "carousel-item active" : "",
    buttonClass: buttonClass.checked ? "active" : "",
    buttonAriaCurrent: buttonariacurrent.checked ? "aria-current='true'" : "",
  };
};

const confirmAction = function (question) {
  let text = `${question}`;
  return confirm(text);
};

const motokoLoader = function (callingBackend) {
  if (callingBackend) {
    document.querySelector(".motoko").classList.add("motoko_loader");
  } else {
    document.querySelector(".motoko").classList.remove("motoko_loader");
  }
};

const setDisabled = function (disabled) {
  const allBtn = document.querySelectorAll("button");
  const allInputs = document.querySelectorAll("input");
  const allImages = document.querySelector(".disable_imagescontainer");

  if (disabled) {
    allImages.classList.remove("show_images_enabled");
  } else {
    allImages.classList.add("show_images_enabled");
  }

  allBtn.forEach((ele) => {
    if (disabled) {
      ele.setAttribute("disabled", true);
    } else {
      ele.removeAttribute("disabled");
    }
  });

  allInputs.forEach((ele) => {
    if (disabled) {
      ele.setAttribute("disabled", true);
    } else {
      ele.removeAttribute("disabled");
    }
  });
};

imageSource.addEventListener("change", () => {
  actualImage.src = imageSource.value;
});

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

imageListContainer.addEventListener("click", (e) => {
  const clickedImage = e.target.id;
  imageSelectedIndex = parseInt(clickedImage);
  loadActualImageInfo(imagesArray[clickedImage]);
});

document
  .querySelector(".btn_remove_all")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    if (
      !confirmAction(
        "\nTHIS ACTION WILL ERASE ALL IMAGES RECORD!. Please Confirm"
      )
    )
      return;

    setDisabled(true);
    motokoLoader(true);

    const imgCollectionActor = await constructActor();
    const removeAllResult = await imgCollectionActor.removeAll();

    if (removeAllResult.err) {
      alert(
        "You can't perform this action!, please login with an authorized user!"
      );
    } else {
      await imagesdisplay(true);
    }
    setDisabled(false);
    motokoLoader(false);
  });

document.querySelector(".btn_del_one").addEventListener("click", async (e) => {
  e.preventDefault();
  if (
    !confirmAction(
      `\nTHIS ACTION WILL DELETE THE IMAGE RECORD FOR "${imagesArray[imageSelectedIndex].name}"!. Please Confirm`
    )
  )
    return;

  setDisabled(true);
  motokoLoader(true);

  const imgCollectionActor = await constructActor();
  const deleteOneResult = await imgCollectionActor.deleteOne(
    imageSelectedIndex
  );

  if (deleteOneResult.err) {
    alert(
      "You can't perform this action!, please login with an authorized user!"
    );
  } else {
    await imagesdisplay(true);
  }
  setDisabled(false);
  motokoLoader(false);
});

document.querySelector(".btn_mod").addEventListener("click", async (e) => {
  e.preventDefault();

  if (
    !confirmAction(`\nTHIS ACTION WILL REPLACE THE IMAGE INFO!. Please Confirm`)
  )
    return;

  setDisabled(true);
  motokoLoader(true);

  const newImageInfo = constructNewImage();

  const imgCollectionActor = await constructActor();
  const modResult = await imgCollectionActor.modImg(
    imageSelectedIndex,
    newImageInfo
  );

  if (modResult.err) {
    alert(
      "You can't perform this action!, please login with an authorized user!"
    );
  } else {
    await imagesdisplay(true);
  }
  motokoLoader(false);
  setDisabled(false);
});

document.querySelector(".btn_add").addEventListener("click", async (e) => {
  e.preventDefault();

  if (
    !confirmAction(
      `\nTHIS ACTION WILL ADD THIS INFO AS A NEW RECORD!, Please confirm`
    )
  )
    return;

  setDisabled(true);
  motokoLoader(true);
  const newImageInfo = constructNewImage();

  const imgCollectionActor = await constructActor();
  const modResult = await imgCollectionActor.addImg(newImageInfo);

  if (modResult.err) {
    alert(
      "You can't perform this action!, please login with an authorized user!"
    );
  } else {
    await imagesdisplay(true);
  }

  motokoLoader(false);
  setDisabled(false);
});

document.querySelector(".btn_new").addEventListener("click", (e) => {
  e.preventDefault();
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((ele) => {
    ele.value = "";
  });
  actualImage.src = "";
});

const init = async function () {
  motokoLoader(true);
  changeLogStatus(await authClient.isAuthenticated());
  await imagesdisplay(true);
  motokoLoader(false);
};

init();
