async function newFormHandler() {

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const description = document.getElementById('post-description').value.trim();
    console.log(description);
    console.log(title);
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            category_id,
            image_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}