const URL = 'https://dummyjson.com/comments'
fetch(URL)
.then(response => response.json())
.then((data) => {
    console.log(data);

    const containerDiv = document.getElementById("container");
    
    //This part is to make me see what things look like in the browser//
    /*const dataStringified = JSON.stringify(data)
      containerDiv.innerHTML = dataStringified;*/

    data.comments.forEach( comments => {
    const commentsDiv = document.createElement ("div");
    const userFullnameH3 = document.createElement ("h3");
    const bodyP = document.createElement ("p");

    userFullnameH3.textContent = comments.user.fullName;
    bodyP.textContent = comments.body;

    commentsDiv.appendChild(userFullnameH3);
    commentsDiv.appendChild(bodyP);

    containerDiv.appendChild(commentsDiv);

});

});
