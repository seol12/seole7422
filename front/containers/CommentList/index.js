import React, {useState, useCallback} from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import Link from 'next/link';
import {Comment, Tooltip} from 'antd';
import {CommLI, Nickdiv, Avatapro, Avatacosu, Momentdiv, ContentColor, RemoveCommentdiv, BlackBtn,     } from './style';
import {REMOVE_COMMENT_REQUEST} from '../../reducers/post';
import moment from 'moment';
import Modal from '../../components/modal';


moment.locale('ko');


const CommentList = ({comments, post})=> {
    
    const [codal, setCodal] = useState(false);
    const id = useSelector(state=>state.user.me && state.user.me.id);
    const dispatch = useDispatch();
    
    const codalon = () => {
        
        setCodal(true);
     
    }

  
    const codaloff = () => {
      
        setCodal(false)
      
    }

    const onRemoveComment = useCallback( (itemId) => ()=>{
        dispatch({
          type:REMOVE_COMMENT_REQUEST,
           data:{
             postId:post.id,
             itemId,
           }
          })
          setCodal(false);
          
       },[])

    return(
        <>
          <CommLI>
            <Comment             
              author={<Nickdiv><p>{comments.User.nickname}</p></Nickdiv>}
              avatar={<Link href={{pathname: '/user', query: {id: comments.User.id}}}
              as={`/user/${comments.User.id}`} ><Avatapro><a><Avatacosu>{comments.User.nickname[0]}</Avatacosu></a></Avatapro></Link> }
              datetime={
                <>
                  <Tooltip title={moment(comments.createdAt).format('YYYY.MM.DD HH:mm:ss')}>
                    <Momentdiv>{moment(comments.createdAt).fromNow()}</Momentdiv></Tooltip>
                </>}
              content={<ContentColor>{comments.content}</ContentColor>}
              />
              {id && comments.User.id === id
                        
                ?<RemoveCommentdiv><BlackBtn onClick={codalon}>제거</BlackBtn>
                  {codal && (<Modal post={post} item={comments.id} onsub={onRemoveComment(comments.id)} onClose={codaloff}/>)} 
                  </RemoveCommentdiv>
                :null
              }
            </CommLI>          
       </>

          );

}


export default CommentList;