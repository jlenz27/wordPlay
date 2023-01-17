function getForm() {
    let formSentence = document.getElementById("inputText").value;
    let formArray = formSentence.split(' ');

    return formArray;


}

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let inputValue = getForm();
        let newArray = [];
        inputValue.forEach(function (element) {
            if (element.length >= 3) {
                newArray.push(element)

            }

        })

        const reversedArray = newArray.reverse();
        let newString = reversedArray.join(' ');
        let finalvalue = document.createElement("p");
        finalvalue.append(newString);
        document.body.append(finalvalue);



    });
}

window.onload = function () {

    setFormSubmissionEventHandler();
};
