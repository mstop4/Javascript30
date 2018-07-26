const up = 'ArrowUp';
const down = 'ArrowDown';
const left = 'ArrowLeft';
const right = 'ArrowRight';

const code = [];
const pos = [];
const message = [];

code.push([up, up, down, down, left, right, left, right, 'b', 'a']);
code.push([down, right, 'a']);
code.push([down, left, 'b']);
code.push([left, right, 'a']);

message.push("30 Lives");
message.push("Hadouken!");
message.push("Tastusmaki Senpukyaku!");
message.push("Sonic Boom!");

for (let i=0; i<code.length; i++) {
  pos.push(0);
}

window.addEventListener('keyup', (e) => {
  for (let i=0; i<code.length; i++) {
    if (code[i][pos[i]] === e.key) {
      pos[i]++;
      if (pos[i] >= code[i].length) {
        console.log(message[i]);
        pos[i] = 0;
      }
    } else {
      pos[i] = 0;
    }
  }
})