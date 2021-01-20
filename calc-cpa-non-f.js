// Source: https://ctt-daotao.hust.edu.vn/DisplayWeb/DisplayBaiViet?baiviet=33265
const grading = new Map([
    ['A+', 4.0],
    ['A', 4.0],
    ['B+', 3.5],
    ['B', 3.0],
    ['C+', 2.5],
    ['C', 2.0],
    ['D+', 1.5],
    ['D', 1.0],
    ['F', 0]
]);

function equivalents(_GPA)
{
    let a, b = 0, GPA = parseFloat(_GPA);
    if (parseFloat(2.0) <= GPA && GPA < parseFloat(2.5))
    {
        a = 3.0;
        b = -0.5;
    }
    else if (parseFloat(2.5) <= GPA && GPA < parseFloat(3.2))
    {
        a = 1.42;
        b = 3.45;
    }
    else
    {
        a = 2.5;
    }
    return (GPA * a + b);
}

let rows = document.getElementsByClassName('dxgvDataRow');

console.log(rows);

for (const row of rows)
{
    if (row.children[4].textContent === 'F')
        continue;
    console.log(row.children[4].textContent);
}