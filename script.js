document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const entry = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    comment: document.getElementById("comment").value
  };

  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(entry);

  localStorage.setItem("comments", JSON.stringify(comments));

  alert("Thank you! Your message has been saved.");
  this.reset();
});