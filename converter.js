let patentMap = {};

fetch('patent_mapping.json')
  .then(response => response.json())
  .then(data => { patentMap = data; });

function convertSection() {
  const oldSection = document.getElementById("oldSection").value.trim();
  const resultDiv = document.getElementById("result");
  
  if (patentMap[oldSection]) {
    const mapping = patentMap[oldSection];
    resultDiv.innerHTML = `
      <b>Section:</b> ${oldSection}<br>
      <b>Title:</b> ${mapping.title}<br>
      <b>Judgement:</b> ${mapping.judgement}<br>
      <b>Citation:</b> ${mapping.citation}
    `;
  } else {
    resultDiv.innerHTML = "No data found for this section.";
  }
}