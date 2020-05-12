
  export default {
        title: "Video",
        name: "video",
        type: "object",
        fields: [
          { title: "Title", name: "title", type: "string" },
          {
            title: "Video file",
            name: "video",
            type: "mux.video"
          },
          {
            title: "Poster",
            name: "poster",
            type: "image"
          }
        ]
  }