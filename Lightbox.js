// File: lightbox.js
// 03/2019 Integrative Software LLC 
// MIT license

// Note: requires CSS for styling lightbox objects

const lightbox_fade = "_lb_fade";
const lightbox_light = "_lb_light";
const lightbox_boxclose = "_lb_boxclose";
const lightbox_video = "_lb_video";

class Lightbox { 
  
  constructor() {
            
    var light = document.createElement("div");
    light.id = lightbox_light;
    document.body.appendChild(light);
    this.light = light;
    
    var anchor = document.createElement("a");
    anchor.id = lightbox_boxclose;
    anchor.addEventListener("click", lightbox_close);
    light.appendChild(anchor);
    this.anchor = anchor;
    
    var video = document.createElement("video");
    video.id = lightbox_video;
    video.width = 600;
    video.controls = true;
    light.appendChild(video);
    this.video = video;
    
    var source = document.createElement("source");
    source.type = "video/mp4";
    video.appendChild(source);
    this.source = source;
    
    var fade = document.createElement("div");
    fade.id = lightbox_fade;
    fade.addEventListener("click", lightbox_close);
    document.body.appendChild(fade);
    this.fade = fade;
    
    window.document.addEventListener('keydown', function(e) {
      if (!e) {
        e = event;
      }
      if (e.keyCode == 27) {
        lightbox_close();
      }      
    })
  }
  
  openVideo(url, width) {
    this.source.src = url;
    this.video.width = width;
    window.scrollTo(0, 0);
    this.light.style.display = 'block';
    this.fade.style.display = 'block';
    this.video.play();
  }
  
  closeVideo() {
    this.light.style.display = 'none';
    this.fade.style.display = 'none';
    this.video.pause();    
  }
}

var lightbox = null;

function lightbox_open(url, width) {
  if (lightbox == null) {
    lightbox = new Lightbox();
  }
  lightbox.openVideo(url, width);
}

function lightbox_close() {
  if (lightbox) {
    lightbox.closeVideo();
  }
}
