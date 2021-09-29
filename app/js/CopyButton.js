const copyButtun = document.querySelector('.copy')

copyButtun.addEventListener('click', () => {
    const codeText = copyButtun.nextElementSibling
    const sampletext = codeText.textContent
    const textArea = document.createElement('textarea');
    textArea.textContent = sampletext;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("copied");
    copyButtun.innerHTML = "Copied!"

    setTimeout(() => {
        copyButtun.innerHTML = "Copy"
        textArea.remove()
    }, 5000);
})