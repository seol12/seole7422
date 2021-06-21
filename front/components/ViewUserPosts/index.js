import React, { forwardRef} from 'react';
import Link from 'next/link';


const ViewUserPosts = ({post}, toggleRef) => {

  return (
    <>
    <ToggleWrapper ref={toggleRef}>
      <UserPosts>
        <span><Link href={{pathname: '/UserPosts', query: {id: post.User.id} }} as={`/UserPosts/${post.User.id}`}><a>작성 글 보기</a></Link></span>
      </UserPosts>    
    </ToggleWrapper>
    </>
  );

}


export default forwardRef(ViewUserPosts);