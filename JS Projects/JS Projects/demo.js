// Basic: Lay du lieu tu server va hien thi len trang web
fetch('http://localhost:3000/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    let myNode = document.getElementById("showdata");
    data.forEach((user) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = user.name;
        myNode.appendChild(newDiv);
    });
});