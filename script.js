
// // https://platform.openai.com/docs/api-reference/images/create


// const generateForm = document.querySelector(".generate-form");
// const imageGallery = document.querySelector(".image-gallery");

// const OPENAI_API_KEY = "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";
// let isImageGenerating = false;

// const updateImageCard = (imgDataArray) => {
//     imgDataArray.forEach((imgObject, index) => {
//         const imgCard = imageGallery.querySelectorAll(".img-card")[index];
//         const imgElement = imgCard.querySelector("img");
//         const downloadBtn = imgCard.querySelector(".download-btn");


//         const aiGeneratedImg = 'data:image/jpeg;64,${imgObject.b64_json}';
//         imgElement.src = aiGeneratedImg;

//         // When the image is loaded, remove the loading class and set downloaded images
//         imgElement.onload = () => {
//             imgCard.classList.remove("loading");
//             downloadBtn.setAttribute("href", aiGeneratedImg);
//             downloadBtn.setAttribute("download", '${new Date().getTime()}.jpg');
//         }
//     })
// }

// const generateAiImages = async (userPrompt, userImgQuantity) => {
//     try{
// const response = await fetch("https://api.openai.com/v1/images/generations", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": 'Bearer ${OPENAI_API_KEY}'
//     }
//     ,body: JSON.stringify({
//         prompt: userPrompt,
//         n:  parseInt(userImgQuantity),
//         size: "512x512",
//         response_format: "b64_json"
//     })
// });
// if(!response.ok) throw new Error("Failed to generate images! Plese try again.");

// const { data } = await response.json(); // Get data from the response
// updateImageCard([...data ]);
//     } catch (error) {
//         alert(error.message);
//         console.log(error);
//     } finally {
//         isImageGenerating = false;
//     }
// }

// const handleFormSubmission = (e) => {
//     e.preventDefault();
//     if(isImageGenerating) return;
//     isImageGenerating = true;

//     // get user input and img quantity values from the form
//     // console.log(e.srcElement);
//     const userPrompt = e.srcElement[0].value;
//     const userImgQuantity = e.srcElement[1].value;

//    // console.log(userPrompt, userImgQuantity)

//    const imgCardMarkup = Array.from ({length: userImgQuantity}, () => 
//     '<div class="img-card loading">
//             <img src="images/loader.svg" alt="image">
//             <a href="#" class="download-btn">
//                 <img src="images/download.svg" alt="download icon">
//             </a>
//     </div>'
//    ).join("");

//    imageGallery.innerHTML = imgCardMarkup;
//    generateAiImages(userPrompt, userImgQuantity);
// }

// generateForm.addEventListener("submit", handleFormSubmission);

//  NEw{  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


//previous { xa0rfar0atkhyOHdLDG1WOsGTeIQCdqH72W6ykwXdHfWen6E7hgUEYlwT_T3BlbkFJjK0Fly1_qSBiOaopNOgXmmHKMY6Zzj7nJv3zJumOgZTvRPsFqQ6sZzWV33tb


const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "sk-proj-ZZHlmeSmcvnMdsf-sk-svcacct-rHz11sULQDC38M3GVO6AT2ReaBBDmynCDdHfBTjoamSnnxVxNwSXgoaPFScUtRAdZWsmufWBMXT3BlbkFJ7wxz2X-AtJKcz3ZsNzGMgqeNZzFOtj6ehBDGM4lm9CK4GYXfcQvEnU2Qd3gE_QiZfi4eNB9eAA-2428BfmUluRIA"; // Replace with your actual API key or fetch it securely
let isImageGenerating = false;

const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) => {
        const imgCard = imageGallery.querySelectorAll(".img-card")[index];
        const imgElement = imgCard.querySelector("img");
        const downloadBtn = imgCard.querySelector(".download-btn");

        const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
        imgElement.src = aiGeneratedImg;

        // When the image is loaded, remove the loading class and set download attributes
        imgElement.onload = () => {
            imgCard.classList.remove("loading");
            downloadBtn.setAttribute("href", aiGeneratedImg);
            downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
        };
    });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: userPrompt,
                n: parseInt(userImgQuantity),
                size: "512x512",
                response_format: "b64_json"
            })
        });

        if (!response.ok) throw new Error("Failed to generate images! Please try again.");

        const { data } = await response.json(); // Get data from the response
        updateImageCard(data);
    } catch (error) {
        alert(error.message);
        console.error(error);
    } finally {
        isImageGenerating = false;
    }
};

const handleFormSubmission = (e) => {
    e.preventDefault();
    if (isImageGenerating) return;
    isImageGenerating = true;

    // Get user input and image quantity values from the form
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    // Generate image cards markup
    const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
        `<div class="img-card loading">
            <img src="images/loader.svg" alt="image">
            <a href="#" class="download-btn">
                <img src="images/download.svg" alt="download icon">
            </a>
        </div>`
    ).join("");

    imageGallery.innerHTML = imgCardMarkup;
    generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
