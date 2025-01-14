function displayProfile(data) {
    const profile = document.getElementById("profile");

    profile.innerHTML = `<h2> ${data.login} </h2> <img src="${data.avatar_url}" style="width: 100px; height: 100px; border-radius: 50%">`
}

function fetchProfile() {
    const username = document.getElementById("username").value;
    if(!username) {
        alert("Please enter a Github UserName");
        return;
    } 
    // api.github.com
    fetch(`https://api.github.com/users/${username}`).then(res => {
        if(!res.ok) {
            throw new Error("Network Response is not ok");
        } else {
            return res.json();
        }
    }).then(data => {
        displayProfile(data);
    }).catch(err => {
        console.log(err);
    });

}