async function loadPostsFromOnline() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/chirbard/WAD-HW/db"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error loading posts from online source:", error);
  }
}

async function loadPostsFromLocal() {
  try {
    const response = await fetch("db.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error loading posts from local file:", error);
  }
}

function renderPosts(posts) {
  const postsContainer = document.querySelector(".posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const authorImg = document.createElement("img");
    authorImg.src = post.authorAvatar || "img/defaultPfp.jpg";
    authorImg.alt = `${post.author}'s avatar`;
    authorImg.className = "avatar";
    postDiv.appendChild(authorImg);

    const authorName = document.createElement("p");
    authorName.innerText = post.author;
	authorName.className "author"
    postDiv.appendChild(authorName);

    const postDate = document.createElement("p");
    postDate.innerText = post.displayDate;
	postDate.className = "date"
    postDiv.appendChild(postDate);

    const postImage = document.createElement("img");
    if (post.image) {
      postImage.src = post.image;
      postImage.alt = "Post image";
	  postImage.className = "image"
      postDiv.appendChild(postImage);
    }

    const postText = document.createElement("p");
    postText.innerText = post.text;
	postText.className = "text-content"
    postDiv.appendChild(postText);

    const likeImage = document.createElement("img");
    likeImage.className = "like-button";
    likeImage.src = "img/like.jpg";
    likeImage.alt = "Like";
    postDiv.appendChild(likeImage);

    postsContainer.appendChild(postDiv);
  });
}

async function loadPosts() {
  // Task 4: Fetch from online endpoint (commented out for Task 5)
  //   const posts = await loadPostsFromOnline();

  // Task 5: Use local JSON file
  const posts = await loadPostsFromLocal();
  console.log(posts);
  renderPosts(posts);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadPosts();
});
