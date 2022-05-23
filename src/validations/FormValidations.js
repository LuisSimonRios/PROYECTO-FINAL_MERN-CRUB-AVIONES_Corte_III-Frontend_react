export function minLengthValidation(inputData, minLength) {
    const { value } = inputData;
    removeCLassErrorSuccess(inputData);
    if (value.length >= minLength) {
        inputData.classList.add("succes");
        return true;
    }else {
        inputData.classList.add("error");
        return false;
    }
}

export function emailValidation(inputData) {
    
    const emailValid = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const { value } = inputData;
    removeCLassErrorSuccess(inputData);
    const resultValidation = emailValid.test(value);
    if (resultValidation) {
        inputData.classList.add("sucess");
        return true;
    } else {
        inputData.ClassList.add("error");
        return false;
    }
}

function removeCLassErrorSuccess(inputData){
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}



