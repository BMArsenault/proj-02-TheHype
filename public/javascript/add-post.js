// async function newFormHandler() {
//     console.log("RUNNING THIS FUNCTION");
//     const title = document.querySelector('input[name="post-title"]').value.trim();
//     const description = document.getElementById('post-description').value.trim();
//     const category_id = document.querySelector('.categories').value;
//     console.log(category_id);
//     const response = await fetch(`/api/posts`, {
//         method: 'POST',
//         body: {
//             title,
//             description,
//             category_id
//         }
//     });

//     // if (response.ok) {
//     //     document.location.replace('/dashboard');
//     // } else {
//     //     alert(response.statusText);
//     // }

//     console.log(title);
//     console.log(description);
//     console.log(category_id);


// }