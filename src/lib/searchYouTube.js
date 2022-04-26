import { API_KEY, YOUTUBE_API_KEY } from "../config/config.js";

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader("Authorization", API_KEY);
});

var searchYouTube = (query, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: "GET",
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      type: 'video',
      maxResults: 8,
      part: 'snippet',
    },
    contentType: "application/json",
    success: function(d) {
      return callback(d.items);
    },
    error: function (error) {
      console.error("failed to fetch serach results", error);
    },
  });
  // TODO
};

export default searchYouTube;
