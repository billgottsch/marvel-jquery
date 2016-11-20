
function loadIt(){
var heroReq = $('#heroReq').val();
if (heroReq == '' || heroReq == null || heroReq == undefined) {
  alert('Your search terms were not valid')
} else {
  $.ajax({
   url:"https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + heroReq + "&limit=20&apikey=a799d9e6415c9aaf43e9154921a45d92"
  }).then(function(char){
     var group = $('<div class="groups"></div>');
     $.each(char.data.results, function(req, res){
        var subgroup = $('<div class="subgroup"></div>')
        if (res.thumbnail.path === 'self' || res.thumbnail.path === null) {
          subgroup.append($('<br>' + '<img class="thumbplace">').attr('src', 'assets/reinhardt.jpg'));
        } else {
        subgroup.append($('<br>' + '<img class="thumbs">').attr('src', res.thumbnail.path + '.jpg'));
        };
        subgroup.append('<br>' + 'Name: ' + res.name);
        subgroup.append('<br>' + 'Character ID: ' + res.id);
        subgroup.append('<br>' + '# of Comics: ' + res.comics.available);
        subgroup.append('<br>' + '# of Stories: ' + res.stories.available);
        subgroup.append('<br>' + '# of Events: ' + res.events.available);
        subgroup.append('<br>' + '# of Series: ' + res.series.available);
        subgroup.append('<br>' + '<a class="urlLink"></a>' + res.resourceURI).attr('href', res.resourceURI);
        group.append(subgroup)
    })
    $('.marvel').empty().append(subgroup);
   });

};
}
$('#heroSelect').on("click", loadIt);





// unction loadIt(){
// var pageReq = $('#pageReq').val();
// if (pageReq == '' || pageReq == null || pageReq == undefined) {
//   alert('Your search terms were not valid')
// } else {
// $.getJSON(
//   "https://www.reddit.com/r/" + pageReq + ".json",
//   function goGetIt(data)
//   {
//     var group = $('<div class="group"></div>')
//     $.each(
//       data.data.children.slice(0, 25),
//       function (request, result) {
//         // var thumbnail = $('<img/>')
//         var subgroup = $('<div class="subgroup"></div>')
//         if (result.data.thumbnail == 'self' || result.data.thumbnail == null){
//           subgroup.append($('<img class="thumbnail"/>').attr('src','https://cdn1.iconfinder.com/data/icons/school-supplies-3/64/folder_denied_stop_not_found_deleted_error-128.png'));
//         } else {
//           subgroup.append($('<img class="thumbnail"/>').attr('src',result.data.thumbnail));
//         }
//         subgroup.append($('<br>') );
//         // var url = $('<a href='#'></a>')
//         subgroup.append($('<a class="title"></a>').attr('href',result.data.url).attr('target',"_blank").text(result.data.title));
//         // var description = $('<p></p>')
//         subgroup.append($('<p class="description"></p>').text("Click to read more!"));
//         // // var ups = $('<p></p>')
//         subgroup.append($('<div class="ups"></div>').text(result.data.ups) );
//         // // var num_comments = $('<p></p>')
//         subgroup.append($('<div class="comments"></div>').text(result.data.num_comments) );
//         subgroup.append($('<hr>') );
//         group.append(subgroup);
//
//       })
//     $("#content").empty().append(group);
//
//   }).fail(function() {
//     alert("Your search terms were not valid")
// });
// // .success(function() { alert("second success"); })
// // .complete(function() { alert("complete"); });
// }
// }
//
// $('#loadReq').on("click", loadIt);
