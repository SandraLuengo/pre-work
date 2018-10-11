var rover = {
  position: [0,0],
  direction: 'N',
  travelLog:[[0,0]]
};

function turnLeft(rover){
  var orientation=['N','W','S','E'];
  if(rover.direction=='E'){
    rover.direction='N';
  }else{
    rover.direction=orientation[orientation.indexOf(rover.direction)+1];
  }
  console.log('Turn Left - new orientation: ' + rover.direction);
}

function turnRight(rover){
  var orientation=['N','E','S','W'];
  if(rover.direction=='W'){
    rover.direction='N';
  }else{
    rover.direction=orientation[orientation.indexOf(rover.direction)+1];
  }
  console.log('Turn Right - new orientation: ' + rover.direction);
}

function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      if(rover.position[0]==0){
        console.log('You are in the limit');
      }else{
        rover.position[0]--;
      }
      break;
    case 'E':
      if(rover.position[1]==9){
        console.log('You are in the limit');
      }else{
        rover.position[1]++;
      }
      break;
    case 'S':
      if(rover.position[0]==9){
        console.log('You are in the limit');
      }else{
        rover.position[0]++;
      }
      break;
    case 'W':
      if(rover.position[1]==0){
        console.log('You are in the limit!');
      }else{
        rover.position[1]--;
      }
      break;
  }
  rover.travelLog.push([rover.position[0],rover.position[1]]);
  console.log('Rover position: '+rover.position[0]+','+rover.position[1]);
}
function moveBackward(rover){
  switch(rover.direction) {
    case 'N':
      if(rover.position[0]==9){
        console.log('You are in the limit');
      }else{
        rover.position[0]++;
      }
      break;
    case 'E':
      if(rover.position[1]==0){
        console.log('You are in the limit');
      }else{
        rover.position[1]--;
      }
      break;
    case 'S':
      if(rover.position[0]==0){
        console.log('You are in the limit');
      }else{
        rover.position[0]--;
      }
      break;
    case 'W':
      if(rover.position[1]==9){
        console.log('You are in the limit');
      }else{
        rover.position[1]++;
      }
      break;
  }
  rover.travelLog.push([rover.position[0],rover.position[1]]);
  console.log('Rover position: '+rover.position[0]+','+rover.position[1]);
}
function moves(list){
  list=list.toUpperCase().split('');
  for(var i=0;i<list.length;i++){
    switch(list[i]){
      case 'F':
        moveForward(rover);
        break;
      case 'L':
        turnLeft(rover);
        break;
      case 'R':
        turnRight(rover);
        break;
      case 'B':
        moveBackward(rover)
        break;
      default:
        console.log('Wrong order >.<!');
        break;
    }
  }
  console.log(rover.travelLog);
}
function actualPosition(rover){
  console.log('Rover position'+rover.position[0]+','+rover.position[1]);
  console.log('Rover direction'+rover.direction);
}
