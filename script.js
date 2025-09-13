// Simple Gantt chart data
const tasks = [
  {name: '要件定義', start: new Date('2025-09-01'), end: new Date('2025-09-05')},
  {name: '設計', start: new Date('2025-09-06'), end: new Date('2025-09-10')},
  {name: '実装', start: new Date('2025-09-11'), end: new Date('2025-09-20')},
  {name: 'テスト', start: new Date('2025-09-21'), end: new Date('2025-09-25')}
];

function render(){
  const tbody = document.getElementById('rows');
  tasks.forEach(t=>{
    const tr=document.createElement('tr');
    const tdName=document.createElement('td'); tdName.textContent=t.name;
    const tdStart=document.createElement('td'); tdStart.textContent=t.start.toLocaleDateString();
    const tdEnd=document.createElement('td'); tdEnd.textContent=t.end.toLocaleDateString();
    tr.append(tdName,tdStart,tdEnd);
    tbody.appendChild(tr);
  });
}
render();