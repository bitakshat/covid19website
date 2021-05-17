var request = new XMLHttpRequest();

// const table = document
//   .getElementById("table-container")
//   .getElementsByTagName("tbody")[0];

request.open("GET", "https://api.covid19india.org/data.json", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  const dataLen = Object.keys(data.statewise).length;
  console.log(data);

  const appendData = document.getElementById("tableData");
  let dataHTML = "";

  for (var i = 1; i < dataLen; i++) {
    dataHTML += `<tr id="dataContents">
      <td>${data.statewise[i].state}</td>
      <td>${data.statewise[i].confirmed}</td>
      <td>${data.statewise[i].active}</td>
      <td>${data.statewise[i].recovered}</td>
      <td>${data.statewise[i].deaths}</td>
    </tr>`;
    appendData.innerHTML = dataHTML;
  }
};

request.send();
