import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  // 把user profile 放到state的profile，以供render使用
  componentWillMount() {
    // 先初始化state裡的 profile物件
    this.setState({ profile: {}});
    
    // 取得Auth0的相關功能
    const { userProfile, getProfile } = this.props.auth;
    
    if (!userProfile) {
      //如果local storage裡沒有 User profile要去伺服器裡下載新的
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render () {
    // 從state裡取出profile
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
          <img src={profile.picture} alt="profile" />
          <div>
          <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
          <h3>{profile.nickname}</h3>
          </div>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
