import React from 'react';
import './player_avatar.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const playerAvatar = props => {
  return (
    <g>
      <image
        className="animated slideInUp"
        href={props.player}
        width="150"
        height="150"
        x={props.x - 75}
        y={props.y - 100}
      />
    </g>
  );
};

export default playerAvatar;

{
  /*<pattern id="grump_avatar2" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/gsw/stephen.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="370" y="72" className="avatar_holder2" stroke="red" />
<pattern id="grump_avatar3" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/gsw/javale_mcgee.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="370" y="132" className="avatar_holder3" stroke="red" />
<pattern id="grump_avatar4" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/gsw/klay_thompson.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="370" y="182" className="avatar_holder4" stroke="red" />
<pattern id="grump_avatar5" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/gsw/draymond_green.png" width="60" height="60" x="0" y="-12" />
</pattern>
<rect width="40" height="40" x="370" y="242" className="avatar_holder5" stroke="red" />
<pattern id="grump_avatar_away" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/cle/lebron_james.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="430" y="12" className="avatar_holder_away" stroke="red" />
<pattern id="grump_avatar_away2" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/cle/kevin_love.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="430" y="72" className="avatar_holder_away2" stroke="red" />
<pattern id="grump_avatar_away3" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/cle/jr_smith.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="430" y="132" className="avatar_holder_away3" stroke="red" />
<pattern id="grump_avatar_away4" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/cle/larry_nance.png" width="60" height="60" x="0" y="0" />
</pattern>
<rect width="40" height="40" x="430" y="182" className="avatar_holder_away4" stroke="red" />
<pattern id="grump_avatar_away5" width="60" height="60" patternUnits="userSpaceOnUse">
  <image href="./images/player/cle/george_hill.png" width="60" height="60" x="0" y="-12" />
</pattern>
<rect width="40" height="40" x="430" y="242" className="avatar_holder_away5" stroke="red" />*/
}
