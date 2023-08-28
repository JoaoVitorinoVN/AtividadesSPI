n = prompt(`Informe-me um número maior ou igual à 2`);

document.write(`    
<table>
<tr>
    <th>Base Decimal</th>
    <th>Base Binária</th>
    <th>Base Hexadecimal</th>
</tr>
`)

for (i = 0; i <= n; i++) {
    document.write(`
    <tr>
        <td>${i}</td>
        <td>${i.toString(2)}</td>
        <td>${i.toString(16)}</td>
    </tr>
    `)
}


document.write(`</tr></table>`)


