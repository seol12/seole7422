import React from 'react';
import Link from 'next/link';
import { VideoWrapper, Video} from './style';


const PostContent = ({ postData}) => {
    
  return (
    <div>
      {postData.split(/(https?:[^\s]+)/g).map((v) => {
        if(v.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)) {
          let urlkeyvalue = v.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)[7];
          return (
            <div>
              <VideoWrapper>
                <Video src={`https://www.youtube.com/embed/${urlkeyvalue}`} title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </Video>
              </VideoWrapper>
            </div>
          );
        }
        if(v.match(/(http(s)?:\/\/)([a-z 0-9\w]+\.*)+([a-z 0-9]{2,4})/)) {
          return (
            <Link><a href={v}>{v}</a></Link>
          );
        }
        return v;
      })}
    </div>
  );
};


export default PostContent;