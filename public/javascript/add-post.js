async function imageNameHandler() {
    const fileInput = document.querySelector('#image-name input[type=file]');
    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
            const fileName = document.querySelector('#image-name .file-name');
            fileName.textContent = fileInput.files[0].name;
        }
    }
}

async function newFormHandler() {
    const imageUpload = await fetch('/api/image', {
        method: 'POST'
    });
    const fileInput = document.querySelector('#image-name input[type=file]');
    console.log(fileInput);
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const description = document.getElementById('post-description').value.trim();
    console.log(description);
    console.log(title);
    // const response = await fetch(`/api/posts`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title,
    //         description,
    //         category_id,
    //         image_name,
    //         user_id
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // if (response.ok) {
    //     document.location.replace('/dashboard');
    // } else {
    //     alert(response.statusText);
    // }
}