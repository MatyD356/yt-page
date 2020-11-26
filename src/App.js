import { StyledContainer, GlobalStyle, StyledHeader, StyledLeftHeader, StyledMidHeader, StyledRightHeader } from './styledHeader'
import { StyledMain, StyledLeftSection, StyledRightSection, StyledVideoArticle, StyledNextVideoSection, StyledCreatorArticle, StyledCommentsSection } from './styledMain'
import logo from './logo.svg'
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader>
          <StyledLeftHeader>
            <i className='fas fa-bars'></i>
            <img src={logo} alt="" width='84px' height='24px' />
          </StyledLeftHeader>
          <StyledMidHeader>
            <p className='wrapper'>
              <input type='text' placeholder='search'></input>
              <i className="fas fa-keyboard keys"></i>
            </p>
            <button><i className="fas fa-search"></i></button>
          </StyledMidHeader>
          <StyledRightHeader>
            <i className="fas fa-video"></i>
            <i className="fas fa-th"></i>
            <i className="fas fa-bell"></i>
            <div className='avatar'></div>
          </StyledRightHeader>
        </StyledHeader>
        <StyledMain>
          <StyledLeftSection>
            <StyledVideoArticle>
              <div className='videoWrapper'>
                <iframe title='rick' id="ytplayer" type="text/html" width="1060" height="596.25"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  frameBorder="0" allowFullScreen allow='autoplay'>
                </iframe>
              </div>
              <div className='tags'>
                <a href='#'>#RickAstley </a>
                <a href='#'>#NeverGonnaGiveYouUp </a>
                <a href='#'>#DancePop </a>
              </div>
              <h1>Rick Astley - Never Gonna Give You Up (Video)</h1>
              <div className='video-desc'>
                <p className='views'>809 536 147 views • 25 oct 2009</p>
                <ul className='video-actions'>
                  <li><i class="fas fa-thumbs-up"></i> 7,5 MLN</li>
                  <li><i class="fas fa-thumbs-down"></i> 234 K</li>
                  <li><i class="fas fa-share"></i> SHARE</li>
                  <li><i class="fas fa-list"></i> SAVE</li>
                  <li><i class="fas fa-ellipsis-h"></i></li>
                </ul>
              </div>
            </StyledVideoArticle>
            <StyledCreatorArticle>
              <div className='creator'>
                <div className='creator-left'>
                  <div className='creator-avatar'></div>
                  <div className='creator-info'>
                    <p className='creator-name'>Official Rick Astley</p>
                    <p className='creator-subs'>1,69 mln subs</p>
                  </div>
                </div>
                <button className='creator-sub-button'>SUBSCRIBE</button>
              </div>
              <div className='creator-details'>
                <div className='creator-details-short'>
                  <p>Rick Astley's official music video for “Never Gonna Give You Up” </p>
                  <p>Listen to Rick Astley: <a href='https://RickAstley.lnk.to/_listenYD'>https://RickAstley.lnk.to/_listenYD</a></p>
                </div>
                <button className='show-more'>SHOW MORE</button>
              </div>
            </StyledCreatorArticle>
            <StyledCommentsSection>
              <div className='comments-info'>
                <span className='comments-count'>1 212 730 comments</span>
                <span className='sort-by'><i class="fas fa-signal"></i>SORT BY</span>
              </div>
              <div className='add-comment'>
                <div className='comment-avatar'></div>
                <input type='textarea' placeholder='add public comment'></input>
              </div>
              <div className='comment'>
                <div className='comment-info'>
                  <div className='comment-avatar'></div>
                  <div className='comment-body'>
                    <p className='nickname'>Me<span className='time'>1 min ago</span></p>
                    <p className='comment-content'>This isn't your first time here
                    <br></br>And you know it.</p>
                  </div>
                </div>
                <ul className='comment-actions'>
                  <li><i class="fas fa-thumbs-up"></i>  0</li>
                  <li><i class="fas fa-thumbs-down"></i>0</li>
                  <li>REPLY</li>
                </ul>
                <div className='replies'>
                  <i class="fas fa-caret-down"></i> SHOW REPLIES
                </div>
              </div>
            </StyledCommentsSection>
          </StyledLeftSection>
          <StyledRightSection>
            <StyledNextVideoSection>
              <div className='autoplay'>
                <p>Up Next</p>
              </div>
              <div className='nextVideos border'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
              <div className='nextVideos'>
                <img alt='all stars' src='https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnW_9txnrstXtxzKXWjruRsaUHQ'></img>
                <div className='next-video-body'>
                  <p className='next-video-title'>Smash Mouth - All Star</p>
                  <p className='next-video-autor'>SMASH MOUTH</p>
                  <p className='next-video-info'>319 mln views • 10 year ago</p>
                </div>
              </div>
            </StyledNextVideoSection>
          </StyledRightSection>
        </StyledMain>
      </StyledContainer>
    </>
  );
}

export default App;
