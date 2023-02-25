//make new post on click
const newFormHandler = async (event) => {
  event.preventDefault();
  //link to post name area (name seed)
  const name = document.querySelector('#post-name').value.trim();
  
  //link to post description area (desc seed)
  const description = document.querySelector('#post-desc').value.trim();

  // take both name and description and fetch through api/postroutes
  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      //meth post, JSON.stringify({ name, description })
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      alert('post created');
    } else {
      alert('Failed to create post');
    }
  }
};
//make a deletebutton on click event link
const delButtonHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('delete-id')) {
    const id = event.target.getAttribute('delete-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
      alert('post deleted');
    } else {
      alert('Failed to delete post');
    }
  }
};


if (document.querySelector('.new-post-form') != null) {
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
}

if (document.querySelector('.post-list') != null) {
  document
    .querySelector('.postdelete')
    .addEventListener('click', delButtonHandler);
}

