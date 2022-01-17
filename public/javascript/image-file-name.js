async function imageNameHandler() {
    const fileInput = document.querySelector('#image-name input[type=file]');
    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
            const fileName = document.querySelector('#image-name .file-name');
            fileName.textContent = fileInput.files[0].name;
        }
    }
}