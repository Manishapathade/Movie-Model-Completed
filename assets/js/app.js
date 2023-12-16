const cl = console.log;


const showmodalbtn =document.getElementById("showmodalbtn");
const backdrop = document.getElementById("backdrop");
const movieModal = document.getElementById("movieModal");
const moviemodalcloseAll = [ ...document.querySelectorAll(".moviemodalclose")];
const movieForm = document.getElementById("movieForm");
const movieTitlecontrol = document.getElementById("movieTitle");
const imgurlcontrol = document.getElementById("imgurl");
const ratingcontrol = document.getElementById("rating");
const movieContainer = document.getElementById("movieContainer")

let movieArr = [];


const templatingOfMovieCards = (cardArr) => {
        let result = ``;

        cardArr.forEach(movieobj => {
                result += `
                        <div class="col-md-4">
                             <div class="card movieCard mb-4">
                                <div class="card-header">
                                     <h4 class="m-0 d-flex justify-content-between">
                                            ${movieobj.movieTitle}
                                         <small>
                                            Rating : ${movieobj.rating}/5
                                          </small>
                                      </h4>
                                </div>
                                <div class="card-body">
                                        <img src="${movieobj.imgurl}" alt="" class="img-fluid">
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                        <button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                       </div>
                       `
                       movieContainer.innerHTML =result;
        })
}

const backdropmodalHandler = () =>{
        backdrop.classList.toggle("visible")
        movieModal.classList.toggle("visible")
}

moviemodalcloseAll.forEach(ele => {
        ele.addEventListener("click", backdropmodalHandler)
})

const onmovieAdd = (eve) => {
        eve.preventDefault();
        let movieobj = {
                movieTitle : movieTitlecontrol.value,
                imgurl : imgurlcontrol.value,
                rating  : ratingcontrol.value
        }

        cl(movieobj);
           movieArr.unshift(movieobj);
           templatingOfMovieCards(movieArr);
        // movieForm.reset()
        eve.target.reset();
        backdropmodalHandler(); // add hai to remove karega ,remove to add
}











showmodalbtn.addEventListener("click",backdropmodalHandler);
movieForm.addEventListener("submit",onmovieAdd);
















// const showmodalHandler = () => {
//        // cl("btn clicked")
//         backdrop.classList.add("visible")
//         ourModal.classList.add("visible")
// }






//         cl(movieArr)
//         templating(movieArr)

//         backdrop.classList.remove("visible")
//         ourModal.classList.remove("visible")
// }