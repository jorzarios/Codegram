import yo from 'yo-yo';
import translate from '../translate'

module.exports = function(user) {
  return yo`
  <div class="container user-page">
    <div class="row">
      <div class="col s12 m10 offset-m1 l3 offset-l3 center">
        <img src="${user.avatar}" alt="Avatar" class="avatar responsive-img">
      </div>
      <div class="col s12 m10 offset-m1 l6 left-align">
        <h1 class="username center-align">@${user.username}</h1>
        <p class="userDescription center-align">${user.userdesc}</p>
      </div>
    </div>
    <div class="divider division"></div>
    <div class="user-pictures">
      <div class="row">
        ${user.pictures.map(function (pic){
          return yo`
          <div class="col s12 m4">
            <a href="/${user.username}/${pic.id}">
              <div class="user-pic">
              <img src="${pic.url}" alt="" class="responsive-img">
              <div class="overlay">
                <div class="likes">
                  <i class="fa fa-heart" aria-hidden="true"></i> ${translate.message('likes',{likes: pic.likes})}
                </div>
              </div>
              </div>
            </a>
            <div id="modal${pic.id}" class="modal modal-fixed-footer">
              <div class="modal-content">
                <img src ="${pic.url}"/>
              </div>
              <div class="modal-footer">
                <div class="btn btn-flat"><i class="fa fa-heart" aria-hidden="true"></i> ${translate.message('likes',{likes: pic.likes})}</div>
              </div>
            </div>
          </div>`;
        })}
      </div>
    </div>
  </div>`;
}
