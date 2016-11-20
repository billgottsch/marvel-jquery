
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
        subgroup.append('<br>' + 'Name: ' + res.name);
        if (res.thumbnail.path === 'self' || res.thumbnail.path === null) {
          subgroup.append($('<br>' + '<img class="thumbplace">').attr('src', 'assets/reinhardt.jpg'));
        } else {
        subgroup.append($('<br>' + '<img class="thumbs">').attr('src', res.thumbnail.path + '.jpg'));
        };
        subgroup.append('<br>' + 'Character ID: ' + res.id);
        subgroup.append('<br>' + '# of Comics: ' + res.comics.available);
        subgroup.append('<br>' + '# of Stories: ' + res.stories.available);
        subgroup.append('<br>' + '# of Events: ' + res.events.available);
        subgroup.append('<br>' + '# of Series: ' + res.series.available);
        subgroup.append('<br>' + '<a class="urlLink"></a>' + res.resourceURI).attr('href', res.resourceURI);
        group.append(subgroup)
    })
    $('.marvel').empty().append(group);
   });

};
}
$('#heroSelect').on("click", loadIt);
