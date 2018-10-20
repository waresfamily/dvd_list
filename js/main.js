// Get local DVD list
function getDVD() {
  fetch('data/video_library_test.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      //console.log(data);
      var output = data.map(function(dvds) {
        // Define some constants to hold table html
        const introth ='<tr class="table-default d-flex">' +'<th class="col-8" scope="row">';
        const introtd = '<td class="col-4">';

        return introth + dvds.Title + '</th>' + introtd + dvds.Media + '</td></tr>';
  }).join('');

      // Add DVDs to table
      document.getElementById('dvdTable').innerHTML = output;
      //console.log(output);
    })
    .catch(function(err) {
      console.log(err);
    });
}