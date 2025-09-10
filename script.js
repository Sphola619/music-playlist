// Function to add a song to the playlist
function addSong() {
  let song = document.getElementById("song-select").value;
  let ul = document.querySelector("#playlist ul");
  let songCount = ul.getElementsByTagName("li").length;

  if (songCount >= 10) {
    alert("Playlist is full! You can only add up to 10 songs.");
    document.getElementById("song-select").value = ""; // Clear input
    return;
  }

  if (song.trim() !== "") {
    let li = document.createElement("li");
    
    // Create a container for the song and remove button
    let songContainer = document.createElement("div");
    songContainer.className = "song-container"; // Add class for styling

    // Add song text
    let songText = document.createElement("span");
    songText.textContent = song;
    songText.className = "song-text"; // Add class for styling
    songContainer.appendChild(songText);

    // Create remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "X"; // Changed to "X"
    removeButton.className = "remove-song"; // Add class for styling

    // Add click event to remove the song
    removeButton.onclick = function () {
      ul.removeChild(li); // Remove the <li> from the <ul>
    };

    songContainer.appendChild(removeButton);
    li.appendChild(songContainer);

    // Add the new song at the top
    ul.insertBefore(li, ul.firstChild);

    document.getElementById("song-select").value = ""; // Clear input
  }
}

// Add song on button click
document.getElementById("add-song").onclick = addSong;

// Add song on Enter key press
document.getElementById("song-select").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    addSong();
  }
});