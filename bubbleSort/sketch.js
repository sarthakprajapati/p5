// Set Global Variables 
let values = [];
let w = 20;
let states = [];


function setup() {
  // Create Canvas of Size Windows Width * Windows Height
  createCanvas(windowWidth, windowHeight);

  // Insert Random values in array
  values = new Array(floor(width/w));

  for(let i =0; i< values.length; i++){
    values[i] = float(random(height));
    states[i] = -1; 
  }
  print("Unsorted Array is :"+values);
  bubbleSort(values,0,values.length);
  print("Sorted Array :"+ values);

}

async function bubbleSort(arr, start ,end){
  if(start >= end){
    return;
  }
  for(var i=0;i<end-1;i++){
    for(var j=0;j<end-i-1;j++){
      if(arr[j]>=arr[j+1]){
        states[j] = 1;
        await swap(arr,j,j+1);
        states[j+1] = 0;
      }
      states[j] = 2;
    }
  }
  return arr;
}


function draw() {
  background(51);
  for(let i = 0; i<values.length; i++){
  stroke(0);
    fill(255);
    if(states[i] == 0){
      fill(255,0,0);
    }
    else if (states[i]==1){
      fill("#58FA82");
    }
    else {
      fill(255);
    }
    rect(i*w, height - values[i],w,values[i]);
  }
}

async function swap(arr, a, b){
  
  await sleep(20);
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}