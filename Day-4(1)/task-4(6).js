function loadCSV(event) {

  let reader = new FileReader();

  reader.onload = function () {
    let lines = reader.result.split("\n");
    let table = document.getElementById("table");

    lines.forEach(url => {
      url = url.trim();
      if (url) {
        let row = table.insertRow();
        row.innerHTML =
          `<td><img src="${url}" download='iiiii2.png'></td>
          <td><a href="${url}" download="new.csv">Download</a></td>;`
      }
    });
  };

  reader.readAsText(event.target.files[0]);
}
