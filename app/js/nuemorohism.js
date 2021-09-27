const size_slide = document.querySelector(".size");
const size_val = document.querySelector(".size_val");
const shape = document.querySelector(".shape_preview");
const height_code = document.querySelector(".height");
const width_code = document.querySelector(".width");
const radius_slide = document.querySelector(".radius");
const radius_val = document.querySelector(".radius_val")
const distance_slide = document.querySelector(".distance");
const distance_val = document.querySelector(".distance_val");
const intensity_slide = document.querySelector(".intensity");
const intensity_val = document.querySelector(".intensity_val");
const blur_slide = document.querySelector(".blur");
const blur_val = document.querySelector(".blur_val");
const color_code = document.querySelector(".col");
const br_code = document.querySelector(".br");
const color_input = document.querySelector(".color");
const bg = document.querySelector(".prev");
const bs = document.querySelector(".bs");


size_slide.oninput = (() => {
  let size = size_slide.value;
  size_val.innerHTML = size;
  shape.style.height = size + 'px';
  shape.style.width = size + 'px';
  width_code.innerHTML = size + 'px';
  height_code.innerHTML = size + 'px';

  let a = size / 410;
  let b = a * 41;
  let c = a * 82;
  distance_slide.value = b;
  distance_val.innerHTML = distance_slide.value;
  blur_slide.value = c;
  blur_val.innerHTML = blur_slide.value;
  let color = color_input.value;
  let intensity=intensity_slide.value / 100;
  let black_shadow = hexToHSL(color);
  black_shadow.light = (black_shadow.light - (black_shadow.light * intensity)) ;
  let lighter = hexToHSL(color);
  lighter.light = lighter.light + (lighter.light * intensity);
  let darker = hslToHex(black_shadow.hue,black_shadow.saturation,black_shadow.light);
  if(lighter.light>100){
    lighter.light = 100;
  }
  let light = hslToHex(lighter.hue,lighter.saturation,lighter.light);

  shape.style.boxShadow = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;
  bs.innerHTML = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;



});

radius_slide.oninput = (() => {

  let radius = radius_slide.value * 10;
  radius_val.innerHTML = radius;
  shape.style.borderRadius = radius + '%';
  br_code.innerHTML = radius + '%';
});

color_input.oninput = (() => {

  let color = color_input.value;
  color_code.innerHTML = color;
  shape.style.background = color;
  bg.style.background = color;
  let intensity = intensity_slide.value / 100; 
  let black_shadow = hexToHSL(color);
  black_shadow.light = (black_shadow.light - (black_shadow.light * intensity)) ;
  let lighter = hexToHSL(color);
  lighter.light = lighter.light + (lighter.light * intensity);
  let darker = hslToHex(black_shadow.hue,black_shadow.saturation,black_shadow.light);
  if(lighter.light>100){
    lighter.light = 100;
  }
  let light = hslToHex(lighter.hue,lighter.saturation,lighter.light);

  shape.style.boxShadow = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;
  bs.innerHTML = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;


  
});

distance_slide.oninput = (()=>{

  let distance= distance_slide.value;
  distance_val.innerHTML = distance;
  let a = distance / 50;
  let b = a * 100;
  blur_slide.value = b;
  blur_val.innerHTML = blur_slide.value; 
  let intensity = intensity_slide.value / 100;
  let color = color_input.value;
  let black_shadow = hexToHSL(color);
  black_shadow.light = (black_shadow.light - (black_shadow.light * intensity)) ;
  let lighter = hexToHSL(color);
  lighter.light = lighter.light + (lighter.light * intensity);
  let darker = hslToHex(black_shadow.hue,black_shadow.saturation,black_shadow.light);
  if(lighter.light>100){
    lighter.light = 100;
  }
  let light = hslToHex(lighter.hue,lighter.saturation,lighter.light);

  shape.style.boxShadow = distance + 'px ' + distance + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' + distance + 'px ' + '-' + distance + 'px ' + blur_slide.value + 'px ' + light;
  bs.innerHTML = distance + 'px ' + distance + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' + distance + 'px ' + '-' + distance + 'px ' + blur_slide.value + 'px ' + light;


});

intensity_slide.oninput = (()=>{
  
  let intensity = intensity_slide.value / 100;
  intensity_val.innerHTML = intensity; 
  let color=color_input.value;
  let black_shadow = hexToHSL(color);
  black_shadow.light = (black_shadow.light - (black_shadow.light * intensity)) ;
  let lighter = hexToHSL(color);
  lighter.light = lighter.light + (lighter.light * intensity);
  let darker = hslToHex(black_shadow.hue,black_shadow.saturation,black_shadow.light);
  if(lighter.light>100){
    lighter.light = 100;
  }
  let light = hslToHex(lighter.hue,lighter.saturation,lighter.light);

  shape.style.boxShadow = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;
  bs.innerHTML = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;


  
});

blur_slide.oninput = (()=>{

  let blur = blur_slide.value;
  blur_val.innerHTML = blur;
  let color = color_input.value;
  let intensity= intensity_slide.value / 100;
  let black_shadow = hexToHSL(color);
  black_shadow.light = (black_shadow.light - (black_shadow.light * intensity)) ;
  let lighter = hexToHSL(color);
  lighter.light = lighter.light + (lighter.light * intensity);
  let darker = hslToHex(black_shadow.hue,black_shadow.saturation,black_shadow.light);
  if(lighter.light>100){
    lighter.light = 100;
  }
  let light = hslToHex(lighter.hue,lighter.saturation,lighter.light);

  shape.style.boxShadow = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;
  bs.innerHTML = distance_slide.value + 'px ' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + darker + ', \n' + '-' +distance_slide.value + 'px ' + '-' + distance_slide.value + 'px ' + blur_slide.value + 'px ' + light;


});

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  // return "hsl(" + h + "," + s + "%," + l +")";
  return { hue: h, saturation: s , light: l }
  
}


function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}