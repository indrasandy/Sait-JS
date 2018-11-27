

// **********lyrics search with API***********

// ********Get values***********
var container=document.getElementById('container');
var lyrics=document.getElementById('lyrics');
var link=document.getElementById('link');
var button=document.getElementById('submit');

var videos = [
    {
      "youtubeId":"NZKXkD6EgBk",
      "title":"Bad Liar",
      "artist":"Selena Gomez"
    },
    {
      "youtubeId":"0l9kzS_B7gg",
      "title":"Big Fish",
      "artist":"Vince Staples"
    },
    {
      "youtubeId":"0GIWWFdOw_0",
      "title":"Blem",
      "artist":"Drake"
      },
      {
          
      "youtubeId":"9nNHMu0-jW8",
      "title":"Carry Fire",
      "artist":"Robert Plant"
      },
      
  
  ];
  var currentVideo;

button.addEventListener('click' ,function(e){
    e.preventDefault();
    link.innerHTML='';
    var artist= document.getElementById('artist').value;
    var song=document.getElementById('song').value;
    // console.log('Artist is   ', artist);
    // console.log('Song is   ',song);
    var videoEmbed = document.createElement('iframe');
    videoEmbed.width = 860; 
    videoEmbed.height = 315
    var videoThumb = document.createElement('img');
    var video=document.getElementById('video');


    fetch('https://api.lyrics.ovh/v1/'+ artist+"/"+ song)
    
    .then(function(response){
        console.log('Response  is ',response);
        return response.json();
        })

    .then(function(data){

        lyrics.innerHTML=data.lyrics;

        if(data.lyrics)
        {
                
                for (var i=0;i<videos.length;i++)
                {
                
                    if(artist===videos[i].artist)
                    {
                    

                        var thumbnailURL = youtube.generateThumbnailUrl(videos[i].youtubeId);
                        videoThumb.src = thumbnailURL;
                        link.appendChild(videoThumb);
                        videoEmbed.src = youtube.generateEmbedUrl(videos[i].youtubeId); 
                        // console.log('Data is ' ,videoEmbed.src , );
          video.innerHTML = ''; 
                        video.appendChild(videoEmbed);
                    }



                }
            
        }
            })
})







