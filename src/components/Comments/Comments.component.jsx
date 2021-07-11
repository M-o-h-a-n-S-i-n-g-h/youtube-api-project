import React from "react";

const Comments = ({id, videoComments}) => {
   return (
     <div>
        <h5>
           {videoComments.topLevelComment.snippet.authorDisplayName}: <span
          style={{color: "blue"}}>{videoComments.topLevelComment.snippet.textDisplay}
        </span> <span><button>Edit</button></span> <span><button>Reply</button></span>
        </h5>
     </div>
   )
}
export default Comments;