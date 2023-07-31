// function volume_sphere() {
//     //Write your code here
// 	// let volume;
//   let radius = parseFloat(document.getElementById('radius').value);
//   // radius = Math.abs(radius);
//   let volume = (4/3) * 3.14 * (radius * radius * radius);
  
//   document.getElementById('volume').value = volume;
//   return false;
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

function volume_sphere() {
  let radius = parseFloat(document.getElementById('radius').value);
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4); // Round to 4 decimal places
  
  document.getElementById('volume').value = volume;
  return false;
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
