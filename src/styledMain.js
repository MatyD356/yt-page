import styled from 'styled-components'

export const StyledMain = styled.main`
display: flex;
justify-content: center;
overflow: hidden;

@media(max-width: 425px){
  flex-direction: column;
}
`

export const StyledLeftSection = styled.section`
@media(min-width: 768px){

  width:70%;
}
`
export const StyledVideoArticle = styled.article`
margin: 2rem;
margin-left: 0;
border-bottom: 1px solid #5c5c5c;

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
}
.tags{
  margin-top: 1rem;
  margin-left: 0;
}
.tags a{
  text-decoration: none;
  margin-right: 0.1rem;
  font-size: 12px;
  color: #3EA6FF;
}
h1{
  font-weight: 400;
  color: white;

}
.views{
  margin: 1rem 0;
  color: gray;
  font-size: 1rem;
}
.video-desc{
  display: flex;
  justify-content: space-between;
  align-items: center;

}

}
.video-actions{
  list-style: none;
  display: flex;
}
.video-actions li{
  cursor: pointer;
  color: gray;
  font-weight: 600;
  margin: 0 1rem;
}
@media(max-width:768px){
  margin:0;
  text-align: center;

  .video-desc{
    display: block;
    margin-bottom: 1rem;
  }
}
`

export const StyledCreatorArticle = styled.article`
border-bottom: 1px solid #5c5c5c;

.creator{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.creator-left{
  display: flex;
  align-items: center;
}
.creator-avatar{
  height: 50px;
  width: 50px;
  background: red;
  border-radius:50%;
}
.creator-info{
  margin-left: 1rem;
}
.creator-name{
  font-weight: 700;
  color: white;
}
.creator-subs{
  font-size: 0.95rem;
  font-weight: 300;
  color: grey;
}
.creator-sub-button{
  cursor: pointer;
  border: none;
  border-radius: 3px;
  margin-right: 2rem;
  color: white;
  font-weight: 700;
  background: #CC0000;
  padding: 0.75rem 1.25rem;
}
.creator-details{
  font-size: 14px;
  margin: 1.5rem 0 1.5rem 4rem;
  color: white;
}
.creator-details-short{
  margin-bottom: 2rem;
}
.creator-details-short p a{
  color: #3EA6FF;
}
.show-more{
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  color: #AAA;
}
@media(max-width:768px){
  text-align: center;
  margin: 1rem;
  .creator{
    flex-direction: column;
  }
  .creator-sub-button{
    margin: 1rem;
  }
  .creator-details{
    margin: 1rem;
  }
}
`
export const StyledCommentsSection = styled.section`
margin-right: 1rem;
.comments-info{
  margin: 2rem 0;
  color: white;
}
.sort-by{
  color: #AAA;
  margin-left: 1rem;
  font-weight: 600;
}
.sort-by i{
  margin-right: 0.5rem;
  transform: rotate(90deg) scaleX(-1);
}
.add-comment{
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: stretch;
}
.comment-avatar{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: red;
}
.add-comment input{
  color: #AAA;
  font-size: 14px;
  margin: 0 1rem 0 1rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #5c5c5c;
  background: transparent;
  width: 93%;

}
.comment{
  font-size: 14px;
  margin-bottom: 2rem;
}
.comment-info{
  display: flex;
}
.comment-body{
  color: white;
  margin-left: 1rem;
}
.nickname{
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
}
.time{
  font-weight: 300;
  margin-left: 1rem;
  color: #AAA;
}
.comment-actions{
  margin: 1rem 4rem;
  list-style: none;
  color: #AAA;
  display: flex;
  align-items: center;
}
.comment-actions li{
  cursor: pointer;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}
.comment-actions li i {
  margin-right: 0.25rem;
}
.replies{
  cursor: pointer;
  font-weight: 600;
  color: #3EA6FF;
  margin: 1rem 4rem;
}
@media(max-width:768px){
  margin: 0;
  margin-left: 1rem;
  order: 3;
  .comments-info{
  margin: 1rem;
}
.add-comment input{
 width: 50%;
}
}
`

export const StyledRightSection = styled.section`
width: 20%;
margin-right: 7.5rem;
@media(max-width:768px){
  width: 100%;
}
`

export const StyledNextVideoSection = styled.section`
margin-top: 2rem;
.autoplay{
  margin-bottom: 1rem;
  font-weight: 700;
  color: white;
}
.nextVideos{
  margin-bottom: 1rem;
  display: flex;
  font-size: 0.95rem;
}
.next-video-title{
  color: white;
  font-weight: 700;
}
.next-video-autor,
.next-video-info{
  color: #AAA;
  font-weight: 300;
}
.border{
  padding-bottom: 1rem;
  border-bottom: 1px solid #AAA;
  margin-bottom: 1rem;
}
@media(max-width:768px){
  .autoplay{
    margin-left: 1rem;
  }
}
`