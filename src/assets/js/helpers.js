function init_Event(id_file, id_input) {
    let file = document.getElementById(id_file);
    let input = document.getElementById(id_input);

    file.addEventListener('click', () => {
        input.click();
    });
}