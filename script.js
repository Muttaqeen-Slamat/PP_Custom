(function () {
  //Get handles to the UI elements we'll be using
  var _launchButton = document.getElementById("launch_btn"),
    _previewDiv = document.getElementById("pp_preview_div"),
    _loaderDiv = document.getElementById("pp_loader_div");

  //Disable the Launch button until PitchPrint is ready for use
  _launchButton.setAttribute("disabled", "disabled");
  console.log(_launchButton);

  /*Initialize PitchPrint.
        Kindly read more here on the options.. https://docs.pitchprint.com
    */
  var ppclient = new PitchPrintClient({
    apiKey: "key_8c10e7ab595bbfba6168898e9d729d21", //api for domain muttaqeen
    // For the modal to show which design to display.
    designId: "69f6474fe3dc3dc813ca1519920a6d15", // phone case design
    custom: true,
  });
  console.log(ppclient);

  //Function to run once the app is validated (ready to be used)
  var appValidated = () => {
    _launchButton.removeAttribute("disabled"); //Enable the Launch button
    _launchButton.onclick = () => ppclient.showApp(); //Attach event listener to the button when clicked to show the app
    _loaderDiv.style.display = "none"; //Hide the loader
  };
  console.log(appValidated);

  //Function to run once the user has saved their project
  var projectSaved = (_val) => {
    let _data = _val.data;
    console.log(_data); //You can console.log the _data variable to see all that's passed down
    if (_data && _data.previews && _data.previews.length) {
      _previewDiv.innerHTML = _data.previews.reduce(
        (_str, _prev) => `${_str}<img src="${_prev}">`,
        ""
      ); //Show the preview images
    }
  };

  //Attach events to the app. You can see a list of all the events here: https://docs.pitchprint.com
  ppclient.on("app-validated", appValidated);
  ppclient.on("project-saved", projectSaved);
})();


//====Soring ====//
function order(a,b){
  if (a.dataset.font < b.dataset.font) return -1;
  if (a.dataset.font > b.dataset.font) return 1;
  return 0;  
}

function fontSorting() {
  const fontsDiv = document.querySelectorAll("[data-font]");
  const sortFont = Array.from(fontsDiv);
  let sorted = sortFont.sort(order);
  sorted.forEach((e) => document.querySelector(".flist").appendChild(e));
}

/*
------------Search by letter-----------
function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
*/


/*
-----Sorting but by text content and not by attribute------
const sortbtn = document.querySelector(".sorting");
sortbtn.addEventListener("click", function () {
  let list = document.querySelectorAll("[data-font]");
  console.log(list);
  let arr = [];

  for (let i = 0; i < list.length; i++) {
    let txtValue =
      list[i].getAttribute("data-font") || list[i].getAttribute("data-font");
    console.log(txtValue);
    arr.push(txtValue);
    console.log(arr);
    arr.sort();
    console.log(arr);
  }
  for (let i = 0; i < list.length; i++) {
    let text = arr.toString()
    console.log(text);
    list[i] = arr[i];
  }

  for (let i = 0; i < list.length; i++) {
    let txtValue =
      list[i].textContent.toLowerCase() || list[i].innerText.toLowerCase();
    console.log(txtValue);
    arr.push(txtValue);
    console.log(arr);
    arr.sort();
    console.log(arr);
  }

    for (let i = 0; i < list.length; i++) {
      // let text = arr.toString()
      // console.log(text);
      list[i].innerText = arr[i];
    }
});
 */
/*

function searchFunction() {
  const search = document.querySelector(".search-input");
  const filter = search.value.toUpperCase();
  const list = document.querySelectorAll("[data-font]");
  
  for (let i = 0; i < list.length; i++) {
    txtValue = list[i].textContent || list[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
  }
}
};

*/
