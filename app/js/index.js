// Every Inputs
const inputBorderRadius = document.getElementById('inputBorderRadius')
const inputBlur = document.getElementById('inputBlur')
const inputOpacity = document.getElementById('inputOpacity')
const inputSaturation = document.getElementById('inputSaturation')
const color = document.getElementById('color')

// values in changes 
const borderRadiusChangeValue = document.getElementById('borderRadiusChangeValue')
console.log(borderRadiusChangeValue);
const blurChangeValue = document.getElementById('blurChangeValue')
console.log(blurChangeValue);
const opacityChangeValue = document.getElementById('opacityChangeValue')
console.log(opacityChangeValue);
const saturationChangeValue = document.getElementById('saturationChangeValue')

// values in code
const blurValue = document.getElementById('blur-value')
const blurValue2 = document.getElementById('blur-value2')
const saturationValue = document.getElementById('saturation-value')
const saturationValue2 = document.getElementById('saturation-value2')
const backgroundColorValue = document.getElementById('backgroundColor-value')
const borderRadiusValue = document.getElementById('border-radius-value')


// Card
const card = document.getElementById('card')



// event Linsteners
color.addEventListener('input', () => {
    
    const ov = inputOpacity.value
    const rgba =  convertHex(String(color.value), ov)
    
    card.style.background = rgba;

    backgroundColorValue.innerHTML = rgba
})

inputBorderRadius.addEventListener('input', () => {
    const br = inputBorderRadius.value + 'px'
    card.style.borderRadius = br
    borderRadiusValue.innerHTML = br
    borderRadiusChangeValue.innerHTML = inputBorderRadius.value
})

inputBlur.addEventListener('input', () => {
    const bv = 'blur(' + inputBlur.value + 'px' + ') ' + ' saturate(' + inputSaturation.value + '%' + ')';
    console.log(bv);
    card.style.backdropFilter = bv
    blurValue.innerHTML = inputBlur.value
    blurValue2.innerHTML = inputBlur.value
    blurChangeValue.innerHTML = inputBlur.value
})

inputOpacity.addEventListener('input', () => {
    const ov = inputOpacity.value
    const rgba =  convertHex(String(color.value), ov)
    card.style.background = rgba;
    backgroundColorValue.innerHTML = rgba
    opacityChangeValue.innerHTML = inputOpacity.value
})

inputSaturation.addEventListener('input', () => {
    const sv = 'blur(' + inputBlur.value + 'px' + ') ' + ' saturate(' + inputSaturation.value + '%' + ')';
    console.log(sv);
    card.style.backdropFilter = sv
    saturationValue.innerHTML = inputSaturation.value + '%'
    saturationValue2.innerHTML = inputSaturation.value + '%'
    saturationChangeValue.innerHTML = inputSaturation.value
})



// hex to rgba

function convertHex(hexCode,opacity){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}